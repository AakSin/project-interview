import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './FORM.css'
import X from './Images/X.png'
import fire from './config/fire.js'
import { useHistory } from 'react-router-dom';

function  FORM(){

    let history = useHistory();

    const db = fire.firestore();

    function checkIfExists(User){
        db.collection('Users').doc(User).get()
        .then((doc)=>{
            if(doc){
                return true;
            }
            else{
                return false;
            }
        })
        .catch((error)=>alert(error.message))
    }

    function addUserName(Email , User){
        if(!checkIfExists(User)){
            db.collection('Users').doc(User).set(
                {
                    Email : Email,
                    Username : User,
                }
            )
            .then(()=>{
                console.log('Successfully Created')
            }
            )
            .catch(error => alert(error.message)
            )
        }
        else {
            alert('Username Already Taken');
        }
    }

    function userToEmail(){
        db.collection('Users').doc(document.getElementById('username1').value).get()
        .then((doc)=>{
             let email =  doc.data().Email;
             while(email == null){
             }
             const auth = fire.auth();
            auth.signInWithEmailAndPassword(email, document.getElementById('password1').value)
            .catch((error) => alert(error.message))
            .then(user => {
                if(user){
                    console.log('Successful');
                    document.getElementById('username1').value='';
                    document.getElementById('password1').value = '';
                    history.push("/");
                }
                else{
                    console.log('Unsuccessful');
                }
            }) 
        .catch(
            (error)=>alert(error)
        )
            })    
        .catch(
            (error)=>alert(error.message)
        )
    }


    
    function SigningUp(){
        if(document.getElementById('password').value == (document.getElementById('confirmpassword').value)){
            const auth = fire.auth();
            auth.createUserWithEmailAndPassword(document.getElementById('email').value, document.getElementById('password').value)
            .catch((error) => alert(error.message))
            .then(user => {
                if(user){
                    console.log('Successful');
                    addUserName(document.getElementById('email').value , document.getElementById('username').value);
                    document.getElementById('email').value = '';
                    document.getElementById('username').value='';
                    document.getElementById('password').value = '';
                    document.getElementById('confirmpassword').value = '';
                }
                else{
                    console.log('Unsuccessful');
                }
            })
        }
        else{
            alert('Confirm Password does not match Password');
        }
    }
    

         /*function SigningIn(){
            let email = userToEmail(document.getElementById('username1').value)
            const auth = fire.auth();
            auth.signInWithEmailAndPassword(email, document.getElementById('password1').value)
            .catch((error) => alert(error.message))
            .then(user => {
                if(user){
                    document.getElementById('username1').value = '';
                    document.getElementById('password1').value = '';
                    console.log('Successful');
                    history.push("/");
                }
                else{
                    console.log('Unsuccessful');
                }
            }) 
        .catch(
            (error)=>alert(error.message)
        )
            
        
    }*/
   
   

    var up = <form className="fields">

    <label className= "fields_label" for = "email">Enter email</label>
    <input className = "fields_input" type = "email" id = "email"></input>
    <label className= "fields_label" for = "username">Choose username</label>
    <input className = "fields_input" type = "text" id = "username"></input>
    <label className= "fields_label" for = "password">Choose password</label>
    <input className = "fields_input" type = "password" id = "password"></input>
    <label className= "fields_label" for = "confirmpassword">Confirm password</label>
    <input className = "fields_input" type = "password" id ="confirmpassword"></input>
    <button className="my-3" id = "Letsgo" type = "button" onClick = {SigningUp}>Let's go!</button>
</form> ;


    var toggler = <form className="fields">

    <label className= "fields_label" for = "username">Choose username</label>
    <input className = "fields_input" type = "text" id = "username1"></input>
    <label className= "fields_label" for = "password">Choose password</label>
    <input className = "fields_input" type = "password" id = "password1"></input>
    <button className="my-3" id = "Letsgo" type = "button" onClick = {userToEmail}>Let's go!</button>
</form> ;





    function Close(){
        document.querySelector('.FORMS').style.display = 'none';
        SignIn(up)
    }
    
    const [SignUp , SignIn] = useState(up);

    function Change_Toggle_SignIn(){
        SignIn(toggler)
    }

    function Change_Toggle_SignUp(){
        SignIn(up)
    }

    return(
    <div className="bg-modal">

        <div className="m-content">

            <img onClick = {Close} id = "Close" src= {X} alt=""/>
            <div className="Form_Inputs">

                <div className="Sign">
                    <button id = "Sign_up" onClick = {Change_Toggle_SignUp}>Sign up</button>
                    <button id = "Sign_in" onClick = {Change_Toggle_SignIn} >Sign in</button>
                </div>
                    {SignUp}
            </div>
            
        </div>

    </div>

    )

}

export default FORM;