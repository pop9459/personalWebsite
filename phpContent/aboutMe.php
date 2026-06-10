<?php
function experienceTimeline()
{
    $TIMELINE_SEGMENT = "<div class='timelineSegment'>
                        <div class='timelineTopLine'></div>
                        <div class='timelineCircle'></div>
                        <div class='timelineBottomLine'></div>
                        </div>";
    $timeline = json_decode(file_get_contents("../json/experienceTimeline.json"), true);

    $html = "<ol id='experienceTimeline'>";

    $itterCount = 0;
    foreach ($timeline["timeline"] as $experience) {
        if ($itterCount % 2 == 0) {
            $html .= "<div class='timelineSpacer'></div>";

            $html .= $TIMELINE_SEGMENT;
        }

        $html .= "<li class='timelineItem'>";
        $html .= "<h3 class='timelineTitle'>" . $experience['title'] . "</h3>";
        $html .= "<h4 class='timelineTimestamp'>" . $experience['time'] . "</h4>";
        $html .= "<p class='timelineDescription'>" . $experience['description'] . "<p>";
        $html .= "</li>";

        if ($itterCount % 2 != 0) {
            $html .= $TIMELINE_SEGMENT;
            
            # Replace with line later
            $html .= "<div class='timelineSpacer'></div>";
        }

        $itterCount++;
    }

    $html .= "</ol>";
    return $html;
}
?>

<div class="widget">
    <h1>About Me</h1>
</div>
<div class="widget">
    <p>
        Hi, I'm Peter, an aspiring IT professional currently studying Information Technology at NHL Stenden.
        I thrive in collaborative, problem-solving environments where I can apply my technical skills and creativity
        to tackle challenges.
    </p>

    <p>
        Over the past months, I've developed a strong foundation in database engineering, web development,
        and professional skills like teamwork and project management. I'm passionate about continuous learning and
        always look for ways to grow, whether through hands-on projects or exploring new technologies.
    </p>

    <p>
        I believe that organization, curiosity, and a proactive mindset are key to success in IT—and I'm excited to
        see how far I can take my skills in this ever-evolving field.
    </p>

    <p>
        Let's connect and create something amazing together!
    </p>

    <!-- <p>Me in 4 words: Genius, billionaire, playboy, philanthropist.</p>  -->
</div>

<div class="widget">
    <h1>Experience timeline</h1>
    <?php echo experienceTimeline(); ?>
</div>
