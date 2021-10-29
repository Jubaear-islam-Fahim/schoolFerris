$(document).ready(function () {
    $('.columns').theiaStickySidebar();
});

$(document).ready(function () {
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
});

