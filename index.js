const text2wav = require('text2wav');
const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 80;
app.use(cors())

const tts = async(txt) => {
    let out = await text2wav(txt,{voice: 'shn', wordGap:20})
    const audioString = await Buffer.from(out).toString('base64');
    return audioString;
}

app.get('/api', async (req,res)=>{
    const text = req.query.text;
    if(text.length > 100){
        res.status(204).send({
            status:204,
            message:'Sorry, your text length is more than we\'re allowed!',
            data:''
        })
    }
    if(!text) return;
    res.status(200).send({
        status:200,
        message:'Successfully get data',
        data: await tts(text)
    })
})

app.use(express.static('public'));

app.listen(port,()=>console.log('Listen on port http://localhost:80'))
