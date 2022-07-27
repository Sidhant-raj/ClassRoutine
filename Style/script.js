// Example to use the carousel
// $(function() {
//     $('#carouselExampleDark').carousel(1);
//   });

// Javascript to change text according to day
//
function changeIt() {
  var date = new Date();
  var dayOfWeek = date.getDay();
  // var dayOfWeek = 2;
  // console.log(dayOfWeek);
  switch (dayOfWeek) {
    case 1:
      $("#carouselExampleDark").carousel(0); // Monday
      break;
    case 2:
      $("#carouselExampleDark").carousel(1); // Tuesday
      break;
    case 3:
      $("#carouselExampleDark").carousel(2); // Wednesday
      break;
    case 4:
      $("#carouselExampleDark").carousel(3); // Thrusday
      break;
    case 5:
      $("#carouselExampleDark").carousel(4); // Friday
      break;
    // case 6:
    //     $('#carouselExampleDark').carousel(5); // Saturday
    // break;
    default:
      $("#carouselExampleDark").carousel(0);
  }
}

window.onload = function () {
  changeIt();
};
