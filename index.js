const imgComp = document.getElementById("img");
const file = document.getElementById("file");
const nameComp = document.getElementById("name");
const descComp = document.getElementById("desc");
const emailComp = document.getElementById("email");
const phoneComp = document.getElementById("phone");
const addressComp = document.getElementById("address");
const form = document.getElementById("form");
const body = document.querySelector("body");
let img;

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
  e.preventDefault();
  const name = nameComp.value;
  const desc = descComp.value;
  const email = emailComp.value;
  const phone = phoneComp.value;
  const address = addressComp.value;
  const url = img ? URL.createObjectURL(img) : "test.jpeg";

  body.innerHTML = `
  <div
      class="relative bg-[#faf4dc] w-130 h-85 rounded-xl border-4 border-[#231d19] grid grid-rows-2 p-3"
    >
      <img
        src="hc.svg"
        alt=""
        class="absolute w-30 top-69.5 left-90 rotate-[-12deg]"
      />
      <div class="grid grid-cols-16">
        <div class="col-span-5 flex justify-center items-center">
          <div
            id="img"
            class="w-[100%] h-[100%] border-[3.5px] border-[#231d19] rounded-lg"
          >
            <img src="${url}" alt="" class="object-cover w-ful h-full" />
          </div>
        </div>
        <div class="col-span-11 flex flex-col gap-6 px-4 py-5">
          <h1 class="text-5xl">${name}</h1>
          <p class="text-lg">${desc}</p>
        </div>
      </div>
      <div class="flex flex-col gap-3 justify-center">
        <div class="flex gap-2 items-center">
          <img src="email.svg" alt="" class="w-7" />
          <p>${email}</p>
        </div>
        <div class="flex gap-2 items-center">
          <img src="phone.svg" alt="" class="w-7" />
          <p>${phone}</p>
        </div>
        <div class="flex gap-2 items-center">
          <img src="address.svg" alt="" class="w-7" />
          <p>${address}</p>
        </div>
      </div>
    </div>
  `;
});
