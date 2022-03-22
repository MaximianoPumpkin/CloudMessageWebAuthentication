importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js",);
importScripts(
    "https://www.gstatic.com/firebasejs/7.16.1/firebase-analytics.js",);

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

messaging.setBackgroundMessageHandler(function(payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload,
    );
    // Customize notification here
    const notificationTitle = "Background Message Title";
    const notificationOptions = {
        body: "Background Message body.",
        icon: "/itwonders-web-logo.png",
    };

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions,
    );
});

