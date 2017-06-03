$("#user-search-button").click(function(event) {
        event.preventDefault();
        var zip = $('#user-zip-code').val();
        var search = $('#user-job-title').val();

        jobSearch(zip, search);
    });

// http://api.indeed.com/ads/apisearch?publisher=4604260559721605&v=2&q=java&format=json
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
        url: 'https://cors.now.sh/http://api.indeed.com/ads/apisearch'
    })
    .done(function(searchTerm) {
        $.each(searchTerm.results, function(i, item) {
        	console.log()
            console.log(item);
            console.log(item.jobtitle);
            console.log(item.company);
            console.log(item.longitude);
            console.log(item.latitude);
            console.log(item.url);
            console.log(item.snippet);
            console.log(item.date);
            console.log(item.formattedRelativeTime);
            console.log(item.expired);
            var templat = parseFloat(item.latitude)
            latitude.push(templat);
            console.log(latitude);
            var templong = parseFloat(item.longitude)
            long.push(templong);
            console.log(long)


        });
        initMap();
    });
}