import React from 'react';

class EDropdown extends React.Component {
    constructor() {
        super();
        
        this.state = {
          showTable: false,
        };
        
        this.showTable = this.showTable.bind(this);
        this.closeTable = this.closeTable.bind(this);
      }
      
      showTable(event) {
        event.preventDefault();
        
        this.setState({ showTable: true }, () => {
          document.addEventListener('click', this.closeTable);
        });
      }
      
      closeTable(event) {
        if (!this.dropdownTable.contains(event.target)) {
            this.setState({ showTable: false }, () => {
            document.removeEventListener('click', this.closeTable);
            });
        }
      }
    
      render() {
        return (
          <div className="dropdowntable">
            <button onClick={this.showTable}>
              <span>Details</span> 
            </button>
            
            {
              this.state.showTable
                ? (
                  <div 
                      ref={(element) => {
                            this.dropdownTable = element;
                        }}
                  >
                  <table className="tableitself">
                  <tr className="blackrow">
                      <th>ClassName</th>
                      <th>Info</th>
                  </tr>
                  <tr><th>First Grade</th><th></th></tr>
                  <tr className="grayrow">
                      <td>Computer Basics</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548849">BIL1007</a></td>
                  </tr>
                  <tr>                      
                      <td>Electric Circuits</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548889">BIL1005</a></td>
                  </tr>
                  <tr className="grayrow">                      
                      <td>English - I</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=545049">YDI1001</a></td>
                  </tr>
                  <tr>
                      <td>Introduction To Computer Engineering</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548915">BIL1003</a></td>
                  </tr>
                  <tr  className="grayrow">                      
                      <td>Turkish Language - I</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=553117">TBD1001</a></td>
                  </tr>
                  <tr>                      
                      <td>	Basic Physics</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=543939">FIZ1009</a></td>
                  </tr>
                  <tr className="grayrow">                      
                      <td>Mathematics - I</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=547733">MAT1011</a></td>
                  </tr>
                  <tr>                      
                      <td>Information Ethics</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548851">BIL1002</a></td>
                  </tr>
                  <tr className="grayrow">                      
                      <td>Electronic Circuits</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548894">BIL1000</a></td>
                  </tr>
                  <tr>                      
                      <td>	English - II</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=545051">YDI1002</a></td>
                  </tr>
                  <tr className="grayrow">                      
                      <td>Turkish Language - II</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=553118">TBD1000</a></td>
                  </tr>
                  <tr>                      
                      <td>Mathematics - II</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=547745">MAT1008</a></td>
                  </tr>
                  <tr className="grayrow">                      
                      <td>Probability and Statistics</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548896">BIL1004</a></td>
                  </tr>
                  <tr>                      
                      <td>	Introduction To Computer Programming</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548866">COM1000</a></td>
                  </tr>
                  
                  <tr className="blackrow"><th>Second Grade</th><th></th></tr>
                  <tr>                      
                      <td>Discrete Mathematics</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548739">BIL2009</a></td>
                  </tr>
                  <tr className="grayrow">                      
                      <td>Data Structures</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548737">COM2005</a></td>
                  </tr>
                  <tr>                      
                      <td>Electronic Laboratory</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548904">BIL2003</a></td>
                  </tr>
                  <tr className="grayrow">                      
                      <td>Digital Design</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548883">COM2003</a></td>
                  </tr>
                  <tr>                      
                      <td>Object Oriented Programming</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548740">COM2001</a></td>
                  </tr>
                  <tr className="grayrow">                      
                      <td>Differential Equations</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=547785">MAT2011</a></td>
                  </tr>
                  <tr>                      
                      <td>Algorithms</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548886">BIL2008</a></td>
                  </tr>
                  <tr className="grayrow">                      
                      <td>	Automata Theory</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548892">COM2004</a></td>
                  </tr>
                  <tr>                      
                      <td><a href="https://www.youtube.com/watch?v=xK_3CK2-BtE" className="lessonexample">Digital Design Lab.</a></td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548854">BIL2012</a></td>
                  </tr>
                  <tr className="grayrow">                      
                      <td>Microprocessors</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548884">COM2000</a></td>
                  </tr>
                  <tr>                      
                      <td>	Programming Languages</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548846">COM2002</a></td>
                  </tr>
                  <tr className="grayrow">                      
                      <td>Engineering Mathematics</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548899">COM2008</a></td>
                  </tr>
                  <tr className="blackrow"><th>Third Grade</th><th></th></tr>
                  <tr className="grayrow">                      
                      <td>Computer Architecture</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548876">COM3005</a></td>
                  </tr>
                  <tr>                      
                      <td><a href="https://github.com/YunusEmreKarakose/KtuMebsis" className="lessonexample"> Database Management</a></td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548878">COM3001</a></td>
                  </tr>
                  <tr className="grayrow">                      
                      <td>Operating Systems</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548900">COM3003</a></td>
                  </tr>
                  <tr>                      
                      <td>Numerical Analysis</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548907">COM3009</a></td>
                  </tr>
                  <tr className="grayrow">                      
                      <td><a href="https://github.com/YunusEmreKarakose/VHDL_Project" className="lessonexample">Hardware Description Languages</a></td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548908">BIL3017</a></td>
                  </tr>
                  <tr>                      
                      <td>Occupational English</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548938">BIL3009</a></td>
                  </tr>
                  <tr className="grayrow">                      
                      <td><a href="https://www.youtube.com/watch?v=o1rvBMPYgZ8" className="lessonexample">Computer Graphics - I</a></td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548735">BIL3008</a></td>
                  </tr>
                  <tr>                      
                      <td>Computer Networks</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548877">COM3004</a></td>
                  </tr>
                  <tr className="grayrow">                      
                      <td>Signals and Systems</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548875">BIL3006</a></td>
                  </tr>
                  <tr>                      
                      <td>System Programming</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548929">COM3000</a></td>
                  </tr>
                  <tr className="grayrow">                      
                      <td>Web Programming</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548918">BIL3002</a></td>
                  </tr>
                  <tr>                      
                      <td>Protection of Personal Data </td>
                      <td><a href="link">USEC0008</a></td>
                  </tr>
                  <tr className="blackrow"><th>Fourth Grade</th><th></th></tr>
                  <tr className="grayrow">                      
                      <td>Engineering Design</td>
                      <td><a href="link">BIL4001</a></td>
                  </tr>
                  <tr>                      
                      <td>History of Rev. and Ataturk' S Princip. - I</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=553389">AITB4001</a></td>
                  </tr>
                  <tr className="grayrow">                      
                      <td><a href="https://github.com/YunusEmreKarakose/PythonServer" className="lessonexample">Computer Network Programing</a></td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548833">BIL4005</a></td>
                  </tr>
                  <tr>                      
                      <td>Robot Technologies</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548880">BIL4003</a></td>
                  </tr>
                  <tr className="grayrow">                      
                      <td>Windows Programming</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548919">BIL4011</a></td>
                  </tr>
                  <tr>                      
                      <td>Computer Graphics Laboratory</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548838">COM2003</a></td>
                  </tr>
                  <tr className="grayrow">                      
                      <td>FINAL PROJECT</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548862">BIL4000</a></td>
                  </tr>
                  <tr>                      
                      <td>History of Rev. and Ataturk' S Princip. - II</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=553381">AITB400</a></td>
                  </tr>
                  <tr className="grayrow">                      
                      <td><a href="https://github.com/YunusEmreKarakose/ParalelComputing" className="lessonexample">Parallel Computers</a></td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548829">BIL4016</a></td>
                  </tr>
                  <tr>                      
                      <td>Network and Data Security</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548897">BIL4004</a></td>
                  </tr>
                  <tr className="grayrow">                      
                      <td>Medical Imaging Systems</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548906">BIL4010</a></td>
                  </tr>
                  <tr>                      
                      <td>Computer Networks Laboratory</td>
                      <td><a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/course.aspx?pid=9&lang=2&dbid=548836">BIL4018</a></td>
                  </tr>
                  </table>

  
                  </div>
                )
                : (
                  null
                )
            }
          </div>
        );
      }
}
export default EDropdown;