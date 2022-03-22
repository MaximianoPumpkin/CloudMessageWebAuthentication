import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsMeLfWpHfPVw6jWFaXj7vf22-H2yZpL4",
  authDomain: "cloud-messaging-onnibank-dev.firebaseapp.com",
  projectId: "cloud-messaging-onnibank-dev",
  storageBucket: "cloud-messaging-onnibank-dev.appspot.com",
  messagingSenderId: "340072282581",
  appId: "1:340072282581:web:727ce2bfac92853160655c",
  measurementId: "G-V9K2HHF5WK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging
.requestPermission()
.then(function () {
  MsgElem.innerHTML = "Notification permission granted."
  console.log("Notification permission granted.");

  // get the token in the form of promise
  return messaging.getToken()
})
.then(function(token) {
  // print the token on the HTML page
  TokenElem.innerHTML = "Device token is : <br>" + token
})
.catch(function (err) {
ErrElem.innerHTML = ErrElem.innerHTML + "; " + err
console.log("Unable to get permission to notify.", err);
});