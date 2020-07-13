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
                                    <p1> inputI accept the Terms of Service</p1>
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

export default FullPage;