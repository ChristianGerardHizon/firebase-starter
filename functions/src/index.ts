import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as uniqid from 'uniqid'

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

export const newUser = functions.https.onRequest((request, response) => {
	const docRef = db.collection('users').doc(uniqid());
	const data = {
		first: 'Ada',
		last: 'Lovelace',
		born: 1815,
	};
	docRef.set(data).then( _ => {
        response.send({...data, success: true}).json;
    }).catch(e => {
        response.send({...e, success: false}).json;
    })

});
