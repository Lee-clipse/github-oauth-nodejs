const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  let dataObject = {};
  // Github OAuth 로 받아온 유효한 사용자의 정보가 있다면 화면에 표시
  const isUserDataExist = req.cookies.userData !== undefined;
  if (isUserDataExist) {
    const { userName, userRepo } = req.cookies.userData;
    dataObject = { userName, userRepo };
  }
  res.render("index", { ...dataObject });
  next();
});

module.exports = router;
