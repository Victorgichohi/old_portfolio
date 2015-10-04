  //colapsible header
  $(document).ready(function(){
            $('.collapsible').collapsible();
          });
  //zoom function for the portofolio
  $(document).ready(function(){
  $('.materialboxed').materialbox();
});

//skills js
 google.setOnLoadCallback(drawChart);
      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['skill', 'Strength in percentage'],
          ['HTML',     6],
          ['CSS',      6],
          ['JavaScript',  4],
          ['Photography', 4],
          
        ]);

        var options = {
          title: 'My skills on a percentage scale'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});