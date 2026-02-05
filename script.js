// pop up of books
const popUp = document.querySelector('.pop-up')
const bookHobby = document.querySelector('.bookHobby')

const hidden = document.querySelector('.hidden')


bookHobby.addEventListener('click', function() {
    console.log("works")
    popUp.classList.toggle('hidden')
})

popUp.addEventListener('click', function(){
    popUp.classList.toggle('hidden')
})
