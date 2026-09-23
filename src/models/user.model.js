import { model, Schema } from "mongoose";
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    fullname: String,
    birthdate: Date,
    createdAt: Date,
    updatedAt: Date,
})
const userModel = model("User", UserSchema);
export default userModel;