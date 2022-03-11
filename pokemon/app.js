const BASEURL = 'https://pokeapi.co/api/v2';

// //1
// let randomId = [];
// $.getJSON(`${BASEURL}/pokemon?limit=1126`)
//     .then(data => {
//         for (let i = 0; i < 3; i++) {
//             let random = Math.floor(Math.random() * data.count)
//             let url = data.results[random].url
//             $.getJSON(url).then(
//                 data => {
//                     speurl = data.species.url
//                     $.getJSON(speurl).then(
//                         data => {
//                             let name = data.name;
//                             let text = data.flavor_text_entries.find(entry => entry.language.name === 'en')
//                             console.log(name, text)
//                         })
//                 }
//             )
//         }
//     })

//2

async function getStarWarData() {
    console.log('starting');
    let movieData = await axios.get(`${BASEURL}/pokemon?limit=1126`);
    console.log('all done');
    console.log(movieData.data);
}