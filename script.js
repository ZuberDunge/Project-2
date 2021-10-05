const addNewListPopUp = document.querySelector('#add-new-list-box');
const inputList = document.querySelector('#input-box-list');
const inputItem = document.querySelector('#input-box-item');
const addNewListPopUpBtn = document.querySelector('#add-new-list');
const addNewItemPopUp = document.querySelector('#add-new-item-box');
const addNewListBtn = document.querySelector('.add-new-list-btn');
const addNewItemBtn = document.querySelector('.add-new-item-btn');
const closePopUp = document.querySelector('.close');
const header = document.querySelector('.header');
const homeText = document.querySelector('.home-text');
const parentBox = document.querySelector('.boxes');
const blur = document.querySelector('.blur');
const containerSingle = document.querySelector(".container");
const triptoparis =  document.querySelector(".triptoparis");
const singlecardcontainer = document.querySelector('.singlecardcontainer');

let arrayOfObjectsOfCards = [];

// if(arrayOfObjectsOfCards.length==0){
//   homeText.style.display = "block"
// }else{
//   homeText.style.display = "none"
// }


addNewListPopUpBtn.addEventListener("click", () => {
  addNewListPopUp.style.display = "block";
  blur.style.filter = "blur(8px)";
});


closePopUp.addEventListener("click", () => {
  addNewListPopUp.style.display = "none";
  blur.style.filter = "none";
});



function addCard(e) {
  // e.preventDefault();
  const cardName = inputList.value;
  const cardObjet = {
    id: Date.now(),
    name: cardName
  };
  arrayOfObjectsOfCards.push(cardObjet);
  inputList.value = "";

}

let selectedCardId;
function createCard() {

  let card = document.createElement("div");
  card.className = "box";
  homeText.style.display = "none";
  for (let index = 0; index < arrayOfObjectsOfCards.length; index++) {
    const element = arrayOfObjectsOfCards[index];
    card.id = element.id;
    card.innerHTML = `<i class="fas fa-trash-alt icon-style-22 display-none removeIcon"></i> <i class="icon-style-2 display-none fas fa-plus-circle plusbtn" data-card-id = "${card.id}"></i>`

    parentBox.appendChild(card);
    const HeadingOfCard = document.createElement("h1");
    
    HeadingOfCard.className = "headings subhead";
    HeadingOfCard.id = element.id;
    
    let cardsHeading = document.createTextNode(element.name);
    HeadingOfCard.appendChild(cardsHeading);
    card.appendChild(HeadingOfCard);

    const line = document.createElement("hr");
    card.appendChild(line);
const headingOpen = document.querySelectorAll(".headings")
    headingOpen.forEach(e => {
        e.addEventListener("click", (e) => {
            let selDiv = e.target.parentNode;  
            let currentDiv = e.target;  
            console.log(currentDiv.innerText) 
            
            triptoparis.innerText = currentDiv.innerText;

            let singleCard = document.createElement('div');
            singleCard.className = "single-card";
            singleCard.className = "single-style";
            singleCard.appendChild(selDiv);            
           arrayOfObjectsSingle.unshift(singleCard);            
            console.log(arrayOfObjectsSingle)           

            singlecardcontainer.appendChild(arrayOfObjectsSingle[0]);
            parentBox.style.display = "none";
            header.style.display = "none";
            containerSingle.style.display = "block";
            
        })

    })

  }


  






  parentBox.style.display = "flex";
  parentBox.style.flexWrap = "wrap";
  parentBox.style.rowGap = "2.5rem";

  // const headingOpen = document.querySelectorAll(".headings")
  // headingOpen.forEach(e => {
  //   e.addEventListener("click", (e) => {
  //     let selDiv = e.target.parentNode;
  //     singleCard.appendChild(selDiv);
  //     parentBox.style.display = "none";
  //     blur.style.display = "none";
  //     containerSingle.style.display = "block";
  //   })

  // })

  const removeitem = document.querySelectorAll(".removeIcon");
  removeitem.forEach(e => {
    e.addEventListener("click", (e) => {
      let selDiv = e.target.parentNode;
      selDiv.remove();
    })
  })

  const plusBtnInCard = document.querySelectorAll(".plusbtn");
  plusBtnInCard.forEach(e => {
    e.addEventListener("click", (e) => {
      addNewItemPopUp.style.display = "block";
      blur.style.filter = "blur(8px)";
      console.log(e.target.dataset);
      selectedCardId = e.target.dataset.cardId;
    })
  })
}

let arrayOfObjectsSingle = [];

  function backToMainList(e) {
      parentBox.style.display = "flex"; 
      arrayOfObjectsSingle[0].classList.remove("single-style");
      parentBox.appendChild(arrayOfObjectsSingle[0]);
      arrayOfObjectsSingle = [] ;
      header.style.display = "flex";

      containerSingle.style.display = "none";
  }
  


// function backToMainList(e) {
//   parentBox.style.display = "block";

//   const childT = singleCard.firstChild;
//   parentBox.appendChild(childT); 
//   singleCard.style.display = "none";
//   blur.style.display = "block";
//   containerSingle.style.display = "none";
// }






// addNewItemBtn.addEventListener("click", addingDataIntoCard);


function addingDataIntoCard(temp) {
  if(inputItem.value == ""){
    alert("Enter Something")
  }else{


  const data = inputItem.value;
  const dataincard = document.createElement('p');
   for(let index = 0; index < arrayOfObjectsOfCards.length; index++){
        const element = arrayOfObjectsOfCards[index];
        if( element.id == selectedCardId ){
            console.log(data);
            dataincard.innerHTML = data;
            document.getElementById(`${element.id}`).appendChild(dataincard);
        }
    }
               // checklist
                dataincard.classList.add('tasklistitem');
                const checkBox = document.querySelectorAll(".tasklistitem")
                checkBox.forEach(e => {
                  e.addEventListener("click", (e) => {
                    let selDiv = e.target;
                    selDiv.style.textDecoration = "line-through";
                    selDiv.style.color = "red"
                  })
                })



  blur.style.filter = "none";
  addNewItemPopUp.style.display = "none";
  parentBox.style.filter = "none";
  selectedCardId = null;
              }
}

// // checklist
// dataincard.classList.add('tasklistitem');
// const checkBox = document.querySelectorAll(".tasklistitem")
// checkBox.forEach(e => {
//   e.addEventListener("click", (e) => {
//     let selDiv = e.target;
//     selDiv.style.textDecoration = "line-through";
//     selDiv.style.color = "red"
//   })
// })






// var noItem = document.querySelector(".noItem");
// var addbtn = document.querySelector(".add");

// let counter = 1;

addNewListBtn.addEventListener("click", () => {


  if(inputList.value == ""){
    alert("Enter Something")
  }else{
  addCard();
  parentBox.style.display = "block";
  addNewListPopUp.style.display = "none";
  blur.style.filter = "blur(0px)";
  // noItem.style.display = "none";
  // document.querySelector(".noItem").style.display = "none";
  createCard();}
})