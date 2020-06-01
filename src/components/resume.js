import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./resume.css";
import Education from "./education.js";

import selfie from "../pictures/selfie.png";
import WorkExperience from "./workExperience";

class Resume extends Component {
  componentDidMount() {
    var coll = document.getElementsByClassName("collapsible");
    console.log(coll);
    for (var i = 0; i < coll.length; i++)
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.lastElementChild;
        if (content.style.height === "auto") {
          content.style.height = "10px";
        } else {
          content.style.height = "auto";
        }
      });
  }

  render() {
    this.componentDidMount();
    return (
      <Grid>
        <Grid col={9} className="banner-text" style={{ display: "flex" }}>
          <Cell col={3}>
            <img
              src={selfie}
              alt="avatar"
              id="resume_avatar"
              style={{
                height: "400px",
                borderRadius: "50px",
                margin: "2em",
                padding: "0px",
              }}
            />
          </Cell>
          <Cell col={9} style={{}}>
            <div col={12} style={{ display: "flex" }}>
              <Cell col={9}>
                <h2 style={{ color: "white" }}>Jakub Ciurko</h2>
              </Cell>
              <Cell style={{ color: "grey" }}>
                Town:<p>Coventry, UK</p>
              </Cell>

              <Cell style={{ color: "grey" }}>
                Tel:<p>07554602380</p>
              </Cell>

              <Cell style={{ color: "grey" }}>
                Email:<p>ciurkoj@outlook.com</p>
              </Cell>
            </div>
            <Grid col={12} style={{ paddingLeft: "5em", color: "white" }}>
              <h3
                align={"left"}
                style={{
                  display: "block",
                  fontSize: "20pt",
                  width: "55%",
                  color: "grey",

                  borderBottom: "3px solid #833fb2",
                }}
              >
                Skills
              </h3>
              <Grid
                style={{
                  display: "flex",
                  flow: "wrap",
                  flexDirection: "row",
                  order: "1",
                }}
              >
                <Cell col={5}>
                  &bull; Programming languages: Python, C++, C, JavaScript,
                  HTML, CSS, SQL, R, MatLab
                </Cell>
                <Cell col={5}>&bull; Linux-Ubuntu</Cell>
                <Cell col={5}>&bull; Version Control: GIT &amp; GitHub</Cell>
                <Cell col={5}>&bull; MS Word, Excel</Cell>
                <Cell col={5}>
                  &bull; Project Management - Agile, Scrum, Kanban
                </Cell>
                <Cell col={5}>&bull; PLC Siemens S7</Cell>
                <Cell col={5}>
                  &bull; Languages: English(Proficient), Polish (Native), German
                  (Upper-intermediate)
                </Cell>
              </Grid>
            </Grid>
          </Cell>
          <Grid style={{ color: "white", display: "table", marginLeft: "0px" }}>
            <Grid
              align={"left"}
              style={{
                display: "table-cell",
                margin: "auto",
                verticalAlign: "middle",
                width: "15em",
                textAlign: "center",
                fontSize: "20pt",
                borderRight: "3px solid #833fb2",
              }}
            >
              Education
            </Grid>

            <Grid
              style={{
                display: "table-cell",
                color: "white",
                whiteSpace: "pre-wrap",
              }}
            >
              <Education
                startYear={"09/2018"}
                endYear={"present"}
                schoolName="Coventry University"
                schoolDegree="BSc (Hons) Computer Science"
                module0={"Software Engineering: Frontend Development"}
                module1={"Operating Systems and Security: C, C++, Assembly"}
                module2={"Advanced Algorithms: Python, C++, R"}
              />
              <Education
                startYear={"09/2014"}
                endYear={"04/2018"}
                schoolName="Technikum nr.2 Jarosław"
                schoolDegree="Electronics Technician"
                module0={
                  "Automation Systems: PLC Siemens S7, Smart Home installations."
                }
                module1={
                  "Electronic Devices' Serivice: Diagnostics, Design, Build, and Techniques of repair."
                }
                module2={
                  "Network Devices Configuration: local network design and installation"
                }
              />
            </Grid>
          </Grid>
          <Grid style={{ color: "white", display: "table", marginLeft: "0px" }}>
            <Grid
              className="section"
              align={"left"}
              style={{
                display: "table-cell",
                margin: "auto",
                verticalAlign: "middle",
                width: "15em",
                textAlign: "center",
                fontSize: "20pt",
                borderRight: "3px solid #833fb2",
              }}
            >
              Work Experience
            </Grid>
            <Grid
              style={{
                display: "table-cell",
                color: "white",
                whiteSpace: "pre-wrap",
              }}
            >
              <WorkExperience
                startYear={"07/2019"}
                endYear={"09/2019"}
                jobName="Electrician"
                employer="sky Personal GmbH"
                location="Bremen Area, Germany"
                jobDescription="My team was responsible for installing the new fire protection system and then a
                Wireless LAN network. Our duties included connecting patch panels, installing wireless
                routers, and connecting cash tills. As a team leader I had to check my colleagues' work,
                report our work to the manager and speak about what needs to be done next. Thanks
                to great communication and cooperation, we have been able to hit our target 1 day
                earlier and that saved time we have spent on helping others who struggled with their
                work. This developed my leadership and delegation skills, but also showed me what
                well-tuned team can achieve."
              />
              <WorkExperience
                startYear={"04/2019"}
                endYear={"05/2019"}
                jobName="Stock Controller"
                employer="Staffing Match Ltd"
                location="Magna Park, Lutterworth"
                jobDescription="Checking goods' conformity in a warehouse with the main database, 
                it required me to work with deadlines,it helped me to develop my time-management skills."
              />
              <WorkExperience
                startYear={"05/2018"}
                endYear={"09/2018"}
                jobName="Electrician"
                employer="Abacent Personal Service GmbH"
                location="Siegen Area, Germany"
                jobDescription="Electric installation redevelopment in Aldi store chain. I was responsible for installing
                new devices such as checkout machines, alarm systems and I also mounted new light
                fixtures. Back then I was just newcomer, who was lucky to work in amazing team which
                taught me how important it is to always deliver the best available service and how to
                pay attention even to the smallest details."
              />
              <WorkExperience
                startYear={"05/2018"}
                endYear={"09/2018"}
                jobName="A local apiary"
                employer="Self-employed"
                location="Hometown, Poland"
                jobDescription="I ran with a success an apiary in my local town, I used to sell honey and as one of few I sold
                pollen. Thanks to high quality products and customer service, I have built a business
                that allowed me to earn a good money. The main lesson I have got from that time is:
                Good and honest work are the best advertisement."
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Resume;
