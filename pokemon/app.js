const BASEURL = 'https://pokeapi.co/api/v2';

//1
let totalcount = 0
$.getJSON(`${BASEURL}/pokemon`)
    .then(data => {
        console.log(data)
        totalcount = data.count
    })

let random = Math.random()

// let favNumber = 3;

// //1
// $.getJSON(`${BASEURL}/${favNumber}?json`)
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// //2
// let favNumbers = [1, 5, 10];
// $.getJSON(`${BASEURL}/${favNumbers}?json`)
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });
// //3
// Promise.all(
//     Array.from({ length: 4 }, () => {
//         return $.getJSON(`${BASEURL}/${favNumber}?json`);
//     })
// ).then(facts => {
//     facts.forEach(data => $('body').append(`<p>${data.text}</p>`));
// });