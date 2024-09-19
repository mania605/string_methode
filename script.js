//전체 문자열에서 특정 문자값을 기준으로 분리해서 배열로 반환
const span_text = document.querySelector("span").innerText;
console.log(span_text);  //'2024-09-19'


const text_arr = span_text.split('-')
console.log(text_arr); //script.js:7 (3) ['2024', '09', '19']

//배열값은 특정 문자열로 이어서 하나의 문자열로 반환하는 함수 Join
const new_text = text_arr.join('.');
console.log(new_text);  // '2024.09.19'
//일반적으로 많이 쓰이는 작업임.

//위의 split과 join을 한번에 연산 간소화하는 방법
const h2_text = document.querySelector("h2").innerText;
const new_h2 = h2_text.split(" ").join("/");
console.log(new_h2);