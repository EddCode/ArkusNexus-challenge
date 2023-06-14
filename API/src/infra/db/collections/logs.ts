import mongoose from "mongoose"
import Schema = mongoose.Schema

const LogSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  team: {
    type: Schema.Types.ObjectId,
    required: [true, "Team is required"],
  },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, "User is required"],
  },
  startDate: {
    type: Date,
    required: [true, "Start Date is required"],
  },
  endDate: {
    type: Date,
    required: [true, "End Date is required"],
  },
  logType: {
    type: String,
    required: [true, "Log Type is required"],
  },
}, { timestamps: true })

export default mongoose.model("Log", LogSchema)
