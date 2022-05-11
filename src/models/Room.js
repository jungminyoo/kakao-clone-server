import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  title: { type: String, required: true },
  profileImg: {
    type: String,
    default:
      "https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2",
  },
  backgroundImg: {
    type: String,
    default:
      "https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2",
  },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  chats: [{ type: mongoose.Schema.Types.ObjectId, ref: "Chat" }],
});

const Room = mongoose.model("Room", roomSchema);
export default Room;
