import mongoose from "mongoose"
import validator from "validator"

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3,"First Name must contain atleast 3 characters!"],
        maxLength: [30,"First Name cannot exceed 30 characters!"]
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3,"Last Name must contain atleast 3 characters!"],
        maxLength: [30,"Last Name cannot exceed 30 characters!"]
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide valid Email!"]
    },
    phone:{
        type: String,
        required: true,
        minLength: [10,"Phone Number must contain only 10 characters!"],
        maxLength: [10,"Phone Number cannot exceed 10 characters!"]
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }
})

export const Reservation = mongoose.model("Reservation",reservationSchema)