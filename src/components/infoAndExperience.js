import React from 'react';

function Info() {
  return (
    <div>  
        <div id="general" class="firstpad">
            <div class="container">
                <div class="default-heading">                    
                    <h2>General Information</h2>                    
                </div>
                <p1 class="aboutme">Interested software and web based technologies(Iot, Web Development etc.). 
                    Interested the principle of lifelong learning. I can learn and use quickly 
                    new languages, tools etc.  Can work on Linux 
                    dist(previously used: kubuntu/ubuntu). Can work in a team as a member or 
                    leader using Git.
                </p1>
            </div>
        </div>
        
        <div id="experience" class="promo parallax-one pad">
            <div class="container">
                <div class="default-heading-shadow">                    
                    <h2>Experience</h2>                    
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
    </div>   
    )
}

export default Info;