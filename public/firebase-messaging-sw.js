importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyCMB3Vfvz_XZUs57GKFrs0DVa6oAI_u5PA",
  authDomain: "prezz-c204b.firebaseapp.com",
  projectId: "prezz-c204b",
  storageBucket: "prezz-c204b.appspot.com",
  messagingSenderId: "726282553313",
  appId: "1:726282553313:web:6121c3479208a618dab4a0",
  measurementId: "G-ZJBHCNC5ZG"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
  self.addEventListener('notificationclick', function(event) {
    let url = "https://prezz.live";
    event.notification.close(); // Android needs explicit close.
    event.waitUntil(
        clients.matchAll({type: 'window'}).then( windowClients => {
            // Check if there is already a window/tab open with the target URL
            for (var i = 0; i < windowClients.length; i++) {
                var client = windowClients[i];
                // If so, just focus it.
                if (client.url === url && 'focus' in client) {
                    return client.focus();
                }
            }
            // If not, then open the target URL in a new window/tab.
            if (clients.openWindow) {
                return clients.openWindow(url);
            }
        })
    );
});
});