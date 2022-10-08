const logOut = document.getElementById("logOut");
const mergeAccounts = document.getElementById("mergeAccounts");
const modifyAccount = document.getElementById("modifyAccount");
const displayNameHolder = document.getElementById("displayNameHolder");
const displayName = document.getElementById("displayName");
const displayEmail = document.getElementById("displayEmail");
const photoHolder = document.getElementById("photoHolder");

const auth = firebase.auth();

logOut.addEventListener("click", () => {
  //signOut() is a built in firebase function responsible for signing a user out
  auth
    .signOut()
    .then(() => {
      window.location.assign("./");
    })
    .catch((error) => {
      console.error(error);
    });
});

auth.onAuthStateChanged((user) => {
  if (user) {
    //display the displayName and photoURL of the user on the page
    if (user.displayName) {
      displayNameHolder.innerText = user.displayName;
      displayName.innerText = `Name : ${user.displayName}`;
    }
    if (user.email) displayEmail.innerText = `Email ID : ${user.email}`;
    if (user.photoURL) photoHolder.setAttribute("src", user.photoURL);
  } else {
    alert("Please login first");
    window.location.href = "/";
  }
});

//Go to modification page
modifyAccount.addEventListener("click", () => {
  window.location.assign("./edit");
});
