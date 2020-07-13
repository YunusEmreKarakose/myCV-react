import React from 'react';

function FullPage() {
  return (
    <div>  
        <div class="modal fade" id="bookTicket" tabindex="-1" role="dialog" aria-labelledby="BookTicket">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel">Name of The Event &nbsp; <small><span class="label label-success">Available</span> &nbsp; <span class="label label-danger">Not Available</span></small></h4>
                    </div>
                    <form>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="example@mail.com"></input>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputContact">Contact</label>
                                <input type="text" class="form-control" id="exampleInputContact" placeholder="+91 55 5555 5555"></input>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputSeats">Number of Tickets</label>
                                <select class="form-control" id="exampleInputSeats">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox"> I accept the Terms of Service</input>
                                </label>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            
                            <button type="button" class="btn btn-primary">Book Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
        <div class="wrapper" id="home">
        
            <header>
                <nav class="secondary-menu">
                    <div class="container">
                        <div class="sm-left">
                            <strong>Phone</strong>:&nbsp; <a href="#">555 555 555</a>&nbsp;&nbsp;&nbsp;&nbsp;
                            <strong>E-mail</strong>:&nbsp; <a href="#">music.site@melodi.com</a>
                        </div>
                        <div class="sm-right">
                            <div class="sm-social-link">
                                <a class="h-facebook" href="#"><i class="fa fa-facebook"></i></a>
                                <a class="h-twitter" href="#"><i class="fa fa-twitter"></i></a>
                                <a class="h-google" href="#"><i class="fa fa-google-plus"></i></a>
                                <a class="h-linkedin" href="#"><i class="fa fa-linkedin"></i></a>
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
                                <li><a href="#latestalbum">Latest Album</a></li>
                                <li><a href="#featuredalbum">Featured Album</a></li>
                                <li><a href="#joinus">Join Us</a></li>
                                <li><a href="#portfolio">Portfolio</a></li>
                                <li><a href="#events">Events</a></li>
                                <li><a href="#team">Team</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div class="banner">
                <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                    
                    <div class="carousel-inner" role="listbox">
                        <div class="item active">
                            <img src="img/banner/b1.jpg" alt="..."></img>
                            <div class="container">
                                <div class="carousel-caption slide-one">
                                    
                                    <h2 class="animated fadeInLeftBig"><i class="fa fa-music"></i> Melodi For You!</h2>
                                    
                                    <h3 class="animated fadeInRightBig">Find More Innovative &amp; Creative Music Albums.</h3>
                                    
                                    <a href="#" class="animated fadeIn btn btn-theme">Download Here</a>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <img src="img/banner/b2.jpg" alt="..."></img>
                            <div class="container">
                                
                                <div class="carousel-caption slide-two">
                                
                                    <h2 class="animated fadeInLeftBig"><i class="fa fa-headphones"></i> Listen It...</h2>
                                    
                                    <h3 class="animated fadeInRightBig">Lorem ipsum dolor sit amet, consectetur elit.</h3>
                                    
                                    <a href="#" class="animated fadeIn btn btn-theme">Listen Now</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                        <span class="fa fa-arrow-left" aria-hidden="true"></span>
                    </a>
                    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                        <span class="fa fa-arrow-right" aria-hidden="true"></span>
                    </a>
                </div>
            </div>
            
            <div id="latestalbum" class="hero pad">
                <div class="container">
                    <h3>Lastest Album</h3>
                    </div>
                </div>
            </div>
            <div class="promo parallax-one pad">
                <div class="container">
                    <div class="promo-element ">
                        <h3>Music An Art...</h3>
                        <p>Music is an art form and cultural activity whose medium is sound organized in time. The common elements of music are <strong>pitch</strong>, <strong>rhythm</strong>, <strong>dynamics</strong> and the sonic qualities of <strong>timbre</strong> and <strong>texture</strong>.</p>
                    
                        <a class="promo-link" href="#"><i class="fa fa-play-circle"></i></a>
                    </div>
                </div>
            </div>
            <div class="featured pad" id="featuredalbum">
                <div class="container">
                    
                    <div class="default-heading">
                        
                        <h2>Featured Album</h2>
                    </div>
                    
                </div>
            </div>
            <div class="cta parallax-one pad">
                <div class="container">
                    <div class="cta-element ">
                        <div class="row">
                            <div class="col-md-9 col-sm-8">
                                <h3>Melodi, A Fully Rock Album Pro</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim sectetur adipiscing elit, sed do eiusmod tempoad minim veniam consequat.</p>
                            </div>
                            <div class="col-md-3 col-sm-4">
                                <div class="cta-btn text-center">
                                    <a href="#" class="btn btn-default btn-lg">Download Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="work-with-us pad" id="joinus">
                <div class="container">
                    <div class="default-heading">
                        <h2>Work With Us</h2>
                    </div>
                    
                    
                </div>
            </div>
            <div class="news-letter">
                <div class="container">
                    <div class="news-content ">
                        <h3>Sign Up For Newsletter</h3>
                        <p><strong>Contact Us</strong> and let us know if you have any questions, Don't forget to subscribe for more awesome stuff by typing mail bellow.</p>
                        
                        <form>
                            <div class="input-group">
                                <input type="text" class="form-control input-lg" placeholder="Email"></input>
                                <span class="input-group-btn">
                                    <button class="btn btn-default btn-lg" type="button">Subscribe</button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
            <div class="portfolio pad" id="portfolio">
                <div>
                    <div class="default-heading">
                        <h2>Portfolio</h2>
                    </div>
                </div>
                
                <div class="text-center">
                    <a href="#" class="btn btn-lg btn-theme">View more</a>
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
            <span class="totop"><a href="#"><i class="fa fa-chevron-up"></i></a></span> 
            
        </div>
        
        <script src="js/jquery.js"></script>
        
        <script src="js/bootstrap.min.js"></script>
    
        <script src="js/waypoints.min.js"></script>
    
        <script src="js/owl.carousel.min.js"></script>
        
        <script src="js/jquery.nav.js"></script>
    
        <script src="js/respond.min.js"></script>
        
        <script src="js/html5shiv.js"></script>
        
        <script src="js/custom.js"></script>
    </div>  
  )
}

export default FullPage;