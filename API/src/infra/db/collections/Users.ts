import mongoose, { Schema } from "mongoose"
import generateUuid from "../../../shared/infraestructure/uuid/generate"

const UserSchema = new Schema({
  _id: {
    type: String,
    default: () => generateUuid(),
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  role: {
    type: String,
    enum: ["super admin", "admin", "user"],
    required: [true, "Role is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  englishLevel: String,
  skills: String,
  resume: String,
}, { timestamps: true, _id: false })


export default mongoose.model("User", UserSchema)
