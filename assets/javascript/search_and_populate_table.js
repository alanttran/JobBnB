function jobSearch(myLocation, searchTerm) {
  $.ajax({
      cache: false,
      data: $.extend({
        publisher: '4604260559721605',
        v: '2',
        format: 'json',
        q: searchTerm,
        l: myLocation,
        radius: 25,
        limit: 10,
        sort: 'date',
        highlight: 1,
        filter: 1,
        latlong: 1,
      }, {
        start: 0,
        end: 10
      }),
      dataType: 'jsonp',
      type: 'GET',
      timeout: 5000,
      url: 'http://api.indeed.com/ads/apisearch'
    })
    .done(function(searchTerm) {
      $.each(searchTerm.results, function(i, item) {
          // console.log(item);
          // console.log(item.jobtitle);
          // console.log(item.company);
          // console.log(item.longitude);
          // console.log(item.latitude);
          // console.log(item.url);
          // console.log(item.snippet);
          // console.log(item.date);
          // console.log(item.formattedRelativeTime);
          // console.log(item.expired);
          var templat = parseFloat(item.latitude)
          latitude.push(templat);
          // console.log(latitude);
          var templong = parseFloat(item.longitude)
          long.push(templong);
          // console.log(long)
          var job = {
              jobtitle: item.jobtitle, 
              company: item.company, 
              // latitude: item.latitude, 
              // longitude: item.longitude, 
              url: "<a href="+item.url+" target='_blank'>Visit Job</a>",
              age: item.formattedRelativeTime
          }
          jobs.push(job);
      });
      initMap();
      function makeTable(){
        for (var i = 0; i < jobs.length; i++){
          var row = $("<tr>");
          for(var propt in jobs[i]){
            row.append("<td>"
            + jobs[i][propt] + "</td>")
          }
          console.log('row', row);
          $("tbody").append(row);
          $("td").addClass("mdl-data-table__cell--non-numeric");
        }; 
      };
      makeTable();
    });
}