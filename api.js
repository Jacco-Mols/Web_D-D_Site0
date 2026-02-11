// const smoelenBoek1 = document.querySelector('.smoelenboek-1')

const BaseURL = 'https://fdnd.directus.app'
const endPoint = '/items/person/297'
const url = BaseURL + endPoint

getData()

// Jouw code
async function getData() {
    const response = await fetch(url)
    const student = await response.json()

    const studentInfo = student.data
    
    console.log(studentInfo)

    let studentHTML =
    `
    <bladzijde class="bookdetails classmates-page1" >
        <section class="smoelenboek-1">
            <h3>${studentInfo.name}</h3>
            <img src="${studentInfo.avatar}">
        </section>
        <section class="smoelenboek-2">
            <ul>
                <li><p>${studentInfo.fav_animal}</p></li>
                <li><p>${studentInfo.fav_attribute}</p></li>
                <li><p>${studentInfo.fav_border_radius}</p></li>
                <li><p>${studentInfo.fav_color}</p></li>
                <li><p>${studentInfo.fav_emoji}</p></li>
                <li><p>${studentInfo.fav_feature}</p></li>
            </ul>
        </section>
    </bladzijde>

    <bladzijde class="bookdetails classmates-page2">
        <section class="smoelenboek-3">
            <ul>
                <li><p>${studentInfo.fav_fruit}</p></li>
                <li><p>${studentInfo.fav_game}</p></li>
                <li><p>${studentInfo.fav_hobby}</p></li>
                <li><p>${studentInfo.fav_movie}</p></li>
                <li><p>${studentInfo.fav_music_genre}</p></li>
                <li><p>${studentInfo.fav_property}</p></li>
            </ul>
        </section>
        <section class="smoelenboek-4">
        </section>
    </bladzijde>
    `
    document
    .querySelector('.pop-up3')
    .insertAdjacentHTML('beforeend', studentHTML)

    const openClassmates = document.querySelector('.classmates')
    const closeBook3 = document.querySelector('.close-book3')
    const popUp3 = document.querySelector('.pop-up3')

    // open / close book hobbies
    openClassmates.addEventListener('click', function() {
        popUp3.classList.remove('hidden')
        document.body.classList.add('no-scroll')
    })

    closeBook3.addEventListener('click', function() {
        popUp3.classList.add('hidden')
        document.body.classList.remove('no-scroll')
    })

    // turn pages classmates
    const classmatesPageOne = document.querySelector('.classmates-page1')
    const classmatesPageTwo = document.querySelector('.classmates-page2')

    classmatesPageOne.addEventListener('click', function() {
        classmatesPageOne.classList.toggle('open-page')
    })

    classmatesPageTwo.addEventListener('click', function() {
        classmatesPageTwo.classList.toggle('open-page')
    })
}