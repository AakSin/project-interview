import fire from '../../config/fire.js';
let db = fire.firestore();

export function fetchQuestions(interview) {
    let docRef = db.collection("Interviews").doc(interview);
    return docRef.get().then(function(doc) {
        if (doc.exists) {
            return doc.data();
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    
}