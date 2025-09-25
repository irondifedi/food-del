import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://irondivictor7_db_user:Chukwuemeka123@cluster0.lqqxbyn.mongodb.net/food-del"
    )
    .then(() => console.log("DB connected"));
};
