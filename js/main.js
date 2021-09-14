// If you don't want the particles, change the following to false
const doParticles = true;




// Do not mess with the rest of this file unless you know what you're doing

const getWidth = () => { // credit to travis on stack overflow
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
};

if (doParticles) {
    if (getWidth() < 400) $.firefly({
        minPixel: 1,
        maxPixel: 2,
        total: 20
    });
    else $.firefly({
        minPixel: 1,
        maxPixel: 3,
        total: 40
    });
}

// This is for the click to copy
let t;
$(document).ready(() => {
    t = $(".ip").html();
});

$(document).on("click", ".ip", () => {
    let copy = document.createElement("textarea");
    copy.style.position = "absolute";
    copy.style.left = "-99999px";
    copy.style.top = "0";
    copy.setAttribute("id", "ta");
    document.body.appendChild(copy);
    copy.textContent = t;
    copy.select();
    document.execCommand("copy");
    $(".ip").html("<span class='extrapad'>IP copiado!</span>");
    setTimeout(() => {
        $(".ip").html(t);
        var copy = document.getElementById("ta");
        copy.parentNode.removeChild(copy);
    }, 1600);
});

// This is to fetch the player count
$(document).ready(() => {
    /*
    let ip = $(".sip").attr("data-ip");
    let port = $(".sip").attr("data-port");
    if (port == "" || port == null) port = "25565";
    if (ip == "" || ip == null) return console.error("Error fetching player count - is the IP set correctly in the HTML?");
    */
    updatePlayercount(/*ip, port*/);
    // Updates every minute (not worth changing due to API cache)
    setInterval(() => {
        updatePlayercount(/*ip, port*/);
    }, 60000);
});

const updatePlayercount = (ip, port) => {
    
    $(".playercount").html("O servidor parece estar desligado neste momento");
    /*
    (async() => {
        var head= document.getElementsByTagName('head')[0];
        var script= document.createElement('script');
        script.src= '//sampmonitoring.com/web/api/251/'; // monitoring url returns (after some delay) an array variable called 'api'
        head.appendChild(script);
        while(!window.hasOwnProperty( "api")) // check for to be created api variable to account for delay
            await new Promise(resolve => setTimeout(resolve, 100)); // wait 100ms before trying again
        if (api.status == 1) {
            $(".sip").html(api.players);
        } else {
            $(".playercount").html("O servidor parece estar desligado neste momento");
        }
    })();
    */
};