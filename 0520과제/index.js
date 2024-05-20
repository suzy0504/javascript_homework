const persons = [
  {
    이름: "철수",
    나이: 19,
    성별: "남",
  },
  {
    이름: "짱구",
    나이: 20,
    성별: "남",
  },
  {
    이름: "유리",
    나이: 21,
    성별: "여",
  },
];

console.log(persons);

const personContainer = document.querySelector(".personContainer");
const name = document.querySelectorAll(".name");
const age = document.querySelectorAll(".age");
const sex = document.querySelectorAll(".sex");

persons.forEach((person) => {
  let html템플릿 = `<div class = "persons">
                        <h1 class="name">이름 :${person.이름}<h1>
                        <h3 class="age">나이 :${person.나이}</h3> 
                        <h3 class="sex">성별 :${person.성별}</h3> 
                        <hr>
                    </div>`;
  personContainer.insertAdjacentHTML("beforeend", html템플릿);
});

const 여자찾기 = persons.find((person) => {
  return person.성별 === "여";
});
console.log(여자찾기);

const 남자찾기 = persons.filter((person) => {
  return person.성별 === "남";
});
console.log(남자찾기);

const newPerson = persons.map((person) => {
  return {
    이름: person.이름,
    나이: person.나이 + 10,
    성별: person.성별,
  };
});
console.log(newPerson);

//배열값이 바뀌었는지 확인용
console.log(persons);

const spreadPerson = [...persons];
spreadPerson.sort((a, b) => {
  return b.나이 - a.나이;
});
console.log(spreadPerson);

//배열값이 바뀌었는지 확인용
console.log(persons);

const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};

const { 이름, 나이, 주소 } = user;
console.log(이름);
console.log(나이);
console.log(주소);
