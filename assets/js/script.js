// const article = document.querySelector("article");

// article.addEventListener("click", (e) => {
//     console.log(e.target.innerText);
//   // Tilføj event til callback
//   // - Log event
//   // - Udforsk og log ting til højre og venstre
// });

// Lav eventlistener på ul og lyt efter klik på <li> og alert hvad der står derinde i
//  - Vælg det element der skal have listener

// let ulEl = document.querySelector('ul');

// //  - Opsæt listener med relevant event, f.eks. click eller mouseenter

// ulEl.addEventListener('click', (e) => {
//     e.preventDefault();
//     alert(e.target.textContent);
// });

//  - Skriv callback og husk event-parameter
//  - Grav ind in event.target og find og log teksten på det element der blev klikket på


//TIL MODAL
//vælg relavente knap elementer fra HTML 
let openBtnEl = document.querySelector('.open');
let closeBtnEl = document.querySelector('.close');
let dialogEl = document.querySelector('dialog')

openBtnEl.addEventListener('click', () => {
    dialogEl.showModal();
});
closeBtnEl.addEventListener('click', () => {
    dialogEl.close();
});


