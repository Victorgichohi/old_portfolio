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