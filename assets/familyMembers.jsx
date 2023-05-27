const familyMember = [
  {
    fulllname: "Siti Nazirah Iman",
    nickname: "Ummi",
    birthday: new Date("1972-08-22").toString(),
    gender: "female",
    bloodType: "O+",
    contactNo: "013-3727873",
    imageURI:
      "https://pbs.twimg.com/profile_images/1595000811406655491/F6rXvt6d_400x400.jpg",
  },
  {
    fulllname: "Salman Idrus",
    nickname: "Abah",
    birthday: new Date("1960-11-10").toString(),
    gender: "male",
    bloodType: "O+",
    contactNo: "012-37342167",
    imageURI: "",
  },
  {
    fulllname: "Siti Aishah Salman",
    nickname: "Kakak",
    birthday: new Date("1989-08-25").toString(),
    gender: "female",
    bloodType: "O+",
    contactNo: "013-3427192",
    imageURI: "",
  },
  {
    fulllname: "Abdul Rahman Salman",
    nickname: "Aman",
    birthday: new Date("2006-04-06").toString(),
    gender: "male",
    bloodType: "O+",
    contactNo: "011-29817727",
    imageURI:
      "data:image/png;base64,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",
  },
  {
    fulllname: "Abdul Hadi Salman",
    nickname: "Abang",
    birthday: new Date("1990-12-04").toString(),
    gender: "male",
    bloodType: "O+",
    contactNo: "012-2171223",
    imageURI: "",
  },
];

export default familyMember;
