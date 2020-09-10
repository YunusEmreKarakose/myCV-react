import React from 'react';

function OtherItem(props) {
    if(props.condition==="interestItem"){
        return (
          <li>
              <div class="content_img">
              <img src={props.src}></img>
                  <div>{props.content}</div>
              </div>
          </li>
        )
    }else if(props.condition==="refItem"){
        return (
            <div>
                <div class="askItem">
                    <dl>
                        <dt>{props.name}</dt>
                        <dd>{props.content}</dd> 
                                
                    </dl>                    
                </div>
                <div class="askLink">
                    <a class="fa fa-linkedin"href={props.href} ></a> 
                </div>
            </div>
        )
    }else{
        return(
            <div>No Content</div>
        )
    }
}

export default OtherItem