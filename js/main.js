const leftArrowButton = document.querySelector(".pets--slider_left");
const rightArrowButton = document.querySelector(".pets--slider_right");
const sliderContent = document.querySelector(".pets--slider_content");
const closeModal = document.querySelector(".modal--close-button");


let slideInterval = 370;
let currentPosition = 0;
let leftBorder = 1;

closeModal.addEventListener("click", (r)=>{
  const modal = document.querySelector(".modal");
  modal.classList.remove("modal_active");
})

function openModal(r){
  const modal = document.querySelector(".modal");
  const modalHeader = document.querySelector(".modal--body-header");
  const modalSubHeader = document.querySelector(".modal--body-subheader");
  const modalInfo = document.querySelector(".modal--body-info");
  const age = document.querySelectorAll(".modal--body-general-information-value")[0];
  const inoculations = document.querySelectorAll(".modal--body-general-information-value")[1];
  const diseases = document.querySelectorAll(".modal--body-general-information-value")[2];
  const parasites = document.querySelectorAll(".modal--body-general-information-value")[3];
  const image = document.querySelector(".modal--body-image img");

  const {name, imageUrl, description} = inputData[r];
  modal.classList.add("modal_active");
  image.src = imageUrl;
  modalHeader.innerText = name;
  modalInfo.innerText = description;
  

}
const inputData = [
  {
    name: "Katrine", 
    imageUrl: "assets/pets-katrine.png",
    description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations."
  },
  {
    name: "Jennifer", 
    imageUrl: "assets/pets-jennifer.png",
    description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys."
  },
  {
    name: "Woody", 
    imageUrl: "assets/pets-woody.png",
    description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him."
  },
  {
    name: "Sophia", 
    imageUrl: "assets/pets-soph.png",
    description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice."
  },
  {
    name: "Timmy", 
    imageUrl: "assets/pets-timmy.png",
    description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with."
  },
  {
    name: "Charly", 
    imageUrl: "assets/pets-charly.png",
    description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy."
  },
  {
    name: "Scarlett", 
    imageUrl: "assets/pets-scarlet.png",
    description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human."
  },
  {
    name: "Freddie", 
    imageUrl: "assets/fredie.png",
    description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home."
  }
];

inputData.forEach(r=>{
  sliderContent.innerHTML = sliderContent.innerHTML + `
  <div class="pets--slider-card">
  <div class="pets--slider-card-image">
      <img src="${r.imageUrl}" alt="">
  </div>
  <div class="pets--slider-card-pet-name">
  ${r.name}
  </div>
  <button class="pets-lider-card-learn-more">
      Learn more
  </button>
</div>
  `;
})


document.querySelectorAll(".pets-lider-card-learn-more").forEach((r, index)=>{
  r.addEventListener("click", ()=>{openModal(index)});
})


let maxRight = document.querySelectorAll(".pets--slider-card").length;
sliderContent.style.gridTemplateColumns = `repeat(${maxRight}, 1fr)`;


window.addEventListener("resize", ()=>{
  sliderContent.style.transform = "translate(0px)";
  leftBorder = 1;
  currentPosition = 0;
})


rightArrowButton.addEventListener("click", () => {
  if(document.body.clientWidth < 1263) slideInterval = 320; else slideInterval = 370;
  if(leftBorder < maxRight){
  let start = Date.now();

  let timer = setInterval(function () {
    let timePassed = Date.now() - start;

    if (timePassed >= slideInterval) {
      clearInterval(timer);
      return;
    }
      draw(timePassed);


  }, 10);
  function draw(timePassed) {
    currentPosition = currentPosition - 10;
    sliderContent.style.transform = "translate(" + currentPosition + 'px)';
  }
  }
  leftBorder++;
  if(leftBorder>maxRight){
    leftBorder = maxRight;
  }
})


leftArrowButton.addEventListener("click", () => {
  if(document.body.clientWidth < 1263) slideInterval = 320; else slideInterval = 370;
  if (leftBorder > 1) {
    let start = Date.now();

    let timer = setInterval(function () {
      let timePassed = Date.now() - start;

      if (timePassed >= slideInterval) {
        clearInterval(timer);
        return;
      }
      draw(timePassed);
    }, 10);

    function draw(timePassed) {
      currentPosition = currentPosition + 10;
      sliderContent.style.transform = "translate(" + currentPosition + 'px)';
    }

  }
  leftBorder--;
  if (leftBorder < 1) {
    leftBorder = 1;
  }
})


