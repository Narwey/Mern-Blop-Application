    import express from 'express'
    import mongoose from 'mongoose'
    import dotenv from 'dotenv'

    dotenv.config();


    mongoose.connect(process.env.DB)
    .then(()=>{
        console.log("database connected") ;
    }).catch((err)=>{
        console.log(err.message);
    })

    const app = express() ;

    app.listen(3000 , ()=> {
        console.log("Server is running on port 3000");
    })