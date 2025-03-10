export default function Education() {
    return (

        <section className="resume-section" id="education">
            <div className="resume-section-content">
                <h2 className="mb-5">Education</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <a href="http://www.katalog.ktu.edu.tr/DersBilgiPaketi/generalinfo.aspx?pid=9&lang=2" target="_blank"><img src="images/ktu.png"></img></a>
                        {/*<h3 className="mb-0">Karadeniz Technical University</h3>*/}
                        <div className="subheading mb-3">&emsp;Bachelor of Science</div>
                        <div>&emsp;&nbsp;&nbsp;Computer Engineering </div>
                        <p>&emsp;&nbsp;&nbsp;GPA: 2.88</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">09.2014 - 03.2022</span></div>
                </div>
            </div>
        </section>
    )
}