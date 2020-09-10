import React from 'react'

function Skillitem(props){
    
    if(props.condition==="item"){
        return(
            <li>
                <a class="linkskill" href={props.href}>
                    <img class="skillimg" title="Click to view example"   src={props.src}></img>
                </a>
            </li>
        )
    }else if(props.condition==="detail"){
        return(
            <li class="skilldetail"> 
               {props.content}
            </li>
        )
    }else{
        return(
            <div>No Content</div>
        )
    }
}
export default Skillitem