$(document).ready(function() {
    $('.myCarousel').carousel();
});
function bigBrother() {
    var progress = "<div class='progress'><div class='progress-bar progress-bar-danger progress-bar-striped' role='progressbar' aria-valuenow='0' aria-valuemin='0' aria-valuemax='100' style='width: 0%'>Informing Thought Police</div></div>";
    $("body").html("<div id='bb' align='center'>Big Brother is Watching You</div>"+progress);
    $("body").css("background-color", "black");
    var value = 0;
    setInterval(function() {
        value += 1;
        if (value > 100) {
            value = 100;
        }
        $('.progress-bar').css('width',value+'%');
        console.log(value);
        },100);
        
    }
