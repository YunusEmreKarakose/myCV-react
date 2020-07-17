import React from 'react';

function Skills() {
  return (
    <div>
        <div class="pad" id="skills">
            <div class="container">
                
                <div class="default-heading">                    
                    <h2>Skills</h2>                    
                </div>
                    <h4>Programming Languages</h4>
                    <ul >
                        <li class="skill"><img class="skillimg"  src="img/skills/c.png"  ></img></li>
                        <li class="skill"><img class="skillimg"  src="img/skills/c++.png"></img></li>
                        <li class="skill">
                            <a href="https://github.com/YunusEmreKarakose/PythonServer">
                                <img class="skillimg"  src="img/skills/python.png"></img>
                            </a>
                        </li>
                        <li class="skill"><img class="skillimg"  src="img/skills/js.png"></img></li>
                    </ul>
                    <h4> Runtime Environment/Frameworks/API </h4>
                    <ul >
                        <li class="skill">
                            <a href="https://github.com/YunusEmreKarakose/KtuMebsis">
                            <img class="skillimg"src="img/skills/nodejs.png"  ></img>
                            </a>
                        </li>
                        <li class="skill">
                            <a href="https://github.com/YunusEmreKarakose/KtuMebsis">
                                <img class="skillimg" src="img/skills/expressjs.png"></img>
                            </a>
                        </li>
                        <li class="skill">
                            <a href="#">
                                <img class="skillimg" src="img/skills/react.png"></img>
                            </a>
                        </li>
                        <li class="skill">
                            <a href="https://github.com/YunusEmreKarakose/ParalelComputing">
                                <img  class="skillimg"src="img/skills/openmp.png" ></img>
                            </a>
                        </li>
                    </ul>
                    <h4>Databases</h4>
                    <ul >
                        <li class="skill"><img  class="skillimg" src="img/skills/mysql.png"  ></img></li>
                        <li class="skill"><img  class="skillimg" src="img/skills/mongo.png"></img></li>
                    </ul>
                    <h4>Other</h4>
                    <ul >
                        <li class="skill"><img class="skillimg"  src="img/skills/lora.png"></img></li>
                    </ul>
                
            </div>
        </div>
        <div id="skilldetail"class="promo parallax-two pad">
            <div class="container">                
                <div class="default-heading-shadow">                    
                    <h2>skilldetail</h2>                    
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
    </div>
  )
}
export default Skills;