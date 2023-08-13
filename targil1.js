const getData = async () => {
  const response = await fetch("https://randomuser.me/api/?results=5&gender=male");
  const data = await response.json();
  return data;
};
getData().then((a) => console.log(a));


let button = document.getElementById("my-button");
// let name1 = document.getElementById("name1");
// let email = document.getElementById("email");
// let age = document.getElementById("age");
// let img = document.getElementById("img");
// button.addEventListener("click", () => {
//   getData().then((data) => {
//     name1.innerText = data.results[0].name.first + " " + data.results[0].name.last
//     email.innerText =  data.results[0].email
//     age.innerText = data.results[0].dob.age
//     img.src = data.results[0].picture.thumbnail
//   });
// });

let data2 = {};
getData().then((a) => console.log(a.results[0].gender));

function getFromArr(data) {
  for (let i = 0; i < data.results.length; i++) {
    name1.innerText =
      data.results[i].name.first + " " + data.results[i].name.last;
    email.innerText = data.results[i].email;
    age.innerText = data.results[i].dob.age;
    img.src = data.results[i].picture.thumbnail;
  }
}

button.addEventListener("click", () => {
  getData().then((data) => {
    for (let i = 0; i < data.results.length; i++) {
      let name1 = document.createElement("div");
      let email = document.createElement("div");
      let age = document.createElement("div");
      let img = document.createElement("img");
      name1.innerText = data.results[i].name.first + " " + data.results[i].name.last;
      email.innerText = data.results[i].email;
      age.innerText = data.results[i].dob.age;
      img.src = data.results[i].picture.thumbnail;
      let myText = document.getElementById("text");
      myText.append(name1,email,age,img)
    }
  });
});

// const getData = async () => {
//     const response = await fetch("https://api.humorapi.com/jokes/search?api-key=5c9fac4c5b8c413f8d0ce528f75d3985");
//     const data = await response.json();
//     return data;
//   };
//   getData().then((a) => console.log(a.jokes[0].joke));


// let button = document.getElementById("my-button");

// const getData = async () => {
//   const response = await fetch("https://fakestoreapi.com/products");
//   const data = await response.json();
//   return data;
// };
// getData().then((a) => console.log(a));

// button.addEventListener("click", () => {
//   getData().then((data) => {
//     for (let i = 0; i < data.length; i++) {
//       let name1 = document.createElement("div");
//       let email = document.createElement("div");
//       let age = document.createElement("div");
//       let img = document.createElement("img");
//       name1.innerText = data[i].title;
//     //   img.src = data[i].image;
//       let myText = document.getElementById("text");
//       myText.append(name1, img);
//     }
//   });
// });
