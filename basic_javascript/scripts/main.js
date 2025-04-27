// 画像をクリックすると画像が変わる
const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/gopher_photo.png");
    }else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
};

// パーソナライズされた挨拶メッセージの追加
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    // prompt()はalert()とは違いユーザーにデータを入力するように求める
    const myName = prompt("あなたの名前を入力してください。");
    // ユーザーがnullや空白の名前を入力していないかチェック
    if (!myName) {
        setUserName();
    } else {
        // nameにmyNameを格納
    localStorage.setItem("name", myName);
    muHeading.textContent = "${myName} さん、Mozillaはかっこいいよ。";
    }
    
}
    // nameが格納されていない場合は
if (!localStorage.getItem("name")) {
    setUserName();
}else {
    // 存在する場合は(以前の訪問時にユーザーが設定した場合)
    // getItem()で格納されている名前を取得
    const storedName = localStorage.getItem("name");
    muHeading.textContent = "Mozilla はかっこいいよ、 ${storedName}";
}
    // 実行するとsetUserName()が実行される
myButton.onclick = () => {
    setUserName();
}