    import express from 'express'
    import mongoose from 'mongoose'
    import dotenv from 'dotenv'
    import userRouter from './routes/user.route.js'
    import authRouter from './routes/auth.route.js'

    dotenv.config();


    mongoose.connect(process.env.DB)
    .then(()=>{
        console.log("database connected") ;
    }).catch((err)=>{
        console.log(err.message);
    })

    const app = express() ;
    app.use(userRouter);
    app.use(authRouter);

    app.listen(3000 , ()=> {
        console.log("Server is running on port 3000");
    })