const NAV = document.querySelector('.menu');
const TAGS = document.querySelector('.portfolio__tags');
const GALLERY = document.querySelector('.gallery-container-interactive');
const PHONE_VERTICAL = document.querySelector('.virtual-phone-vertical');
const PHONE_HORIZONTAL = document.querySelector('.virtual-phone-horizontal');
const arrSourceImage = [['gallery__image_boat', './assets/img/gallery/1.jpg'], ['gallery__image_droplet', './assets/img/gallery/2.jpg'], ['gallery__image_city', './assets/img/gallery/3.jpg'], ['gallery__image_robot', './assets/img/gallery/4.jpg'], ['gallery__image_animals', './assets/img/gallery/5.jpg'], ['gallery__image_SDK', './assets/img/gallery/6.jpg'], ['gallery__image_abstract', './assets/img/gallery/7.jpg'], ['gallery__image_chicken', './assets/img/gallery/8.jpg'], ['gallery__image_monster-green', './assets/img/gallery/9.jpg'], ['gallery__image_letters', './assets/img/gallery/10.jpg'], ['gallery__image_monster-white', './assets/img/gallery/11.jpg'], ['gallery__image_envelope', './assets/img/gallery/12.jpg']];

window.onload = function (){
    //add click event for menu
    NAV.addEventListener('click', (event) => {
        removeActiveClass(NAV, 'a', 'menu__item_active');
        addActiveClass(NAV, 'menu__item_active');
    });
    //add click event for tags and random shuffle portfolio images 
    TAGS.addEventListener('click', (event) => {
        if(event.target.closest('.tag')){
            if(!event.target.classList.contains('tag_selected')){
                removeActiveClass(GALLERY,'div', 'gallery__container_bordered');
                shuffle(arrSourceImage);
                let galleryImages = GALLERY.querySelectorAll('img');
                for (let i = 0; i < galleryImages.length; i++) {
                    galleryImages[i].src = arrSourceImage[i][1];
                    galleryImages[i].removeAttribute('class');
                    galleryImages[i].classList.add('gallery__image');
                    galleryImages[i].classList.add(arrSourceImage[i][0]);
                }
            }
            removeActiveClass(TAGS, 'span', 'tag_selected');
            addActiveClass(TAGS, 'tag_selected');
        }
    });
    //add\remove black screen
    PHONE_VERTICAL.addEventListener('click', () => {

        PHONE_VERTICAL.querySelector('.black-screen-vertical').classList.toggle('hidden');
    });
    
    PHONE_HORIZONTAL.addEventListener('click', () => {
    
        PHONE_HORIZONTAL.querySelector('.black-screen-horizontal').classList.toggle('hidden');
    });
    //add border on click event
    GALLERY.addEventListener('click', (e) => {
        removeActiveClass(GALLERY,'div', 'gallery__container_bordered');
        e.target.closest('.gallery__container').classList.add('gallery__container_bordered');
    });

}
function addActiveClass(block, addClass) {
    event.target.classList.add(addClass);
}

function removeActiveClass(block, elements, removeClass) {
    block.querySelectorAll(elements).forEach(element => {
        element.classList.remove(removeClass);
    });
}

function shuffle(arr) {
    let j;
    let temp;
    for (var i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
const OPEN_BUTTON = document.getElementById('send-form');
const CLOSE_BUTTON = document.getElementById('close-btn');
 OPEN_BUTTON.addEventListener('submit', (event) => {
    event.preventDefault();
    const subject = document.getElementById('subject-id').value;
    document.getElementById('subject-result').innerText = 'Без темы';
    if(subject !== ''){
        document.getElementById('subject-result').innerText = `Тема: ${subject}`;
    }
    const project = document.getElementById('project-description').value;
    document.getElementById('project-result').innerText = 'Без описания';
    if(project !== ''){
        document.getElementById('project-result').innerText = `Описание: ${project}`;
    }
    document.querySelector('.form-modal').classList.remove('hidden');
    
 });
 CLOSE_BUTTON.addEventListener('click', (event) => {
    document.getElementById('subject-result').innerText = 'Без темы';
    document.getElementById('subject-id').value = '';
    document.getElementById('project-result').innerText = 'Без описания';
    document.getElementById('project-description').value = '';
    document.querySelector('.form-modal').classList.add('hidden');
 });

function toggleSlide(button, slide, classHidden){
    document.querySelector(button).addEventListener('click', () => {
        document.querySelectorAll(slide).forEach(element =>{
            element.classList.toggle(classHidden);
        });
        document.querySelector('.slider').classList.toggle('blue-bg');
     });
}
toggleSlide('.slider__next-btn','.content-images', 'hidden');
toggleSlide('.slider__prev-btn','.content-images', 'hidden');
 

