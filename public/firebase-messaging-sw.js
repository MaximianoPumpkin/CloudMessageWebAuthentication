importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js",);
importScripts(
    "https://www.gstatic.com/firebasejs/7.16.1/firebase-analytics.js",);
    importScripts('/__/firebase/9.2.0/firebase-app-compat.js');
    importScripts('/__/firebase/9.2.0/firebase-messaging-compat.js');
    importScripts('/__/firebase/init.js');
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
messaging.setBackgroundMessageHandler(function (payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            return registration.showNotification("New Message");
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
    console.log('notification received: ', event)
});