const BASEURL = 'http://deckofcardsapi.com/api/deck';


//1

$.getJSON(`${BASEURL}/new/draw/`)
    .then(data => {
        console.log(data, data.cards[0].value, 'of', data.cards[0].suit)
        console.log(`${data.cards[0].value.toLowerCase()} of ${data.cards[0].suit.toLowerCase()}`)
    })


//2
let firstcard = null;
$.getJSON(`${BASEURL}/new/draw/`)
    .then(data => {
        firstcard = data.cards[0];
        let deckId = data.deck_id;
        return $.getJSON(`${BASEURL}/${deckId}/draw`)
    })
    .then(data => {
        let secondcard = data.cards[0];
        [firstcard, secondcard].forEach(function(card) {
            console.log(`${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`);
        });
    })
    .catch(err => {
        console.log(err);
    });


//3
let deckId = null;
let $btn = $('button');
let $cardArea = $('#card-area');

$.getJSON(`${BASEURL}/new/shuffle/`).then(data => {
    deckId = data.deck_id;
    $btn.show();
});

$btn.on('click', function() {
    $.getJSON(`${BASEURL}/${deckId}/draw/`).then(data => {
        let cardSrc = data.cards[0].image;
        let angle = Math.random() * 90 - 45;
        let randomX = Math.random() * 40 - 20;
        let randomY = Math.random() * 40 - 20;
        $cardArea.append(
            $('<img>', {
                src: cardSrc,
                css: {
                    transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
                }
            })
        );
        if (data.remaining === 0) $btn.remove();
    });
});




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