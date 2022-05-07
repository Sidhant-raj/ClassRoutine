
// $(function() {
//     $('#carouselExampleDark').carousel(1);
//   });   


// Javascript to change text according to day

function changeIt() {
    
    var date = new Date();
    var dayOfWeek = date.getDay();
    
        switch(dayOfWeek) {
            case 1:
                $('#carouselExampleDark').carousel(0);
            break;
            case 2:
                $('#carouselExampleDark').carousel(1);
            break;
            case 3:
                $('#carouselExampleDark').carousel(2);
            break;
            case 4:
                $('#carouselExampleDark').carousel(3);
            break;
            case 5:
                $('#carouselExampleDark').carousel(4);
            break;
            case 6:
                $('#carouselExampleDark').carousel(5);
            break;
            default:
                $('#carouselExampleDark').carousel(0);
      }
    }
    
      window.onload = function() {
        changeIt();
      };
