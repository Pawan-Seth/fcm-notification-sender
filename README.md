how can i add readme to 
## Notification Testing (Optional)

This repo also includes a small Node.js project `fcm-sender/`.

- Purpose: To simulate sending Firebase Cloud Messaging (FCM) push notifications for testing the React Native app.
- Not part of the main assignment, just a helper tool.
- Setup:
  1. Generate a new Firebase service account key (`service-account.json`) from Firebase Console.
  2. Place it inside the `fcm-sender/` folder.
  3. Install dependencies:
     ```bash
     cd fcm-sender
     npm install
     ```
  4. Run the script (replace with your device token from RN app logs):
     ```bash
     node sendNotification.js
     ```
- This will send a test notification and trigger deep linking in the app.
