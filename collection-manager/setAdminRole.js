const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp({
    credential: admin.credential.cert(require('./firebase-adminsdk.json')),
  });
  

exports.setAdminRole = functions.https.onCall((data, context) => {
  
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'Request had no authentication.');
  }

  const userEmail = 'dalerkim4@gmail.com';

  return admin.auth().getUserByEmail(userEmail)
    .then(user => {
      return admin.auth().setCustomUserClaims(user.uid, { admin: true });
    })
    .then(() => {
      return { message: `Success! ${userEmail} has been made an admin.` };
    })
    .catch(error => {
      throw new functions.https.HttpsError('internal', error.message);
    });
});
