import React from 'react';

function FullPage3() {
  return (
    <div>  
        <div class="wrapper" id="home">            
            
            <div class="banner">
                <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                    
                    <div class="carousel-inner" role="listbox">
                        <div class="item active">
                            <img src="../public/img/banner/b1.jpg" alt="..."></img>
                            <div class="container">
                                <div class="carousel-caption slide-one">
                                    
                                    <h2 class="animated fadeInLeftBig"><i class="fa fa-music"></i> Melodi For You!</h2>
                                    
                                    <h3 class="animated fadeInRightBig">Find More Innovative &amp; Creative Music Albums.</h3>
                                    
                                    <a href="#" class="animated fadeIn btn btn-theme">Download Here</a>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <img src="../public/img/banner/b2.jpg" alt="..."></img>
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

export default FullPage3;