import React from 'react';

function Content() {
  return (
    <div>  
        <div id="general" class="hero pad">
            <div class="container">
                <h3>General İnformation</h3>
                <p1>Interested software and web based technologies(Iot, Web Development etc.). 
                    Interested the principle of lifelong learning. I can learn and use quickly 
                    new languages, tools etc. Knowledge about databases. Can work on Linux 
                    dist(previously used: kubuntu/ubuntu). Can work in a team as a member or 
                    leader using Git.
                </p1>
            </div>
        </div>
        
        <div id="experience" class="promo parallax-one pad">
            <div class="container">
                <div class="promo-element ">
                    <h3>Experience</h3>        
                </div>
            </div>
        </div>
        <div class="featured pad" id="skills">
            <div class="container">
                
                <div class="default-heading">                    
                    <h2>Skills</h2>                    
                </div>
                    
                    <ul >
                        <li><img src="img/skills/c.jpg"  ></img></li>
                        <li><img src="img/skills/c++.png"></img></li>
                        <li><img src="img/skills/lora.png"></img></li>
                        <li><img src="img/skills/lora.png"></img></li>
                    </ul>
                
            </div>
        </div>
        <div id="education"class="cta parallax-one pad">
            <div class="container">
                <div class="cta-element ">
                    <div class="row">
                        <h1>Education</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="work-with-us pad" id="languages">
            <div class="container">
                <div class="default-heading">
                    <h2>Languages</h2>
                </div>
                
                
            </div>
        </div>
        <div id="interests"class="news-letter">
            <div class="container">
                <div class="news-content ">
                    <h3>Interests</h3>
                    
                </div>
            </div>
        </div>
        
        <div class="portfolio pad" id="ask">
            <div>
                <div class="default-heading">
                    <h2>Ask Me</h2>
                </div>
            </div>
            
        </div>
        <div class="events parallax-three pad" id="events">
            <div class="container">
                <div class="default-heading-shadow">
                    <h2>Coming Events</h2>
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
        <footer>
            <div class="container">
                <div class="social">
                    <a class="h-facebook" href="#"><i class="fa fa-facebook"></i></a>
                    <a class="h-google" href="#"><i class="fa fa-google-plus"></i></a>
                    <a class="h-linkedin" href="#"><i class="fa fa-linkedin"></i></a>
                    <a class="h-twitter" href="#"><i class="fa fa-twitter"></i></a>
                </div>
                <p class="copy-right">&copy; copyright 2018, All rights are reserved.</p>
            </div>
        </footer>
        <script src="../public/js/jquery.js"></script>
        
        <script src="../public/js/bootstrap.min.js"></script>

        <script src="../public/js/waypoints.min.js"></script>

        <script src="../public/js/owl.carousel.min.js"></script>
        
        <script src="../public/js/jquery.nav.js"></script>

        <script src="../public/js/respond.min.js"></script>
        
        <script src="../public/js/html5shiv.js"></script>
        
        <script src="../public/js/custom.js"></script>
    </div> 
    )
}

export default Content;