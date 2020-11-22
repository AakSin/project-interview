import React from 'react'

export default function QuestionBox(props) {
    const box={
        borderRadius:'20px',
        backgroundColor:'white',
        minHeight:'5vh',
    }

    return (
        <div className="m-5 p-3 d-flex justify-content-around align-items-center" style={box}>
            <span style={{color:'gray'}}>Q{props.qno}</span>
    <span>{props.qname}</span>
    <span>{props.testsPassed}</span>
            <a className="btn btn-primary" href={props.qlink}>Solve Question</a>
        </div>
    )
}
