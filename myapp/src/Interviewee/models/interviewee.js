import fire from '../../config/fire.js';
let db = fire.firestore();

// function for updating code. Takes in the question number and code. 
export function updateCode(interview,interviewee,qno,code){
    let docRef = db.collection("Interviews").doc(interview).collection("interviewees").doc(interviewee);
    return docRef.update({
        [qno+".code"]:code
    })
    .then(function() {
        console.log("Document successfully updated!");
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
}

// function for verifying solution to question. Sets question to true upon successfuly solving. 
export function verifySolution(interview,interviewee,qno,cno,bool){
    let docRef = db.collection("Interviews").doc(interview).collection("interviewees").doc(interviewee);
    return docRef.update({
        [qno+"."+cno]:bool
    })
    .then(function() {
        console.log("Document successfully updated!");
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
}