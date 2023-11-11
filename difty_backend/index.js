const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const OpenAI = require("openai");

const mongoose = require('mongoose');

const giftSchema = new mongoose.Schema({
    generatedId: String,
    message: String,
    bg: String
})

dotenv.config();

const SharedGift = mongoose.model('SharedGift' , giftSchema);
const dbURI = process.env.MONGO_URI;
mongoose.connect(dbURI);



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

        const prompt = "Write a " + content + " on behalf of " + from + " to " + to + " based on following information in exactly 8 lines " + info; 
        const aiResponse = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{"role": "system", "content": prompt}]
        })
        res.json({
            generated_gift : aiResponse.choices[0].message.content,
        })
    }
    catch ( error ){
        res.send(error)
    }
})


app.post("/generateLink",async (req,res)=>{
    try{
        const generatedId = req.body.generatedId;
        const message = req.body.message;
        const bg = req.body.bg;

        const newGift = new SharedGift({generatedId , message , bg});
        await newGift.save();
        res.sendStatus(200);
    }
    catch(error){
        res.send(error);
    }
})

app.get("/generateLink", async (req,res)=>{
    try{
        const inputId = req.body.generatedId;
        const gift = await SharedGift.find({generatedId:inputId})
        if ( gift ){
            res.json(gift[0]);
        }
    }
    catch(error){
        res.send(error);
    }
})
app.listen(3000,()=>{
    console.log("server is running");
})


