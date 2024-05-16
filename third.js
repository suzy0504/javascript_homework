const counter = document.querySelector("#counter");

let count = Number(counter.textContent);

const intervalId = setInterval(() => {
    if (count < 5) {
        count = count + 1 ;
        counter.textContent = count;
    } else {
        console.log("종료");
        clearInterval(intervalId);
    }
}, 1000);