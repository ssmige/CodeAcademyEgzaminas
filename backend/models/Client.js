import mongoose from "mongoose";

const clientSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 30,
  },
  surname: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 30,
  },
  email: {
    type: String,
    minLength: 3,
    maxLength: 30,
  },
  phoneNumber: {
    type: String,
    require: true,
    minLength: 4,
    maxLength: 15,
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Client", clientSchema);
