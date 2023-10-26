const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const OpenAI = require("openai");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
    apikey: process.env.OPENAI_API_KEY,
})

app.get("/",(req,res)=>{
    res.send("Welcome to Difty");
})

app.post("/message",async (req, res)=>{
    try {
        const aiResponse = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{"role": "system", "content": "Can you write a poem for me to ask forgiveness from a close friend on forgetting his birthday."}]
        })
        res.json({
            ai_response : aiResponse.choices[0].message.content,
        })
    }
    catch ( error ){
        console.error(error);
    }
})

app.listen(3000,()=>{
    console.log("server is running");
})


