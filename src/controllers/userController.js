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
  name: "누군가",
  age: 23,
  profileImg:
    "https://upload.wikimedia.org/wikipedia/commons/7/75/%EC%82%AC%EB%9E%8C.png",
  backgroundImg:
    "https://img.huffingtonpost.com/asset/5d715f643b0000683fcf22c0.jpeg?ops=scalefit_720_noupscale&format=webp",
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
