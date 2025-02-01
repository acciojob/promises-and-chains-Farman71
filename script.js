let form = document.getElementById("voteForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let age = document.getElementById("age").value.trim();
  let name = document.getElementById("name").value.trim();
  age = parseInt(age, 10);

  let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry, ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  myPromise
    .then((message) => {
      alert(message);
    })
    .catch((message) => {
      alert(message);
    });
});
