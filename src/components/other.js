import React from 'react';

function Other() {
  return (
    <div>
        
        
        <div class="pad" id="interests">
            <div>
                <div class="default-heading">
                    <h2>interests</h2>
                </div>
                <div class="interestItem">
                    <ul>
                        <li>
                            <div class="content_img">
                            <img src='./img/interests/basketball.png'></img>
                            <div>I played in Tofaş SK while high school </div>
                            </div>
                        </li>
                        <li>
                            <div class="content_img">
                            <img src='./img/interests/voleyball.png' ></img>
                            <div>I played in Çankaya Anka SK while high school and university team</div>
                            </div>
                        </li>
                        <li>
                            <div class="content_img">
                            <img src='./img/interests/ski.png'></img>
                            <div>Just a hobby</div> 
                            </div>
                        </li>
                        <li>
                            <div class="content_img">
                            <img src='./img/interests/computer.png'></img>
                            <div>Addicted</div> 
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="parallax-four pad" id="ask">
            <div class="container">
                <div class="default-heading-shadow">
                    <h2>Ask About Me</h2>
                </div>
                <div class="askItem">
                    <dl>
                        <dt>Talha Orak</dt>
                        <dd>Fellow R&D Engineer at Proline Bilişim</dd> 
                                   
                    </dl>                    
                </div>
                <div class="askLink">
                    <a class="fa fa-linkedin"href="https://www.linkedin.com/in/talhaorak/" ></a> 
                </div>
                <div class="askItem">
                    <dl>
                        <dt>Sedat Görmüş</dt>
                        <dd>Assistant Professor at K.T.U</dd>                                    
                    </dl>                    
                </div>
                <div class="askLink">
                    <a class="fa fa-linkedin"href="https://www.linkedin.com/in/sedat-gormus-1397737/" ></a> 
                </div>
            </div>
        </div>
        <div class="about" id="team">
            <div class="container">
                <div class="default-heading">
                    <h2>Who We Are?</h2>
                </div>
                
            </div>
        </div>
        <div class="meet parallax-four pad" id="meet">
            <div class="container">
                <div class="default-heading-shadow">
                    <h2>Upcoming Meets</h2>
                </div>
                
            </div>
        </div>
        <div class="contact pad" id="contact">
            <div class="container">
                <div class="default-heading">
                    <h2>Contact Us</h2>
                </div>
                <div class="row">	
                    <div class="col-md-4 col-sm-4">
                        <div class="contact-item ">
                            <i class="fa fa-street-view"></i>
                            <span class="contact-details">#30/67, 5th Street, Mega Market Circle, New Delhi - 625001</span>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4">
                        <div class="contact-item ">
                            <i class="fa fa-wifi"></i>
                            <span class="contact-details">music.site@melodi.com</span>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4">
                        <div class="contact-item ">
                            <i class="fa fa-phone"></i>
                            <span class="contact-details">555 555 5555</span>
                        </div>
                    </div>
                </div>		

            </div>
        </div>
    </div> 
    )
}

export default Other;