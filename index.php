<?php
$bypassMobileWarning = filter_input(INPUT_POST, 'bypassMobileWarning');

function isMobile() {
    $userAgent = $_SERVER['HTTP_USER_AGENT'];
    $mobileAgents = [
        'Mobile', 'Android', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Opera Mini', 'IEMobile'
    ];

    foreach ($mobileAgents as $agent) {
        if (stripos($userAgent, $agent) !== false) {
            return true;
        }
    }
    return false;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Peter_Kapsiar</title>

    <link rel="stylesheet" href="css/landingPageContent.css" type="text/css">
    <link rel="stylesheet" href="css/main.css" type="text/css">
    <link rel="stylesheet" href="css/animations.css" type="text/css">
    <link rel="stylesheet" href="css/loadScreen.css" type="text/css">
    <link rel="stylesheet" href="css/cube.css" type="text/css">
    <link rel="stylesheet" href="css/portfolioItems.css" type="text/css">

    <script src="scripts/main.js" type="module"></script>
</head>

<body>
    <?php if (isMobile() && $bypassMobileWarning != true) : ?>
        <div id="mobileWarning">
            <h1>Warning</h1>
            <p>Mobile layout is not yet implemented.</p>
            <p>It is recommended to use a desktop for the intended experience.</p>
            <form action="<?php echo $_SERVER["PHP_SELF"]; ?>" method="post">
                <input type="hidden" name="bypassMobileWarning" value="true">
                <input class="button" type="submit" value="Continue anyway">
            </form>
        </div>
    <?php else : ?>
        <div id="textSplash"></div>

        <div id="background"></div>

        <div id="content"></div>

    <?php endif; ?>
</body>
</html>