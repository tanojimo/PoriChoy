const imgComp = document.getElementById("img");
const file = document.getElementById("file");
const nameComp = document.getElementById("name");
const descComp = document.getElementById("desc");
const emailComp = document.getElementById("email");
const phoneComp = document.getElementById("phone");
const addressComp = document.getElementById("address");
const form = document.getElementById("form");
const body = document.querySelector("body");
let card;
let saveBtn;
let img;

imgComp.addEventListener("click", (e) => {
  file.click();
});

file.addEventListener("change", (e) => {
  img = file.files[0];
  if (img) {
    imgComp.innerHTML = "Image Added!";
  }
});

imgComp.addEventListener("dragover", (e) => {
  e.preventDefault();
  imgComp.classList.add("wow");
});

imgComp.addEventListener("drop", (e) => {
  e.preventDefault();
  imgComp.classList.remove("wow");
  img = e.dataTransfer.files[0];
  if (img) {
    imgComp.innerHTML = "Image Added!";
  }
});

const wait = async (element) => {
  const images = Array.from(element.querySelectorAll("img"));

  await Promise.all(
    images.map(async (image) => {
      if (!image.complete) {
        await new Promise((resolve) => {
          image.onload = resolve;
          image.onerror = resolve;
        });
      }

      if (image.naturalWidth === 0) {
        return;
      }

      try {
        await image.decode();
      } catch (error) {
        console.log(error);
      }
    }),
  );
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nameComp.value;
  const desc = descComp.value;
  const email = emailComp.value;
  const phone = phoneComp.value;
  const address = addressComp.value;
  const url = img ? URL.createObjectURL(img) : "no-image.jpeg";

  body.innerHTML = `
  <div id="card"
      style="width: 520px; height: 340px;"
      class="relative bg-[#faf4dc] rounded-xl border-4 border-[#231d19] grid grid-rows-2 p-3"
    >
      <img
        src="hc.svg"
        alt=""
        class="absolute w-30 top-69.5 left-90 rotate-[-12deg]"
      />
      <div class="grid grid-cols-16 min-h-0">
        <div class="col-span-5 min-w-0 min-h-0 flex items-center">
          <div
            id="img"
            class="w-full h-full max-h-full overflow-hidden border-[3.5px] border-[#231d19] rounded-lg"
          >
            <img src="${url}" alt="" class="block object-cover w-full h-full" />
          </div>
        </div>
        <div class="col-span-11 flex flex-col gap-6 px-4 py-5">
          <h1 class="text-5xl">${name}</h1>
          <p class="text-lg">${desc}</p>
        </div>
      </div>
      <div class="flex flex-col gap-3 justify-center">
        <div class="flex gap-2 items-center">
          <img src="email.png" alt="" class="w-7" />
          <p>${email}</p>
        </div>
        <div class="flex gap-2 items-center">
          <img src="phone.png" alt="" class="w-7" />
          <p>${phone}</p>
        </div>
        <div class="flex gap-2 items-center">
          <img src="address.png" alt="" class="w-7" />
          <p>${address}</p>
        </div>
      </div>
    </div>
    <button id="save" class="px-6 py-3 border-2 border-[#231d19] rounded-lg active:bg-[#faf4dc] duration-75">Save as Image</button>
  `;

  card = document.getElementById("card");
  saveBtn = document.getElementById("save");

  saveBtn.addEventListener("click", async (e) => {
    await wait(card);

    const pic = await html2canvas(card, {
      scale: 2,
      backgroundColor: null,
      useCORS: true,
      logging: true,
    });

    const link = document.createElement("a");
    link.download = "card.png";
    link.href = pic.toDataURL("image/png");
    link.click();
  });
});
