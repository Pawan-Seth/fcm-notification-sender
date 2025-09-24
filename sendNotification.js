const admin = require("firebase-admin");

const serviceAccount = require("./service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const registrationToken = "cowYK6-pQuGWwMw6Dxo0yf:APA91bEXqS_WMaHPrYHQ2XIq3dlk23FpBhP7Su3rjlj7tW9VRAsGNgb6EhGMYdk4WXH-5b3tP4JL4YT2mcoy7Yb9J09v1qmj4q7JauOVG5kVIpo4mrZJLTM";

const message = {
  token: registrationToken,
  notification: {
    title: "🚀 New Task Alert",
    body: "Tap to open Task 2",
  },
  data: {
    screenName: "TaskForm",
    taskId: "1",
  },
};

admin
  .messaging()
  .send(message)
  .then((response) => {
    console.log("✅ Successfully sent:", response);
  })
  .catch((error) => {
    console.error("❌ Error sending:", error);
  });
