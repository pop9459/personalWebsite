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
    <div id="topBar">
        <div class="widget spacer"></div>
        <div class="inlineBlock">
            <div id="clock" class="widget"></div>
        </div>
        <div class="widget spacer mirror"></div>
    </div>
    <div class="column"></div>
    <div class="column"></div>
    <div class="column">
        <div id="profileInfo" class="widget">
            <img class="image" src="img/profilePic.jpg" alt="profilePic">
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

            </table>
        </div>
        <div id="mediaLinks" class="widget">
            <a href="https://github.com/pop9459" class="mediaLink">
                <img src="img/icons/Tilda_Icons_26sn_github.svg" alt="github icon" class="icon">
                <p>pop9459</p>
            </a>
            <a href="https://www.linkedin.com/in/peter-kapsiar-630743213" class="mediaLink">
                <img src="img/icons/Tilda_Icons_26sn_linkedin.svg" alt="linkedIn icon" class="icon">
                <p>Peter Kapsiar</p>
            </a>
            <a href="https://www.instagram.com/emanuel__bacigala" class="mediaLink">
                <img src="img/icons/Tilda_Icons_26sn_instagram.svg" alt="instagram icon" class="icon">
                <p>@emanuel_bacigala</p>
            </a>
            <a href="" class="mediaLink">
                <img src="img/icons/Tilda_Icons_26sn_mail13.svg" alt="mail icon" class="icon">
                <p>kapsiar888n@gmail.com</p>
            </a>
        </div>
        <div id="skills" class="widget">
            <div class="skill">
                <h3>Git</h3>
                <?php displayProgressBar(5, 4); ?>
            </div>
            <div class="skill">
                <?php displayProgressBar(5, 4); ?>
            </div>
            <div class="skill">
                <?php displayProgressBar(5, 3); ?>
            </div>
            <div class="skill">
                <?php displayProgressBar(5, 1); ?>
            </div>
            <div class="skill">
                <?php displayProgressBar(5, 1); ?>
            </div>
        </div>
    </div>
</div>