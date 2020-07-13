import React from 'react';

function FullPage2() {
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
                                <a class="h-linkedin" href="#"><i class="fa fa-linkedin"></i></a>
                                <a class="h-facebook" href="#"><i class="fa fa-facebook"></i></a>
                                <a class="h-twitter" href="#"><i class="fa fa-twitter"></i></a>
                                <a class="h-google" href="#"><i class="fa fa-google-plus"></i></a>
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
                                <img class="img-responsive" src="img/logo/logo.png" alt="" />
                            </a>
                        </div>

                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul class="nav navbar-nav navbar-right">
                                <li><a href="#latestalbum">General İnformation</a></li>
                                <li><a href="#featuredalbum">Experience</a></li>
                                <li><a href="#joinus">Skills</a></li>
                                <li><a href="#portfolio">Education</a></li>
                                <li><a href="#events">Languages</a></li>
                                <li><a href="#team">interests</a></li>
                                <li><a href="#contact">Ask Me</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <span class="totop"><a href="#"><i class="fa fa-chevron-up"></i></a></span> 
            
        </div>
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

export default FullPage2;