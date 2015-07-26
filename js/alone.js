viewportWidth = window.innerWidth;
viewportHeight = window.innerHeight;

// Set Porthole Size
if (viewportWidth > viewportHeight) {
    portholeSize = viewportHeight;
} else {
    portholeSize = viewportWidth;
}

$('#porthole').height(portholeSize);
$('#porthole').width(portholeSize);

// Set Globe Size
globeSize = (viewportWidth - portholeSize) / 2 * .6;

$(".globe").height(globeSize);
$(".globe").width(globeSize);

// Center it vertically
$(".globe").css({
    "top": (viewportHeight / 2) - globeSize / 2
});

// Red Star Deck globe is smaller and in a different position
$(".globe-red").height(globeSize/3);
$(".globe-red").width(globeSize/3);
$(".globe-red").css({
    "top": "87.5%",
    "left": "2.5%"
});

// Porthole view starts in the center
portholeViewX = 50;
portholeViewY = 50;

$(".globe-red").hover(function() {
    $(".exoplanet.red").show();
}, function() {
    setTimeout(function() {
        $(".exoplanet.red").hide();
    }, 3000);
});

// Keep "Back to Star deck" and "Help" visible when hovering on them
$(".exoplanet.red").hover(function() {
    $(".exoplanet.red").show();
});

// Exoplanet Facts Start out Hidden
$(".exoplanet.red").hide();

$(".globe-red, #stardeck").click(function() {
    window.location.href = "index.html";
});

$("#help").click(function(event) {
    event.stopPropagation();
    $('#helpModal').modal('show');
})