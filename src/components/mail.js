import React from 'react';
import axios from 'axios';
class Mail extends React.Component {
    constructor(){
        super()
        this.state={
            name:null,
            email:null,
            message:null,
            pass:"123456",
            isSent:false
        };
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })                   
    }
    submitHandler=(e)=>{
        e.preventDefault();
        const url='https://mymailserver.herokuapp.com/sendEmail';
        const data={
            name:this.state.name,
            email:this.state.email,
            message:this.state.message,
            pass:this.state.pass
        }
        console.log(this.state)
        //post        
        axios.post(url,data)
            .then((response)=>{
                console.log(response)
            }).catch(err=>{
                console.log(err)
            })
    }  
    render(){        
        return (
            <div class="mailpad" id="contact">     
                <form class="mailform" onSubmit={this.submitHandler}>  
                    <div class="segment">
                        <h1>Send Email</h1>
                    </div>                    
                    <label>
                        <input type="text" name="name" placeholder="Name" onChange={this.handleChange}></input>
                    </label>
                    <label>
                        <input type="text" name="email" placeholder="Email Address" onChange={this.handleChange}></input>
                    </label>
                    <label>                        
                        <textarea rows = "10" cols = "60" name="message" placeholder="Message" onChange={this.handleChange}></textarea>
                    </label>
                    <button type="submit" class="red" >Send</button>                                                          
                </form>
            </div> 
            )
    }  
}

export default Mail;