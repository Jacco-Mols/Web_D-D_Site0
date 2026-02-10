

myData()

async function myData () {
     const BaseURL = 'https://fdnd.directus.app'
     const endPoint = '/items/person?filter[squads][squad_id][tribe][name]=CMD%20Minor%20Web%20Dev&filter[squads][squad_id][cohort]=2526'
     const url = BaseURL + endPoint

    let response = await fetch(url)

    let myInfo = await response.json()

    console.log(myInfo)
}