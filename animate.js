// $(document).ready(function () {
//     $("#animatebutton").click(function () {
//         $("#buttonDiv").animate({
//             left: '100px',
//             opacity: '0.7',
//             height: '500px',
//             width: '1500px'
//         });
//     });
// });

$(document).ready(function () {
    $("#animatebutton").click(function () {
        var div = $("#buttonMore");
        div.animate({ height: '300px', opacity: '0.4' }, "slow");
        div.animate({ width: '300px', opacity: '0.8' }, "slow");
        div.animate({ height: '100px', opacity: '0.4' }, "slow");
        div.animate({ width: '30%', height: '40px', opacity: '0.8' }, "slow");
    });
});