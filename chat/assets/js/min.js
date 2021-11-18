(function($) {
    'use strict'

    $('.columns').theiaStickySidebar();

    // $('.Unit').easyPieChart({
    //     size: 110,
    //     barColor: "#E56035",
    //     scaleLength: 0,
    //     lineWidth: 13,
    //     trackColor: "#FCDDCF",
    //     lineCap: "circle",
    //     animate: 2000,
    // });
    // $('.hours2').easyPieChart({
    //     size: 110,
    //     barColor: "#499A9A",
    //     scaleLength: 0,
    //     lineWidth: 13,
    //     trackColor: "#E8F1F1",
    //     lineCap: "circle",
    //     animate: 2000,
    // });

    window.onload = function() {
        var options = {
            animationEnabled: true,

            data: [{
                type: "spline",
                color: "#499A9A",
                dataPoints: [
                    { y: 0 },
                    { y: 12 },
                    { y: 30 },
                    { y: 14 },
                    { y: 6 },
                    { y: 24 },
                    { y: 10 }
                ]
            }]
        };
        $("#chartContainer").CanvasJSChart(options);
    }

})(jQuery);