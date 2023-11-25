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
    require: true,
    minLength: 3,
    maxLength: 30,
  },

  registrationDate: {
    type: Date,
    default: Date.now,
    require: true,
  },
});

export default mongoose.model("Client", clientSchema);
