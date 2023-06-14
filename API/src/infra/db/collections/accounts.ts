import mongoose from "mongoose"
import Schema = mongoose.Schema

const AccountSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  accountName: {
    type: String,
    required: [true, "Account Name is required"],
  },
  clientName: {
    type: String,
    required: [true, "Client Name is required"],
  },
  responsabilityCenter: {
    type: String,
    required: [true, "Responsability Center is required"],
  },
  teamsQuery: {
    type: String,
    required: [true, "Teams Query is required"],
  },
}, { timestamps: true, _id: false })

export default mongoose.model("Accounts", AccountSchema)

