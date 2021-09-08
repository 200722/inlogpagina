const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

var gegevens = [
  {
    email: "ziedanireem@gmail.com",
    password: "Reem",
  },
];

function getInfo() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  for (i = 0; i < gegevens.length; i++) {
    // console.log(email == gegevens[i].email && password == gegevens[i].password);
    console.log(email);
    if (email == gegevens[i].email && password == gegevens[i].password) {
      console.log(email + "is logged in!");
      window.location.href = "test.html";
      // return
    } else if (
      email !== gegevens[i].email &&
      password !== gegevens[i].password
    ) {
      console.log("U kan niet inloggen!");
      window.location.href = "fout.html";
      // return
    }
  }
  // console.log("fout")
}

function getAccountInfo() {
  var email1 = document.getElementById("email1").value;
  var password1 = document.getElementById("password1").value;

  for (i = 0; i < gegevens.length; i++) {
    if (email1 == gegevens[i].email && password1 == gegevens[i].password) {
      console.log(email + "is logged in!");
      window.location.href = "inschrijven.html";
    }
  }
  console.log("fout");
}
