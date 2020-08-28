import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

import Logo from './Images/Logo.png'
import Background_Image from './Images/Background_Image.png'
import Create_Interview_Logo from './Images/Create_Interview_Logo.png'
import Take_Interview_Logo from './Images/Take_Interview_Logo.png'


function  Homepage(){

    function Sign_Up(){
        document.querySelector('.FORMS').style.display = 'block';
    }
    
return(

    <div id = "Homepage" class = "Homepage">

        <span className = "Logo"><img src = {Logo} alt = "Image"/><h3 id = "Title_Head" >aD_hoc</h3></span>

        <div class = "Homepage_Text_Image">

            <div className = "Homepage_Text">
                <div id = "Bolded_Homepage_Text">Ad-hoc coding interviews.<br/>Now free for everyone.
                </div>
                <div id = "Description_Homepage_Text">
                We’ve created the world’s first platform to create
                 <strong> free</strong>, <strong>secure</strong>, <strong>automated</strong> and <strong>timed</strong> coding interviews to recruit the best talent with just a few clicks.
                </div>

                <div className = "Buttons_Homepage">
                    <button id = "Create" onClick = {Sign_Up} >
                        <span class = "Create">
                        <img id = "Create_Logo" src = {Create_Interview_Logo}></img><p>Create Interview</p></span></button>


                    <button id = "Take">
                        <span className = "Take"><img id = "Take_Logo" src = {Take_Interview_Logo}></img><p>Take Interview</p></span>
                        </button>
                </div>

            </div>

            <img id = "Main_Image" src = {Background_Image} alt = "Programming Image"/>

        </div>
    </div>
)
}

export default Homepage;