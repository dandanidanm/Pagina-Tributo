/* Boton del Menu */
const menu = document.querySelector('.menu'),
      menuBtn = document.querySelector('.menu-btn'),
      header = document.querySelector('.header');

const btnBurger = () => {
  /* boton que activa y desactiva el menu */
  menuBtn.addEventListener('click',()=>{
    menuBtn.firstElementChild.classList.toggle('none');
    menuBtn.lastElementChild.classList.toggle('none');
    menu.classList.toggle('is-active');
    header.classList.add('header-color');
  });
  /* Al dar click en un elemento del menu desactiva el menu */
  document.addEventListener('click',(e)=>{
    if(!e.target.matches('.menu a')) return false;
      menuBtn.firstElementChild.classList.remove('none');
      menuBtn.lastElementChild.classList.add('none');
      menu.classList.remove('is-active');

  })
};

btnBurger();

/* Evento Scroll para darle color al Header */

const changeHeader = () =>{
  document.addEventListener('scroll', ()=>{
    if(document.documentElement.scrollTop > 1){
      header.classList.add('header-color');
    }
    if(document.documentElement.scrollTop < 1){
      header.classList.remove('header-color');
    }
  })
}

changeHeader();

/* modal */
const album = document.querySelectorAll('.album'),
      modal = document.querySelectorAll('.album-modal'),
      closeModal = document.querySelectorAll('.close');


const abrirModal = () => {
  for(let i = 0; i < modal.length; i++){
      album[i].addEventListener('click',()=>{
      modal[i].classList.add('opacity');
      });
  };
};
abrirModal();

const cerrarModal = () => {
  for(let i = 0; i < closeModal.length; i++){
      closeModal[i].addEventListener('click', ()=>{
        modal[i].classList.remove('opacity');
      });
};
}
cerrarModal();