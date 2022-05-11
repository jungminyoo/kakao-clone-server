import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  message: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  timestamp: { type: Date, required: true, default: Date.now },
});

const Chat = mongoose.model("Chat", chatSchema);
export default Chat;
