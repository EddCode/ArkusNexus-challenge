import mongoose from "mongoose"
import Schema = mongoose.Schema
import generateUuid from "../../../shared/infraestructure/uuid/generate"

const AccountSchema = new Schema({
  _id: {
    type: String,
    default: () => generateUuid(),
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
    type: String
  },
}, { timestamps: true, _id: false })

export default mongoose.model("Accounts", AccountSchema)

