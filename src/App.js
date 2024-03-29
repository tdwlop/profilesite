import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='nav-area'>
          <nav class="navbar navbar-expand-lg">

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <a class="nav-link" href="#intro">Intro</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#projects">Projects</a>
                </li>
                {/* <li class="nav-item">
                  <a class="nav-link" href="#preference">Preference</a>
                </li> */}
                <li class="nav-item">
                  <a class="nav-link" href="#experience">Experience</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#hobbies">Hobbies</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contact">Contact</a>
                </li>

              </ul>
            </div>
          </nav>
        </div>

        <div className='intro-area' id="intro">
          <p className='intro-area-title'>Intro</p>
          <div className="container-sm" id="intro-area-card">
            <p>Hi. I'm Vivian. I am a 2022 SFSU graduate with a Computer Science BS.
              I am currently unemployed after finishing my temporary Fiscal Services Coordinator position for the College of Health and Social Sciences at SFSU.
              Growth through experience is essential to my continued success.
              Thank you for visiting and for your time.</p>
          </div>

        </div>

        <div className='project-area' id="projects">
          <p className='project-area-title'>Projects</p>
          <div className="project-area-cards row justify-content-between">

            <div className='col-md-4'>

              <div className='project-area-card'>
                <p className='project-area-card-title'>File System Project (Team) <br></br>
                  Spring 2021</p>
                <div className='project-area-button-tags'>

                </div>
                <p className='project-area-card-description'>
                  - Used C to create the top level of a FAT file system <br></br>
                  - Brainstormed what metadata the files/directories should have <br></br>
                  - creating/”deleting” files/directories and handling the freespace through bitmap <br></br>
                  - opening, closing, reading, and writing those files <br></br>
                  - All done in virtual machine ubuntu and virtual team communication <br></br>
                </p>
              </div>

            </div>

            <div className='col-md-4'>
              <div className='project-area-card'>
                <p className='project-area-card-title'>Simple Form (Individual) <br></br>
                  Fall 2021</p>
                <div className='project-area-button-tags'>

                </div>
                <p className='project-area-card-description'>
                  - Used React with Bootstrap to make a simple form <br></br>
                  - Used hCaptcha and Bing Maps API <br></br>
                </p>
                <div className='project-links'>
                  <a href='https://tdwlop.github.io/cscwwwform/#/' target={"_blank"}>
                    <button className='project-link-button'>
                      <p>Demo</p>
                    </button>
                  </a>
                  <a href='https://github.com/tdwlop/cscwwwform' target={'_blank'}>
                    <button className='project-link-button'>
                      <p>
                        Github
                      </p>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='project-area-card'>
                <p className='project-area-card-title'>Instrument and Visualizer Project (Team) <br></br>
                  Fall 2021</p>
                <div className='project-area-button-tags'>

                </div>
                <p className='project-area-card-description'>
                  - Used React with typescript and SQL<br></br>
                  - Used p5.js for visualizer and tone.js for sounds <br></br>
                  - All done with virtual team communication <br></br>
                </p>
                <div className='project-links'>
                  <a href='https://github.com/tdwlop/csc600FinalProject' target={'_blank'}>
                    <button className='project-link-button'>
                      <p>
                        Github
                      </p>
                    </button>
                  </a>
                </div>
              </div>
            </div>



          </div>
          <div className='row justify-content-between'>
            <div className='col-md-4'>
              <div className='project-area-card'>
                <p className='project-area-card-title'>Gator Companion (Team) <br></br>
                  Fall 2021</p>
                <div className='project-area-button-tags'>

                </div>
                <p className='project-area-card-description'>
                  - Used HTML and CSS <br></br>
                  - Design focused <br></br>
                  - Went through design process from mock-ups to implementation <br></br>
                  - All done with virtual team communication <br></br>
                </p>
                <div className='project-links'>
                  <a href='https://josephkois.github.io/Team-6/Protodes/HTML/index.html' target={"_blank"}>
                    <button className='project-link-button'>
                      <p>Demo</p>
                    </button>
                  </a>
                  <a href='https://github.com/josephkois/Team-6' target={'_blank'}>
                    <button className='project-link-button'>
                      <p>
                        Github
                      </p>
                    </button>
                  </a>
                  <a href='https://www.figma.com/file/5R5qq6OAcFzdOpmFQAGEfv/HCI-Team-6?node-id=238%3A3090'>
                    <button className='project-link-button'>
                      <p>
                        Figma
                      </p>
                    </button>
                  </a>
                  <a href='https://docs.google.com/document/d/1_FoiaUS_EQ2TVH1ZntOup2K_JuNYaukJPUy1mq6kfco/edit?usp=sharing'>
                    <button className='project-link-button'>
                      <p>
                        Writeup
                      </p>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='project-area-card'>
                <p className='project-area-card-title'> Webpage (Team) <br></br>
                  Fall 2020</p>
                <div className='project-area-button-tags'>

                </div>
                <p className='project-area-card-description'>
                  - Simple responsive webpage that can create, search, filter items
                  - Used MongoDB database. Java backend. HTML, CSS, Javascript, React frontend<br></br>
                  - Coordinated which team member should which part what based on their skill level <br></br>
                  - All done with Visual Studio Code, Intellij, MongoDB, and virtual team communication <br></br>
                </p>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='project-area-card'>
                <p className='project-area-card-title'>Designing a SQL Database (Team) <br></br>
                  Fall 2021</p>
                <div className='project-area-button-tags'>

                </div>
                <p className='project-area-card-description'>
                  - Went through a design process to create a database for a fantasy school <br></br>
                  - Conceptual design (ER models), Logical designs (relational schemas), creating the tables and fake data <br></br>
                  - All done in Azure Virtual Lab and virtual team communication <br></br>
                </p>
                <div className='project-links'>
                  <a href='https://docs.google.com/presentation/d/1QqsxIr1Cd6Bc4Yb3_BhjekmVnuC_oEjNNkasN9zXBcs/edit?usp=sharing' target={'_blank'}>
                    <button className='project-link-button'>
                      <p>
                        Slides
                      </p>
                    </button>
                  </a>
                </div>
              </div>
            </div>


          </div>

        </div>

        <div className='experience-area' id="experience">
          <p className='experience-area-title'>Experience</p>
          <div>

            <div className='row justify-content-between'>

              <div className='col-md-6'>
                <div className='experience-area-card'>
                  <p className='experience-area-card-title'> Fiscal Services Coordinator <br></br>
                    San Francisco State University - CHSS <br></br>
                    1600 Holloway Avenue, San Francisco, CA 94132 <br></br>
                    August 2022 - February 2023</p>
                  <div className='experience-area-button-tags'>

                  </div>
                  <p className='experience-area-card-description'>
                    - Coordinated and managed travel processing and reimbursements through Concur and fiscal transactions through DocuSign daily. <br></br>
                    - Generated fiscal reports through CSU's Financial Data Warehouse to reconcile with College's records monthly.  <br></br>
                    - Processed student assistant and hourly employees' monthly payroll  <br></br>
                    - Updated internal policies and guidelines to match the ever-changing University policies <br></br>
                  </p>
                </div>
              </div>

              <div className='col-md-6'>
                <div className='experience-area-card'>
                  <p className='experience-area-card-title'>IT Helpdesk Technician <br></br>
                    San Francisco State University - CHSS <br></br>
                    1600 Holloway Avenue, San Francisco, CA 94132 <br></br>
                    September 2021 - August 2022</p>
                  <div className='experience-area-button-tags'>

                  </div>
                  <p className='experience-area-card-description'>
                    - Imaging, setting up, and updating computers and installing software <br></br>
                    - Setting up printers/scanners and troubleshooting printer/scanner connection issues <br></br>
                    - Removing and d-banning hard drives for E-waste <br></br>
                    - Responding, completing tickets <br></br>
                    - Emailing customers and answering the phone <br></br>
                  </p>
                </div>
              </div>

              {/* <div className='col-md-6'>
              <div className='experience-area-card'>
                <p className='experience-area-card-title'>Office Student Assistant <br></br>
                San Francisco State University <br></br>
                1600 Holloway Avenue, San Francisco, CA 94132 <br></br>
                August 2021 - September 2021</p>
                <div className='experience-area-button-tags'>

                </div>
                <p className='experience-area-card-description'>
                  - Diagnosed student issues and referred them to correct resources <br></br>
                  - Coordinated and communicated with advisors about students <br></br>
                  - Greeted, checked in students to appointments<br></br>
                  - Scheduled appointments and drop-ins <br></br>
                  - Handled mail packages and other supplies <br></br>
                </p>
              </div>
            </div> */}
            </div>
            <div className='row justify-content-between'>
              <div className='col-md-6'>
                <div className='experience-area-card'>
                  <p className='experience-area-card-title'>Customer Service/Cashier <br></br>
                    Target <br></br>
                    233 Winston Dr, San Francisco, CA 94132 <br></br>
                    July 2018 - August 2019</p>
                  <div className='experience-area-button-tags'>

                  </div>
                  <p className='experience-area-card-description'>
                    - Responsible for handling customer payments through quick and accurate transactions <br></br>
                    - Resolved customer disputes in a calm and collected manner at guest services <br></br>
                    - Remained collected and professional even during peak hours <br></br>

                  </p>
                </div>
              </div>

              <div className='col-md-6'>
                <div className='experience-area-card'>
                  <p className='experience-area-card-title'>Teacher Assistant <br></br>
                    Lowell High School <br></br>
                    1101 Eucalyptus Dr, San Francisco, CA 94132 <br></br>
                    November 2016 - May 2018</p>
                  <div className='experience-area-button-tags'>

                  </div>
                  <p className='experience-area-card-description'>
                    - Organized paper handouts and books for each class section <br></br>
                    - Graded papers and recorded grades for data entry <br></br>
                    - Operated scantron machines for multiple choice tests and printer machines for handouts <br></br>

                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className='hobbies-area' id="hobbies">
          <p className='hobbies-area-title'>Hobbies</p>
          <div className="container-sm" id="hobbies-area-card">
            <ul>
              <li>Watching wholesome videos to make me believe in humanity again</li>
              <li>Baking and cooking to feed my hunger</li>
              <li>Gardening for nice oxygen</li>
            </ul>
          </div>


        </div>

        <div className='contact-area' id="contact">
          <p className='contact-area-title'>Contact</p>
          <div className="container-sm" id="contact-area-card">
            <p>Contact information should be on resume</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
