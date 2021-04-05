import React from 'react';
import EDropdown from './educationDropdown'
function Education() {
  return (
    <div>        
        <div class=" pad" id="education">
            <div class="container">
                <div class="default-heading">
                    <h2>Education</h2>                    
                </div>
                <div class="educationItem">
                    <img src="./img/logo/ktulogo.png"></img>
                    <h1>Karadeniz Technical University</h1>
                    <p1>Computer Engineering</p1>
                    <h6>Corona GPA: 2.86</h6>
                    <h6>Real GPA: 2.00000000001</h6>
                </div>
            <EDropdown />
                
            </div>
        </div>
        <div id="languages" class="promo parallax-three pad">
            <div class="container">
                <div class="default-heading-shadow">                    
                    <h2>Language</h2>                    
                </div>
                <dl class="languageItem">
                    <dt>Turkish</dt>
                    <dd>Native</dd>
                </dl>
                <dl class="languageItem">
                    <dt>English</dt>
                    <dd>Writing/Reading:Good , Listening:Good , Speaking:Mid Level</dd>
                </dl>
                <dl class="languageItem">
                    <dt>German</dt>
                    <dd>A1</dd>
                </dl>
            </div>
        </div>
    </div>
  )
  }
  export default Education;