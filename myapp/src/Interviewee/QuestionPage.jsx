import React from 'react';
import {useParams} from "react-router-dom"; 

export default function QuestionPage() {
    let {num}=useParams()
    return (
        <div>
            Question {num}
        </div>
    )
}
