/*
 ** NavBar
 */
// Change Color
$(document).on("scroll", function() {
  if ($(document).scrollTop() > 86) {
    $("#banner").addClass("shrink");
  } else {
    $("#banner").removeClass("shrink");
  }
});

// Smooth Scrolling
jQuery(document).ready(function($) {
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
});

/*
 ** Localização
 */

// API key AIzaSyB2V7Q6kwTDBWSIszTwl9g2cb6xUZknXzM
// Initialize and add the map
function initMap() {
  // The location of Paulista 1
  var paulista1 = {
    lat: -23.565580,
    lng: -46.651430
  };
  // The map, centered at Paulista 1
  var map = new google.maps.Map(
    document.getElementById('paulista1'), {
      zoom: 17,
      center: paulista1
    });
  // The marker, positioned at Paulista 1
  var marker = new google.maps.Marker({
    position: paulista1,
    map: map
  });

  // The location of Paulista 2
  var paulista2 = {
    lat: -23.561850,
    lng: -46.645840
  };
  // The map, centered at Paulista 2
  var map = new google.maps.Map(
    document.getElementById('paulista2'), {
      zoom: 17,
      center: paulista2
    });
  // The marker, positioned at Paulista 2
  var marker = new google.maps.Marker({
    position: paulista2,
    map: map
  });

  // The location of Vila Olimpia
  var vilaOlimpia = {
    lat: -23.599940,
    lng: -46.676780
  };
  // The map, centered at Vila Olimpia
  var map = new google.maps.Map(
    document.getElementById('vilaOlimpia'), {
      zoom: 17,
      center: vilaOlimpia
    });
  // The marker, positioned at Vila Olimpia
  var marker = new google.maps.Marker({
    position: vilaOlimpia,
    map: map
  });
}