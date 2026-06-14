<?php
function experienceTimeline()
{
    // reusable timeline segment
    $TIMELINE_SEGMENT = "<div class='timelineSegment'>
                        <div class='timelineTopLine'></div>
                        <div class='timelineCircle'></div>
                        <div class='timelineBottomLine'></div>
                        </div>";
    $timeline = json_decode(file_get_contents("../json/experienceTimeline.json"), true);

    // html string to return
    $html = "";

    // timeline beginning tip text
    $html .= "<h3 id='timelineTipText'>To infinity and beyond!</h3>";

    // grid container for timeline
    $html .= "<ol id='experienceTimeline'>";

    // timeline beginning tip
    $html .= "<div class='timelineSpacer'></div>";
    $html .= "<div class='timelineSegment'>";
    $html .= "<div class='timelineCircle'></div>";
    $html .= "<div class='timelineBottomLine'></div>";
    $html .= "</div>";
    $html .= "<div class='timelineSpacer'></div>";

    // loop through timeline items and add them to the html string
    $itterCount = 0;
    foreach (array_reverse($timeline["timeline"]) as $experience) {
        if ($itterCount % 2 == 0) {
            $html .= "<div class='timelineSpacer'></div>";

            $html .= $TIMELINE_SEGMENT;
        }

        $html .= "<li class='timelineItem'>";
        $html .= "<h3 class='timelineTitle'>" . $experience['title'] . "</h3>";
        $html .= "<h4 class='timelineTimestamp'>" . $experience['time'] . "</h4>";
        $html .= "<p class='timelineDescription'>" . $experience['description'] . "</p>";
        $html .= "</li>";

        if ($itterCount % 2 != 0) {
            $html .= $TIMELINE_SEGMENT;

            # Replace with line later
            $html .= "<div class='timelineSpacer'></div>";
        }

        $itterCount++;
    }

    // Timeline beginning tip
    $html .= "<div class='timelineSpacer'></div>";

    $html .= "<div class='timelineSegment'>";
    $html .= "<div class='timelineTopLine'></div>";
    $html .= "<div class='timelineCircle'></div>";
    $html .= "</div>";

    $html .= "<div class='timelineSpacer'></div>";

    // end of timeline container
    $html .= "</ol>";

    // timeline beginning tip text
    $html .= "<h3 id='timelineTipText'>A long time ago in a galaxy far, far away...</h3>";
    return $html;
}
?>

<div class="widget">
    <h1>About Me</h1>
</div>
<div class="widget">
    <p>
        My name is Peter, and this is my confession. I am a guy who likes technology, creative things,
        problem solving and sometimes a bit of a challenge. I was always eager to look further than the average person.
        I want to know how things work, why they work or how to make them work.
    </p>

    <p>
        My biggest dream in life is to make an impact on the world. I want to make something that can last or something
        that other people can pick up for themselves. I always try to help people when I can I always want to be on
        everyone's good side. I choose to live my life like this because I believe in acts of kindness even if they
        don't come back to me.
    </p>

    <p>
        If you came across this website I hope you will enjoy it or find it cool. I tried to build this website to reflect my personality and to have something that is truly mine and about me. I try to minimize the usage of AI during it's development to retain this personall feeling
    </p>

    <!-- Me in 4 words: Genius, billionaire, playboy, philanthropist. -->
</div>

<div class="widget">
    <h1>Experience timeline</h1>
    <!-- Timeline graphic generated from a JSON file experienceTimeline.json -->
    <?php echo experienceTimeline(); ?>
</div>
