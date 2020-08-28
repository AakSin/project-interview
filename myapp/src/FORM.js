import React from 'react'
import ReactDOM from 'react-dom'
import './FORM.css'
import X from './Images/X.png'

function  FORM(){
    return(
    <div className="bg-modal">

        <div className="modal-content">

            <a href="Homepage.js"><img id = "Close" src= {X} alt=""/></a>
            <div className="Form_Inputs">

                <div className="Sign">
                    <button id = "Sign_up">Sign up</button>
                    <button id = "Sign_in">Sign in</button>
                </div>

            <form className="fields">

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
            </form>
            </div>
            
        </div>

    </div>

    )

}

export default FORM;