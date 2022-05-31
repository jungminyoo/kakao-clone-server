import User from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const friends = [
  {
    id: 1,
    name: "홍길동",
    age: 20,
    profileImg:
      "https://img1.daumcdn.net/thumb/C500x500.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/6qYm/image/eAFjiZeA-fGh8Y327AH7oTQIsxQ.png",
    backgroundImg:
      "https://cdn.newscj.com/news/photo/201001/31870_28928_182.jpg",
    profileMusic: "아리랑",
  },
  {
    id: 2,
    name: "이몽룡",
    age: 22,
    profileImg:
      "https://pbs.twimg.com/profile_images/634387664158920705/QFrLZJ3O_400x400.jpg",
    backgroundImg: "https://pbs.twimg.com/media/B8mYkcFCcAAlX1H.jpg",
    profileMusic: "가을밤에 든 생각 - 잔나비",
  },
  {
    id: 3,
    name: "누군가",
    age: 23,
    profileImg:
      "https://upload.wikimedia.org/wikipedia/commons/7/75/%EC%82%AC%EB%9E%8C.png",
    backgroundImg:
      "https://img.huffingtonpost.com/asset/5d715f643b0000683fcf22c0.jpeg?ops=scalefit_720_noupscale&format=webp",
    profileMusic: "Butter - BTS",
  },
];

const Me = {
  name: "내이름",
  age: 23,
  profileImg:
    "https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2",
  backgroundImg:
    "https://mblogthumb-phinf.pstatic.net/MjAxOTA3MTFfMjkz/MDAxNTYyODE4NzgyNzAz.spF-UPv2e4FUri41SGizxNMQRZb5VGbNs0H05cCWPfQg.e4yrDL47pXBmjyCfs4tRsi5mqU-ATAylfI42Wdu-RIQg.JPEG.yzzzii/output_935416776.jpg?type=w800",
  profileMusic: "Butter - BTS",
};

export const getUsers = (_, res) => {
  return res.send(friends);
};

export const getUser = (req, res) => {
  const idStr = req.query.id;
  const id = parseInt(idStr);
  const data = friends.filter((item) => item.id === id)[0];

  return data ? res.send(data) : res.sendStatus(400);
};

export const getMe = (_, res) => {
  return res.send(Me);
};

export const postRegister = async (req, res) => {
  const { id, password } = req.body;

  const exists = await User.exists({ id });
  if (exists) return res.status(400).send("ID Already Exists");

  try {
    await User.create({
      id,
      password,
    });
    return res.status(200).send("Register Success");
  } catch (error) {
    return res.status(400).send(error._message);
  }
};

export const postLogin = async (req, res) => {
  const { id, password } = req.body;

  const user = await User.findOne({ id });
  if (!user) return res.status(404).send("User Not Found");

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(400).send("Wrong Password");

  const token = jwt.sign(user._id.toHexString(), "secretToken");

  return res.status(200).json({ token, user });
};
