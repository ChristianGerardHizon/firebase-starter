import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

export const helloWorld = functions.https.onRequest((request, response) => {
	const docRef = db.collection('users').doc('alovelace');
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
