import ErrorHandler from "../error/error.js";
import { Franchise } from "../models/franchiseSchema.js";


export const sendFranchise = async (req, res, next) => {
  const { firstName, lastName, email, date, place, phone } = req.body;
  if (!firstName || !lastName || !email || !date || !place || !phone) {
    return next(new ErrorHandler("Please Fill Full Franchise Form!", 400));
  }

  try {
    await Franchise.create({ firstName, lastName, email, date, phone, place });
    res.status(201).json({
      success: true,
      message: "Franchise Request Sent Successfully!",
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }

    return next(error);
  }
};


