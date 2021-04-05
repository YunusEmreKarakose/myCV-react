import React from 'react';


class MailChild extends React.Component{
    render(){
        if(!this.props.error){
            return (
                <div className="thankyou">
                    <div class="segment">
                        <h5>Form submitted. Thank You</h5>
                    </div> 
                    <img src="img/logo/thankyou.jpeg" alt="" />
                </div>
          )
        }else{
            return(
                <div className="mailerror">
                    <div class="segment">                        
                        <h5>Something wrong in backend.</h5>
                        <h5> Form is not submitted</h5>
                    </div> 
                    <img src="img/logo/errorimg.jpg" alt="" />
                </div>
            )
        } 
    }
}

export default MailChild;