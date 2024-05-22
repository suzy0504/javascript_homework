const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};

localStorage.setItem("user", JSON.stringify(user));

console.log(JSON.parse(localStorage.getItem("user")));

const setAge = JSON.parse(localStorage.getItem("user"));

let newUser = {
  이름: user.이름,
  나이: 30,
  주소: user.주소,
};

localStorage.setItem("user", JSON.stringify(newUser));

console.log(JSON.parse(localStorage.getItem("user")));

const options = {
  method: "GET",
};

fetch("https://jsonplaceholder.typicode.com/posts", options)
  .then((response) => response.json())
  .then((data) => console.log(data));
