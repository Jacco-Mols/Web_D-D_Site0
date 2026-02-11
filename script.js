// pop up of books
const hidden = document.querySelector('.hidden')

// ------- leerdoelen - open/close
const openLeerdoelen = document.querySelector('.leerdoelen')
const closeBook1 = document.querySelector('.close-book')
const popUp = document.querySelector('.pop-up')

openLeerdoelen.addEventListener('click', function() {
    popUp.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
})

closeBook1.addEventListener('click', function() {
    popUp.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
})

// turn pages leeroelen
const pageOne = document.querySelector('.page1')
const pageTwo = document.querySelector('.page2')

const open = document.querySelector('.open-page')
const close = document.querySelector('.close-page')

pageOne.addEventListener('click', function() {
    pageOne.classList.toggle('open-page')
})

pageTwo.addEventListener('click', function() {
    pageTwo.classList.toggle('open-page')
})

// ------- hobbies - open/close
const openhobbies = document.querySelector('.hobbies')
const closeBook2 = document.querySelector('.close-book2')
const popUp2 = document.querySelector('.pop-up2')


openhobbies.addEventListener('click', function() {
    popUp2.classList.remove('hidden')
    document.body.classList.add('no-scroll')
})

closeBook2.addEventListener('click', function() {
    popUp2.classList.add('hidden')
    document.body.classList.remove('no-scroll')
})

// turn pages hobbies
const hobbiesPageOne = document.querySelector('.hobbies-page1')
const hobbiesPageTwo = document.querySelector('.hobbies-page2')

hobbiesPageOne.addEventListener('click', function() {
    hobbiesPageOne.classList.toggle('open-page')
})

hobbiesPageTwo.addEventListener('click', function() {
    hobbiesPageTwo.classList.toggle('open-page')
})