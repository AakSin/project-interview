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
        ["testcases."+qno+"."+cno]:true
    })
    .then(function() {
        console.log("Document successfully updated!");
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
}

export function runCode(event,code,input1,input2){

    //     fetch(
    //       "https://project-interview-api.herokuapp.com/",
    //       {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //           code,
    //           first:input,
    //           second:""
    //         }),
    //       }
    //     )
    //       .then((response) => response.json())
    //       .then((data) => {
    //         setOutput(data.output)
    //         setLoading(false)
    //       })
    //       .catch(()=>{
    //         setLoading(false)
    //       });
    //     event.preventDefault();
        
    //   };
}