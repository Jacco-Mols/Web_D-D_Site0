// pop up of books
const popUp = document.querySelector('.pop-up')
const hidden = document.querySelector('.hidden')

const bookButton = document.querySelector('.bookHobby')



const bookdetails = document.querySelector('.bookdetails')
const pageTurnLeft = document.querySelector('.pageturn-left')
const pageTurnRight = document.querySelector('.pageturn-right')


bookButton.addEventListener('click', function() {
    console.log("works")
    popUp.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
})

bookdetails.addEventListener('click', function() {
    popUp.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
})


pageTurnRight.addEventListener('click]', function() {
    
})