import React from 'react';
import OtherItem from './otherItem'
function Other() {
  return (
    <div>     
        <div class="pad" id="interests">
            <div>
                <div class="default-heading">
                    <h2>hobbies</h2>
                </div>
                <div class="interestItem">
                    <ul>
                        <OtherItem
                            condition="interestItem"
                            src='./img/interests/basketball.png'
                            content="I played in Tofaş SK while high school"
                        />
                        <OtherItem
                            condition="interestItem"
                            src='./img/interests/voleyball.png'
                            content="I played in Çankaya Anka SK while high school and university team"
                        />
                        <OtherItem
                            condition="interestItem"
                            src='./img/interests/ski.png'
                            content="Just a hobby"
                        />
                        <OtherItem
                            condition="interestItem"
                            src='./img/interests/computer.png'
                            content="Addicted"
                        />
                    </ul>
                </div>
            </div>
        </div>
        <div class="parallax-four lastpad" id="ask">
            <div class="container">
                <div class="default-heading-shadow">
                    <h2>Ask About Me</h2>
                </div>
                <OtherItem
                    condition="refItem"
                    name="Talha ORAK"
                    content="Fellow R&D Engineer at Proline Bilişim"
                    href="https://www.linkedin.com/in/talhaorak/"
                />
                <OtherItem
                    condition="refItem"
                    name="Sedat GÖRMÜŞ"
                    content="Assistant Professor at K.T.U"
                    href="https://www.linkedin.com/in/sedat-gormus-1397737/"
                />
            </div>
        </div>
    </div> 
    )
}

export default Other;