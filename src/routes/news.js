const express = require('express')
const newsrouter = express.Router()
const axios = require('axios')

newsrouter.get('',async(req,res)=>{
    
    try {
        const newsAPI = await axios.get('http://newsapi.org/v2/top-headlines?country=in&apiKey=b80c2e38647242f19fa5d7a5d6861503')
        // console.log(newsAPI.data.articles)
        res.render('news', {articles : newsAPI.data.articles})
    } catch (err) {
        if(err.res){
            console.log(err.res.data)
            console.log(err.res.satus)
            console.log(err.res.headers)
        }else if(err.req){
            console.log(err.req)
        }else{
            console.error('Error',err.message)
        }
    }



})

module.exports = newsrouter