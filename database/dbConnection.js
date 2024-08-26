import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "Restaurant_App"
    }).then(()=>{
        console.log(`DB Connected`)
    }).catch(err=>{
        console.log(`Some error occoured while connection to database ${err}`)
    })
}