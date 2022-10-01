window.addEventListener("DOMContentLoaded", () => {
  // Github로 로그인 버튼 클릭 시 발동
  const $loginBtn = document.querySelector("#login-btn");
  $loginBtn.addEventListener("click", () => {
    location.href = "/github-oauth";
  });
});
