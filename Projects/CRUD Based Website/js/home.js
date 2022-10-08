const authenticationMethod1 = document.getElementById("method1");
const authenticationMethod2 = document.getElementById("method2");
const authenticationMethod3 = document.getElementById("method3");
const lmailField = document.getElementById("lemail");
const lpasswordField = document.getElementById("lpassword");
const labels = document.getElementsByTagName("label");
const signInWithMail = document.getElementById("lbutton");
const failureModal = document.querySelector(".failure");
const signUp = document.getElementById("sbutton");
const signInWithGoogleButton = document.getElementById("signInWithGoogle");
const smailField = document.getElementById("semail");
const spasswordField = document.getElementById("spassword");
const scpasswordField = document.getElementById("scpassword");
const nameField = document.getElementById("full-name");
const displayNameField = document.getElementById("displayName");
const photoField = document.getElementById("photo");
const feedbackMessage = document.querySelector(".feedbackMessage");
const resetPassword = document.getElementById("resetPassword");
let state = 0;

const auth = firebase.auth();

const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  auth
    .signInWithPopup(googleProvider)
    .then(() => {
      window.location.assign("./profile");
    })
    .catch((error) => {
      console.error(error);
    });
};

//Sign in function
const signInWithEmailFunction = () => {
  const email = lmailField.value;
  const password = lpasswordField.value;

  //Built in firebase function responsible for authentication
  auth
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      //Signed in successfully
      window.location.assign("./profile");
    })
    .catch((error) => {
      //Something went wrong
      alert(error);
    });
};

//Adds the click event to the signInWithMail button
//so it calls the signInWithEmail function whenever a user clicks on it
signInWithMail.addEventListener("click", signInWithEmailFunction);

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // if already logged in
    window.location.href = "./profile";
  }
});

//Function wrapping all the signup parts including the email verification email
//triggered once the user clicks on the signup button
const signUpFunction = () => {
  const name = nameField.value.trim();
  const email = smailField.value;
  const password = spasswordField.value;
  const cpassword = scpasswordField.value;

  if (name == null || name == "") {
    alert("Please Enter Your Full Name");
  } else if (password !== cpassword) {
    alert("Password Doesn't Match");
  } else {
    //Built in firebase function responsible for signing up a user
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        const user = firebase.auth().currentUser;
        return user.updateProfile({
          displayName: `${name}`,
        });
      })
      .then(() => {
        console.log("Signed Up Successfully !");
        state = 1;
        sendVerificationEmail();
      })
      .catch((error) => {
        //console.error(error);
        alert(error.message);
      });
  }
};
//Function called right after the signUpWithEmailAndPassword to send verification emails
const sendVerificationEmail = () => {
  //Built in firebase function responsible for sending the verification email
  auth.currentUser
    .sendEmailVerification()
    .then(() => {
      console.log("Verification Email Sent Successfully !");
      //redirecting the user to the profile page once everything is done correctly
      window.location.assign("./profile");
    })
    .catch((error) => {
      console.error(error);
    });
};

signUp.addEventListener("click", signUpFunction);

const showError = (errorMessage) => {
  alert(errorMessage);
};

const resetPasswordFunction = () => {
  const email = lmailField.value;

  auth
    .sendPasswordResetEmail(email)
    .then(() => {
      console.log("Password Reset Email Sent Successfully!");
      window.location.assign("/");
    })
    .catch((error) => {
      console.error(error);
    });
};

resetPassword.addEventListener("click", resetPasswordFunction);
