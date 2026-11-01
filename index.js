let img;
let name;
let desc;
let email;
let phone;
let address;

const imgComp = document.getElementById("img");
const file = document.getElementById("file");
const nameComp = document.getElementById("name");
const descComp = document.getElementById("desc");
const emailComp = document.getElementById("email");
const phoneComp = document.getElementById("phone");
const addressComp = document.getElementById("address");
const form = document.getElementById("form");

imgComp.addEventListener("click", (e) => {
  file.click();
});

imgComp.addEventListener("dragover", (e) => {
  e.preventDefault();
});

imgComp.addEventListener("drop", (e) => {
  e.preventDefault();
  img = e.dataTransfer.files[0];
});

file.addEventListener("change", (e) => {
  img = file.files[0];
});

form.addEventListener("submit", (e) => {
  name = nameComp.value;
  desc = descComp.value;
  email = emailComp.value;
  phone = phoneComp.value;
  address = addressComp.value;
});
