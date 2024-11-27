// Function to simulate Linux boot sequence
export function textSplash() 
{
    const messages = [
        '[ <span class="okPrefix">OK</span> ] Started Apply Kernel Variables.',
        '[ <span class="okPrefix">OK</span> ] Mounted Kernel Debug File System.',
        '[ <span class="okPrefix">OK</span> ] Mounted Huge Pages File System.',
        '[ <span class="okPrefix">OK</span> ] Mounted POSIX Message Queue File System.',
        '[ <span class="okPrefix">OK</span> ] Started Load Kernel Modules.',
        '[ <span class="okPrefix">OK</span> ] Mounted FUSE Control File System.',
        '[ <span class="okPrefix">OK</span> ] Activated swap /dev/mapper/ubuntu--vg-swap_1.',
        '[ <span class="okPrefix">OK</span> ] Reached target Swap.',
        '[ <span class="okPrefix">OK</span> ] Reached target Local File Systems (Pre).',
        'Starting File System Check on /dev/disk/by-uuid/abcd1234...',
        '[ <span class="okPrefix">OK</span> ] Started File System Check on /dev/disk/by-uuid/abcd1234.',
        'Mounting /boot...',
        '[ <span class="okPrefix">OK</span> ] Mounted /boot.',
        'Mounting /root...',
        '[ <span class="okPrefix">OK</span> ] Mounted /root.',
        'Mounting /home...',
        '[ <span class="okPrefix">OK</span> ] Mounted /home.',
        '[ <span class="okPrefix">OK</span> ] Reached target Local File Systems.',
        'Starting Import network configuration from initramfs...',
        'Starting Load AppArmor profiles...',
        '[ <span class="okPrefix">OK</span> ] Finished Import network configuration from initramfs.',
        '[ <span class="okPrefix">OK</span> ] Finished Load AppArmor profiles.',
        'Starting Flush Journal to Persistent Storage...',
        '[ <span class="okPrefix">OK</span> ] Started Journal Service.',
        'Starting Network Service...',
        '[ <span class="okPrefix">OK</span> ] Reached target Network (Pre).',
        '[ <span class="okPrefix">OK</span> ] Started Network Service.',
        'Starting WPA supplicant...',
        '[ <span class="okPrefix">OK</span> ] Started WPA supplicant.',
        'Starting Network Name Resolution...',
        '[ <span class="okPrefix">OK</span> ] Started Network Name Resolution.',
        'Starting OpenSSH Daemon...',
        '[ <span class="okPrefix">OK</span> ] Started OpenSSH Daemon.',
        'Starting Load/Save Random Seed...',
        '[ <span class="okPrefix">OK</span> ] Started Load/Save Random Seed.',
        '[ <span class="okPrefix">OK</span> ] Reached target System Initialization.',
        '[ <span class="okPrefix">OK</span> ] Reached target Basic System.',
        'Starting Update UTMP about System Boot/Shutdown...',
        '[ <span class="okPrefix">OK</span> ] Started Update UTMP about System Boot/Shutdown.',
        'Starting User Manager for UID 1000...',
        '[ <span class="okPrefix">OK</span> ] Started User Manager for UID 1000.',
        '[ <span class="okPrefix">OK</span> ] Reached target Multi-User System.',
        'Starting Authorization Manager...',
        '[ <span class="okPrefix">OK</span> ] Started Authorization Manager.',
        'Starting CUPS Scheduler...',
        '[ <span class="okPrefix">OK</span> ] Started CUPS Scheduler.',
        '[ <span class="okPrefix">OK</span> ] Started Avahi mDNS/DNS-SD Stack.',
        'Starting Disk Manager...',
        '[ <span class="okPrefix">OK</span> ] Started Disk Manager.',
        '[ <span class="okPrefix">OK</span> ] Reached target Printer.',
        'Starting Bluetooth service...',
        '[ <span class="okPrefix">OK</span> ] Started Bluetooth service.',
        'Starting GNOME Display Manager...',
        '[ <span class="okPrefix">OK</span> ] Started GNOME Display Manager.',
        'Starting Daily apt upgrade and clean activities...',
        '[ <span class="okPrefix">OK</span> ] Started Daily apt upgrade and clean activities.',
        '[ <span class="okPrefix">OK</span> ] Reached target Graphical Interface.',
        '[ <span class="okPrefix">OK</span> ] Listening on OpenBSD Secure Shell server socket.',
        'Starting Cleanup of Temporary Directories...',
        '[ <span class="okPrefix">OK</span> ] Finished Cleanup of Temporary Directories.',
        'Starting Security Auditing Service...',
        '[ <span class="okPrefix">OK</span> ] Started Security Auditing Service.',
        '[ <span class="okPrefix">OK</span> ] Reached target Security Auditing.',
        'Starting Update UTMP about System Runlevel Changes...',
        '[ <span class="okPrefix">OK</span> ] Finished Update UTMP about System Runlevel Changes.',
        '[ <span class="okPrefix">OK</span> ] Reached target GUI.',
        'Starting system...'
    ];
    
    const logContainer = document.createElement("div");
    logContainer.id = "textSplash";
    document.body.appendChild(logContainer);

    let textSeed = 15;

    return new Promise((resolve) => {
        messages.forEach((msg, index) => {
            setTimeout(() => {
                const logMessage = document.createElement("div");
                logMessage.innerHTML = msg;
                logContainer.appendChild(logMessage);

                // Auto-scroll to the bottom of the log container
                window.scrollTo(0, document.body.scrollHeight);
            }, (index * textSeed) + 500);
        });

        const clearTimeoutId = setTimeout(() => {
            // Remove the log container after the simulation is complete
            document.getElementById("textSplash").remove();
        }, messages.length * textSeed + 1000);

        const resolveTimeout = setTimeout(() => {
            console.log("Text Splash completed");
            resolve();
        }, messages.length * textSeed + 1200);

        const keyPressHandler = function (e) {
            document.getElementById("textSplash").remove();
            document.removeEventListener('keypress', keyPressHandler);
            clearTimeout(clearTimeoutId);
            clearTimeout(resolveTimeout);
            resolve();
        };

        document.addEventListener('keypress', keyPressHandler);
    });
}

export function backgroundIntroduce() 
{
    const background = document.getElementById("background");
    return new Promise((resolve) => {
        background.classList.add("expandBackground");
        console.log("background expanded");
        setTimeout(resolve, 1000); 
    });
}

export function animateWidgets() {
    return new Promise((resolve) => {
        var timeBetweenAnimations = 300; // Time between each widget animation

        // animate horizontal widgets
        const horizontalWidgets = document.querySelectorAll(".topBar > div");
        for (let i = 0; i < horizontalWidgets.length; i++)
        {
            horizontalWidgets[i].classList.add("hidden");
        }
        for (let i = 0; i < horizontalWidgets.length; i++) 
        {
            setTimeout(() => {
                horizontalWidgets[i].classList.remove("hidden");
                horizontalWidgets[i].classList.add("expandHorizontal");
            }, i * timeBetweenAnimations);
        }

        // animate vertical widgets
        const verticalWidgets = document.querySelectorAll(".column > div");
        for (let i = 0; i < verticalWidgets.length; i++)
        {
            verticalWidgets[i].classList.add("hidden");
        }
        for (let i = 0; i < verticalWidgets.length; i++) 
        {
            setTimeout(() => {
                verticalWidgets[i].classList.remove("hidden");
                verticalWidgets[i].classList.add("expandVertical");
            }, i * timeBetweenAnimations);
        }
        console.log("Widgets animated");  // Log success
        resolve();
    });
}