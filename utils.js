const axios = require("axios");
const { URL, GITHUB_DATA, METHOD } = require("./constants");

// 권한 요청 code 로 Access Token 을 가져와 반환
async function getAccessTokenByAuthorizationCode(code) {
  return await axios({
    method: METHOD.post,
    url: URL.github_access_token,
    headers: {
      accept: "application/json",
    },
    data: {
      client_id: GITHUB_DATA.client_id,
      client_secret: GITHUB_DATA.client_secret,
      code: code,
    },
  }).then((res) => res.data.access_token);
}

// Access Token 으로 사용자 정보를 가져와 반환
async function getUserDataByAccessToken(accessToken) {
  return await axios({
    method: METHOD.get,
    url: URL.github_user_api,
    headers: {
      Authorization: `token ${accessToken}`,
    },
  }).then((dataObject) => dataObject.data);
}

module.exports = {
  getAccessTokenByAuthorizationCode,
  getUserDataByAccessToken,
};
