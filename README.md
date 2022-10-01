# Github OAuth with NodeJS and Express.js


# ⚡ 실행 방법

```
npm i
```

```
node ./app
```

# 🔥 결과

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/79911816/193420356-271c0705-0257-4364-bf3e-508c0093edc6.gif)

# 🛑 주의 사항

.env 파일은 .gitignore에 의해 지워졌기 때문에 아래 코드에서 에러가 발생할 것입니다.

```
// constants.js
const GITHUB_DATA = {
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
};
```

필요하다면 환경변수를 직접 설정하여 사용하시면 되겠습니다.
