<?php
    function getMyAge()
    {
        //function for auto determining my age to be displayed in the stats
        $birthDateObject = new DateTime("2004-07-15");
        $today = new DateTime();
        return $today->diff($birthDateObject)->y;
    }

    function displayProgressBar($totalSections, $fullSections) {
        echo "<div class='progressBar'>";
        for ($i = 0; $i < $totalSections; $i++) {
            if ($i < $fullSections) {
                echo "<div class='progressSectionFull'></div>";
            } else {
                echo "<div class='progressSection'></div>";
            }
        }
        echo "</div>";
    }
?>

<div id="landingPageContent">
    <div class="topBar">
        <div class="widget spacer cutCornerBL"></div>
        <div class="inlineBlock">
            <div id="clock" class="widget">
                <div class='time'>00:00:00</div> 
                <div class='date'>00/00/0000</div>
            </div>
        </div>
        <div class="widget spacer cutCornerBR"></div>
    </div>
    <div class="column">
        <div class="widget">
            <div class="buttonMenu">
                <h1>MENU</h1>
                <input type="button" id="aboutMeButton" class="button" value="About me">
            </div>
            <hr>
            <div class="buttonMenu">
                <h2>MY PROJECTS</h2>
                <input type="button" id="personalWebsiteButton" class="button" value="Personal Website">
                <input type="button" id="maturityProjectButton" class="button" value="Maturity Project">
                <input type="button" id="sunnySocksWebsiteButton" class="button" value="Sunny Socks Website">
                <input type="button" id="battlebotButton" class="button" value="Project BattleBot">
                <input type="button" id="campusLinkButton" class="button" value="CampusLink">
            </div>
            <hr>
            <div class="buttonMenu">
                <h2>PORTFOLIO</h2>  

                <details>
                    <summary>Prof. Skills 2</summary>
                    <input type="button" id="portfolio2ReflectionButton" class="button" value="Reflection">
                    <input type="button" id="portfolio2FeedbackButton" class="button" value="Feedback">
                    <input type="button" id="portfolio2PDPButton" class="button" value="PDP">
                    <input type="button" id="portfolio2ProjectPlanButton" class="button" value="Project Plan">
                    <input type="button" id="portfolio2CommunicationButton" class="button" value="Communication">
                    <input type="button" id="portfolio2PresentingButton" class="button" value="Presenting">
                    <input type="button" id="portfolio2EdumundoAssignmentsButton" class="button" value="Edumundo Assignments">
                    <input type="button" id="portfolio2MeetingTechniquesButton" class="button" value="Meeting Techniques">
                    <input type="button" id="portfolio2FinalInterviewButton" class="button" value="Final Interview">
                </details>
                
                <details>
                    <summary>Prof. Skills 1</summary>
                    <input type="button" id="reflectionReportButton" class="button" value="Reflection Report">
                    <input type="button" id="studyCareerCoachingButton" class="button" value="Study Career Coaching">
                    <input type="button" id="feedbackFormsButton" class="button" value="Feedback Forms">
                    <input type="button" id="projectPlanButton" class="button" value="Project Plan">
                    <input type="button" id="communicationButton" class="button" value="Communication">
                    <input type="button" id="presentationButton" class="button" value="Presentation">
                    <input type="button" id="meetingTechniquesButton" class="button" value="Meeting Techniques">
                    <input type="button" id="edumundoAssignmentsButton" class="button" value="Edumundo Assignments">
                </details>
            </div>
        </div>
        <div class="widget cubeContainer">
            <div class="cube">
                <div class="side front"></div>
                <div class="side back"></div>
                <div class="side left"></div>
                <div class="side right"></div>
                <div class="side top"></div>
                <div class="side bottom"></div>
            </div>
            <div class="cube cubeSmall">
                <div class="side front"></div>
                <div class="side back"></div>
                <div class="side left"></div>
                <div class="side right"></div>
                <div class="side top"></div>
                <div class="side bottom"></div>
            </div>
        </div>
    </div>
    <div id="centerContentDisplay" class="column">
    </div>
    <div class="column">
        <div id="profileInfo" class="widget">
            <img class="image" src="src/img/profilePic.jpg" alt="profilePic">
            <table>
                <tr>
                    <th>Name</th>
                    <td>Peter</td>
                </tr>
                <tr>
                    <th>Surname</th>
                    <td>Kapsiar</td>
                </tr>
                <tr>
                    <th>Gender</th>
                    <td>Male</td>
                </tr>
                <tr>
                    <th>Age</th>
                    <td><?php echo getMyAge(); ?></td>
                </tr>
                <tr>
                    <th>Class</th>
                    <td>Computer wizard</td>
                </tr>
                <tr>
                    <th>Role</th>
                    <td>10x full stack developer</td>
                </tr>
            </table>
        </div>
        <div id="mediaLinks" class="widget">
            <a href="https://github.com/pop9459" class="mediaLink">
                <img src="src/img/icons/Tilda_Icons_26sn_github.svg" alt="github icon" class="icon">
                <p>pop9459</p>
            </a>
            <a href="https://www.linkedin.com/in/peter-kapsiar-630743213" class="mediaLink">
                <img src="src/img/icons/Tilda_Icons_26sn_linkedin.svg" alt="linkedIn icon" class="icon">
                <p>Peter Kapsiar</p>
            </a>
            <a href="https://www.instagram.com/emanuel__bacigala" class="mediaLink">
                <img src="src/img/icons/Tilda_Icons_26sn_instagram.svg" alt="instagram icon" class="icon">
                <p>@emanuel_bacigala</p>
            </a>
            <a href="" class="mediaLink">
                <img src="src/img/icons/Tilda_Icons_26sn_mail13.svg" alt="mail icon" class="icon">
                <p>kapsiar888n@gmail.com</p>
            </a>
        </div>
        <div id="skills" class="widget">
            <div class="skill">
                <h3>Linux</h3>
                <?php displayProgressBar(6, 5); ?>
            </div>
            <div class="skill">
                <h3>WebDev</h3>
                <?php displayProgressBar(6, 3); ?>
            </div>
            <div class="skill">
                <h3>GameDev</h3>
                <?php displayProgressBar(6, 2); ?>
            </div>
            <div class="skill">
                <h3>Git</h3>
                <?php displayProgressBar(6, 4); ?>
            </div>
            <div class="skill">
                <h3>Docker</h3>
                <?php displayProgressBar(6, 1); ?>
            </div>
            <div class="skill">
                <h3>Databases</h3>
                <?php displayProgressBar(6, 1); ?>
            </div>
            <div class="skill">
                <h3>BeingCool</h3>
                <?php displayProgressBar(6, 6); ?>
            </div>
        </div>
    </div>
</div>