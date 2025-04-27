// 見出しの参照をmyHeadingに格納
const myHeading = document.querySelector("h1");
// myHeadingのテキストを変更
myHeading.textContent = "Hello world!";

// アロー関数は()=>をfunction()の代わりに使用する
document.querySelector("html").addEventListener("click", function () {
    alert("痛っ! つつかないで!");
  });
  