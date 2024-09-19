console.log("test");

const h1 = document.querySelector("h1");
h1.innerText = "Test";

const h2 = document.querySelector("h2");
const linkURL = "https://www.naver.com";
h2.innerHTML = `<a href=${linkURL}>naver</a>`;

const h3 = document.querySelector('h3');
const h3_text = h3.innerText;
//h3 문자열을 0위치에서ㅜ터 50번째 위치까지 짜른뒤
//짜른 문자열을 다시 h3.innerText 프로퍼티에 대입해서 적용
h3.innertext = h3_text.substring(0, 50)

//console.log(h3.innerText.length);
//h3.innerText