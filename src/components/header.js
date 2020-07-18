import React from 'react';

function Header() {
  return (
    <div>  
        <div class="wrapper" id="home">            
            <header>
                <nav class="secondary-menu">
                    <div class="container">
                        <div class="sm-left">
                            <strong>Phone</strong>:&nbsp; <a href="#">+90 534 926 8853</a>&nbsp;&nbsp;&nbsp;&nbsp;
                            <strong>E-mail</strong>:&nbsp; <a href="#">karakose.y.emre@gmail.com</a>
                        </div>
                        <div class="sm-right">
                            <div class="sm-social-link">
                                <a class="fa fa-linkedin"href="https://linkedin.com/in/yunus-emre-karaköse-347a1b169/" ></a>                                
                                <a class="fa fa-github" href="https://github.com/YunusEmreKarakose" ></a>
                                <a class="fa fa-google"href="#" ></a>
                                <a class="fa fa-instagram" href="https://instagram.com/emre3.krks/" ></a>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </nav>
                <nav class="navbar navbar-fixed-top navbar-default">
                    <div class="container">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="#home">
                                <img class="img-responsive" src="img/logo/logo3.jpg" alt="" />
                            </a>
                        </div>

                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul class="nav navbar-nav navbar-right">
                                <li><a href="#general">General İnformation</a></li>
                                <li><a href="#experience">Experience</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#education">Education</a></li>
                                <li><a href="#languages">Languages</a></li>
                                <li><a href="#interests">Interests</a></li>
                                <li><a href="#ask">Ask About Me</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <span class="totop"><a href="#"><i class="fa fa-chevron-up"></i></a></span> 
            
        </div>
    </div> 
    )
}

export default Header;