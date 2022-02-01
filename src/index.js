$(document).ready(function () {
  $("#fullpage").fullpage({
    //options here
    autoScrolling: true,
    // sectionsColor: ["#FFF89A", "#84DFFF", "#73ff5e", "#f3845f"],
    navigation: true,
    navigationPosition: "right",
    scrollingSpeed: 800,
    anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage"],
    menu: "#menu",
    slidesNavigation: true,
    controlArrows: true,
    scrolloverflow: true,
    afterLoad: function (section, origin, destination, direction) {
      let leavinSec = $(this)[0];
      let sec = $(leavinSec)[0].item;
      let content = $(sec).children()[0];    
          $(content).css({
              transform: "translateY(0)",
              opacity: "1",
            });
    },
    onLeave: function (section, origin, destination, direction) {
      let leavinSec = $(this)[0];
      let sec = $(leavinSec)[0].item;
      let content = $(sec).children()[0];
      $(content).css({
        transform: "translateY(-50%)",
        opacity: "0",
      });
    },
  });
$('.moveSecbtn.down').click(function(){
    fullpage_api.moveSectionDown();
})

$('.moveSecbtn.up').click(function(){
    fullpage_api.moveSectionUp();
})
  //methods
  $.fn.fullpage.setAllowScrolling(true);
});
