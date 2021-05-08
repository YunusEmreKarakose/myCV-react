import React from 'react';
import Skillitem from './skillitem';
function Skills() {
  return (
    <div>
        <div class="pad" id="skills">
            <div class="container">
                
                <div class="default-heading">                    
                    <h2>Skills</h2>                    
                </div>
                <div class="skilllist">
                    <h4 class="descript">Programming Languages</h4>
                    <ul>
                        <Skillitem
                            condition="item" 
                            src="img/skills/c.png"
                        />
                        <Skillitem
                            condition="item"  
                            src="img/skills/c++.png"
                        />
                        <Skillitem
                            condition="item"  
                            src="img/skills/js.png"
                        />
                        <Skillitem
                            condition="item"  
                            href="https://github.com/YunusEmreKarakose/PythonServer"
                            src="img/skills/python.png"
                        />
                    </ul>
                </div>
                
                <div class="skilllist">                    
                    <h4 class="descript"> Runtime Environment/Frameworks/API </h4>
                    <ul >
                        <Skillitem
                            condition="item"  
                            href="https://github.com/YunusEmreKarakose/KtuMebsis"
                            src="img/skills/nodejs.png"
                        />
                        <Skillitem
                            condition="item"  
                            href="https://github.com/YunusEmreKarakose/KtuMebsis"
                            src="img/skills/expressjs.png"
                        />
                        <Skillitem 
                            condition="item" 
                            href="https://github.com/YunusEmreKarakose/myCV-react"
                            src="img/skills/react.png"
                        />
                        <Skillitem 
                            condition="item" 
                            href="https://github.com/YunusEmreKarakose/ParalelComputing"
                            src="img/skills/openmp.png"
                        />
                    </ul>
                </div>               
                <div class="skilllist">
                    <h4 class="descript">Databases</h4> 
                    <ul >
                        <Skillitem 
                            condition="item" 
                            href="https://node-mysql-example.herokuapp.com"
                            src="img/skills/mysql.png"
                        />
                        <Skillitem 
                            condition="item" 
                            href="https://github.com/YunusEmreKarakose/NodeJS-2018-Databases/tree/master/EAE-BANK-YEKV3-MongoDB"
                            src="img/skills/mongo.png"
                        />
                    </ul>
                </div>            
                <div class="skilllist">
                    <h4 class="descript">Other</h4>    
                    <ul >
                        <Skillitem 
                            condition="item" 
                            href="https://github.com/YunusEmreKarakose/mdot-code-example"
                            src="img/skills/lora.png"
                        />
                        <Skillitem 
                            condition="item" 
                            src="img/skills/css.png"
                        />
                        <Skillitem 
                            condition="item" 
                            src="img/skills/html.png"
                        />
                        <Skillitem 
                            condition="item" 
                            src="img/skills/latex.png"
                        />
                    </ul>
                </div>
            </div>
        </div>
        <div id="skilldetail"class="promo parallax-two pad">
            <div class="container">                
                <div class="default-heading-shadow">                    
                    <h2>Skilldetail</h2>                    
                </div>
                
                <div class="denemewrap">
                    <div class="deneme">                
                        <ul class="skilldetail">
                            <Skillitem
                                condition="detail"
                                content="C/C++ : Algorithm implementation and applications. Some OOP based applications.
                                Parallel programing. "
                            />
                            <Skillitem
                                condition="detail"
                                content="Python: Some coding related to lessons. Django Beginner"
                            />
                            <Skillitem
                                condition="detail"
                                content="Javascript (NodeJs) : Restful web services, API’s. Database management systems"
                            />
                            <Skillitem
                                condition="detail"
                                content="Basic knowledge C#, golang and java"
                            />
                            <Skillitem
                                condition="detail"
                                content="MySQL : Relational database programing and strong sql knowledge"
                            />
                            <Skillitem
                                condition="detail"
                                content="
                                Creating applications with using gateway . Lora end node programing.
                                Gateway-end node, gateway-server, end node-end node comminications."
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Skills;