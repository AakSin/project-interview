import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './FORM.css'
import X from './Images/X.png'

function  FORM(){
    

    var up = <form className="fields">

    <label id = "fields_label" for = "email">Enter email</label>
    <input id = "fields_input" type = "email" id = "email"></input>
    <br/>
    <br/>
    <label id = "fields_label" for = "username">Choose username</label>
    <input id = "fields_input" type = "text" id = "username"></input>
    <br/>
    <br/>
    <label id = "fields_label" for = "password">Choose password</label>
    <input id = "fields_input" type = "password" id = "password"></input>
    <br/>
    <br/>
    <label id = "fields_label" for = "confirmpassword">Confirm password</label>
    <input id = "fields_input" type = "password" id ="confirmpassword"></input>
    <br/>
    <br/>
    <button id = "Letsgo" type = "submit">Let's go!</button>
</form> ;


    var toggler = <form className="fields">

    <br/>
    <br/>
    <label id = "fields_label" for = "username">Choose username</label>
    <input id = "fields_input" type = "text" id = "username"></input>
    <br/>
    <br/>
    <label id = "fields_label" for = "password">Choose password</label>
    <input id = "fields_input" type = "password" id = "password"></input>
    <br/>
    <br/>
    <br/>
    <br/>
    <button id = "Letsgo" type = "submit">Let's go!</button>
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

            <button onClick = {Close}><img id = "Close" src= {X} alt=""/></button>
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