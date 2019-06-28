import React from 'react';


export default function MyButton(props) {

    
    return (<div> (
    <button onClick={props.onSimpleclick}
    style={{backgroundColor:(props.visited)?"red":"blue"}}>
        {props.children}
    </button>]
    </div>
    );
}



 