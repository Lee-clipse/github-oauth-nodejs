
const express = require('express');
const router = express.Router();
const { URL, GITHUB_DATA } = require("../constants");

const {
    getAccessTokenByAuthorizationCode,
    getUserDataByAccessToken,
} = require("../utils");

// Github로 로그인 버튼 클릭 시 발동
router.get('/', function (req, res, next) {
    const url = URL.github_authorization;
    const client_id = GITHUB_DATA.client_id;
    const param = new URLSearchParams({ client_id }).toString()
    res.redirect(`${url}?${param}`);
    next();
});

router.get("/callback?*", async function ({ query: { code } }, res, next) {
    const accessToken = await getAccessTokenByAuthorizationCode(code);
    const { name, public_repos } = await getUserDataByAccessToken(accessToken);
    const userData = { userName: name, userRepo: public_repos };
    res.cookie("userData", userData);
    res.redirect("/");
    next();
});

module.exports = router;
