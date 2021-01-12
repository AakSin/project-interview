import fire from '../../config/fire.js';
let db = fire.firestore();

export function updateCode(interview,interviewee,code){
    let docRef = db.collection("Interviews").doc(interview).collection("interviewees").doc(interviewee);
    return docRef.update({
        code
    })
    .then(function() {
        console.log("Document successfully updated!");
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
}

export function verifySolution(interview,interviewee,qno,cno){
    let docRef = db.collection("Interviews").doc(interview).collection("interviewees").doc(interviewee);
    return docRef.update({
        qno:{
            cno:true
        }
    })
    .then(function() {
        console.log("Document successfully updated!");
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
}