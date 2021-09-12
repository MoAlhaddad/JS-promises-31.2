axios
  .get(`http://numbersapi.com/6?json`)
  .then(favNumFact => {
    console.log(favNumFact.data);
  })

axios
  .get(`http://numbersapi.com/6,12,30,81?json`)
  .then(numsFacts => {
    console.log(numsFacts.data);
  })

let fourNumFacts = [];

for (let i = 1; i < 5; i++) {
  fourNumFacts.push(
    axios.get(`http://numbersapi.com/6`)
  );
}

Promise.all(fourNumFacts)
  .then(numArr => (
    numArr.forEach(f =>
      $("body").append(`<p>${f.data}</p>`),
      )
  ))
  .catch(err => console.log(err));

// let baseURL = "http://numbersapi.com/6?json";
//  res = axios
//    .get(baseURL)
//    .then(f1 => {
//      console.log(f1.data);
//      return axios.get(baseURL);
//    })
//    .then(f2 => {
//      console.log(f2.data);
//      return axios.get(baseURL);
//    })
//    .then(f3 => {
//      console.log(f3.data);
//      return axios.get(baseURL);
//    })
//    .then(f4 => {
//      console.log(f4.data);
//      return axios.get(baseURL);
//    });