axios
  .get(`https://deckofcardsapi.com/api/deck/new/draw`)
  .then(card => {
    console.log(card.data.cards[0].value, card.data.cards[0].suit);
  });

let baseURL = "https://deckofcardsapi.com/api/deck";
 res = axios
   .get(`${baseURL}/new/draw`)
   .then(c1 => {
     let deckId = c1.data.deck_id;
     console.log(c1.data.cards[0].value, c1.data.cards[0].suit);
     return axios.get(`${baseURL}/${deckId}/draw`);
   })
   .then(c2 => {
     console.log(c2.data.cards[0].value, c2.data.cards[0].suit);
   });

let $btn = $('button');
res = axios
  .get(`${baseURL}/new/shuffle`)
  .then(deck => {
    deckId = deck.data.deck_id;
    $btn.show();
  });
  $btn.on('click', function () {
    $.getJSON(`${baseURL}/${deckId}/draw/`).then(data => {
      let imgSrc = data.cards[0].image;
      $("#cardArea").append(
        $('<img>', {
          src: imgSrc
      })
    );
    if (data.remaining === 0) $btn.remove();
  });
});