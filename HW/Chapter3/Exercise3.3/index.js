const express = require('express');

const app=express();
const port=3000;

app.get('/factorial',(req,res)=>{
    const number=req.query.number;
    res.redirect(`/factorial/:${number}`);
});
app.get(`/factorial/:number`,(req,res)=>{
    const number=req.params.number;
    const p_num=parseInt(number,10);
    let result=1;
    for(let i=1;i<=p_num;i++) result*=i;
    res.send(`${result}`)
});


app.listen(port, () => console.log(`Server listening on port ${port}!`));
