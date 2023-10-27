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
        const from = req.body.from;
        const to = req.body.to;
        const info = req.body.info;
        const content = req.body.content;

        const prompt = "Write a " + content + " on behalf of " + from + " to " + to + " based on following information in about 30 words " + info; 
        const aiResponse = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{"role": "system", "content": prompt}]
        })
        res.json({
            generated_gift : aiResponse.choices[0].message.content,
        })
    }
    catch ( error ){
        console.error(error);
    }
})

app.listen(3000,()=>{
    console.log("server is running");
})


