(function ($) {
    'use strict'

    $('.columns').theiaStickySidebar();

    $('.Unit').easyPieChart({
        size: 110,
        barColor: "#E56035",
        scaleLength: 0,
        lineWidth: 13,
        trackColor: "#FCDDCF",
        lineCap: "circle",
        animate: 2000,
    });
    $('.hours2').easyPieChart({
        size: 110,
        barColor: "#499A9A",
        scaleLength: 0,
        lineWidth: 13,
        trackColor: "#E8F1F1",
        lineCap: "circle",
        animate: 2000,
    });


    var options = {
        animationEnabled: true,
        title: {
            // text: "Daily Progress"
        },
        axisX: {
            valueFormatString: "MMM"
        },
        axisY: {
            // title: "Sales (in USD)",
            prefix: "$",
        },
        data: [{
            yValueFormatString: "$#,###",
            xValueFormatString: "MMMM",
            yValueFormatString: "#0.0" % "",
            type: "spline",
            dataPoints: [{
                    x: new Date(2021, 0),
                    y: 25060
                },
                {
                    x: new Date(2021, 1),
                    y: 27980
                },
                {
                    x: new Date(2021, 2),
                    y: 33800
                },
                {
                    x: new Date(2021, 3),
                    y: 49400
                },
                {
                    x: new Date(2021, 4),
                    y: 40260
                },
                {
                    x: new Date(2021, 5),
                    y: 33900
                },
                {
                    x: new Date(2021, 6),
                    y: 48000
                },
                {
                    x: new Date(2021, 7),
                    y: 31500
                },
                {
                    x: new Date(2021, 8),
                    y: 32300
                },
                {
                    x: new Date(2021, 9),
                    y: 42000
                },
                {
                    x: new Date(2021, 10),
                    y: 52160
                },
                {
                    x: new Date(2021, 11),
                    y: 49400
                }
            ]
        }]
    };
    $("#chartContainer").CanvasJSChart(options);


})(jQuery);