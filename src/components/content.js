import React from 'react';

function Content() {
  return (
    <div>  
        <div id="general" class="hero pad">
            <div class="container">
                <h3>General İnformation</h3>
                <p1 class="aboutme">Interested software and web based technologies(Iot, Web Development etc.). 
                    Interested the principle of lifelong learning. I can learn and use quickly 
                    new languages, tools etc. Knowledge about databases. Can work on Linux 
                    dist(previously used: kubuntu/ubuntu). Can work in a team as a member or 
                    leader using Git.aa
                </p1>
            </div>
        </div>
        
        <div id="experience" class="promo parallax-one pad">
            <div class="container">
                <div class="promo-element ">
                    <h3>Experience</h3>        
                </div>
                <dl class="expinfo">
                    <dt>Proline Integrated Intelligence</dt>
                    <dt>2018 Summer Intern</dt>
                    <dd>Worked about web technologies in the R&D Department</dd>
                </dl>
                <dl class="expinfo">
                    <dt>Mavi Alp</dt>
                    <dt>2019 Summer Intern</dt>
                    <dd>IoT project with using LoRa</dd>
                </dl>
            </div>
        </div>
        <div class="featured pad" id="skills">
            <div class="container">
                
                <div class="default-heading">                    
                    <h2>Skills</h2>                    
                </div>
                    <h4>Programming Languages</h4>
                    <ul >
                        <li class="skill"><img src="img/skills/c.png"  ></img></li>
                        <li class="skill"><img src="img/skills/c++.png"></img></li>
                        <li class="skill"><img src="img/skills/python.png"></img></li>
                        <li class="skill"><img src="img/skills/js.png"></img></li>
                    </ul>
                    <h4> Runtime Environment/Frameworks/API </h4>
                    <ul >
                        <li class="skill"><img src="img/skills/nodejs.png"  ></img></li>
                        <li class="skill"><img src="img/skills/expressjs.png"></img></li>
                        <li class="skill"><img src="img/skills/react.png"></img></li>
                        <li class="skill"><img src="img/skills/openmp.png"></img></li>
                    </ul>
                    <h4>Databases</h4>
                    <ul >
                        <li class="skill"><img src="img/skills/mysql.png"  ></img></li>
                        <li class="skill"><img src="img/skills/mongo.png"></img></li>
                    </ul>
                    <h4>Other</h4>
                    <ul >
                        <li class="skill"><img src="img/skills/lora.png"></img></li>
                    </ul>
                
            </div>
        </div>
        <div id="skilldetail"class="cta parallax-one pad">
            <div class="container">
                <div class="cta-element ">
                    <div class="row">
                        <h1>SkillDetails</h1>                        
                    </div>
                </div>
                <ul class="skilldetail">
                    <li class="skilldetail"> C/C++ : Algorithm implementation and aplications. Some OOP based aplications. </li>
                    <li class="skilldetail"> Python: Server/Client aplications over UDP/TCP </li>
                    <li class="skilldetail"> Javascript (NodeJs) : Restful web services, API’s. Database management systems</li>
                    <li class="skilldetail">Basic knowledge C#, golang and java</li>
                    <li class="skilldetail"> MySQL : Relational database programing and strong sql knowledge </li>
                    <li class="skilldetail">Creating aplications with using gateway .Lora end node programing </li>
                </ul>
            </div>
        </div>
        <div class="work-with-us pad" id="education">
            <div class="container">
                <div class="default-heading">
                    <h2>education</h2>
                </div>
                
                
            </div>
        </div>
        <div id="languages"class="news-letter">
            <div class="container">
                <div class="news-content ">
                    <h3>languages</h3>
                    
                </div>
            </div>
        </div>
        
        <div class="portfolio pad" id="interests">
            <div>
                <div class="default-heading">
                    <h2>interests</h2>
                </div>
            </div>
            
        </div>
        <div class="events parallax-three pad" id="ask">
            <div class="container">
                <div class="default-heading-shadow">
                    <h2>Ask</h2>
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
                    <a class="fa fa-linkedin"href="https://linkedin.com/in/yunus-emre-karaköse-347a1b169/" ></a>                                
                    <a class="fa fa-github" href="https://github.com/YunusEmreKarakose" ></a>
                    <a class="fa fa-google"href="#" ></a>
                    <a class="fa fa-instagram" href="https://instagram.com/emre3.krks/" ></a>
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