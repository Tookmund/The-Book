function bigBrother() {
    var progress = "<div class='progress'><div class='progress-bar progress-bar-danger' role='progressbar' aria-valuenow='10' aria-valuemin='0'aria-valuemax='100' style='width: 10%'>Informing Thought Police</div></div>";
    $("body").html("<div id='bb' align='center'>Big Brother is Watching You</div>"+progress);
    $("body").css("background-color", "black");
    var value = 10;
    while (value < 100) {
        value += 10;
        $('.progress-bar').css('width',value);
    }
}
