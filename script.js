document.querySelector(".btn").addEventListener("click", function () {
    document.querySelector(".title").innerHTML = "제목 아니다."
})

function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(1, 3));



function isEvenOrOdd(num) {
    if (num % 2 === 0 || false) {
        return "짝수입니다.";
    } else {
        return "홀수입니다.";
    }
};
console.log(isEvenOrOdd(2));



const person = {
    이름: "병수",
    나이: 20,
};
console.log(person);
