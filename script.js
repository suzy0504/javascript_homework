document.querySelector("#container").addEventListener("click", function(event) {
    event.target;
})

function getSquare(number) {
    return number ** 2;
}

const result = getSquare(5);
console.log(result);