require("dotenv").config();

const URL = {
  github_authorization: "https://github.com/login/oauth/authorize",
  github_access_token: "https://github.com/login/oauth/access_token",
  github_user_api: "https://api.github.com/user",
};

const GITHUB_DATA = {
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
};

const METHOD = {
  get: "GET",
  post: "POST",
};

module.exports = { URL, GITHUB_DATA, METHOD };
