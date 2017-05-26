var queryURL = "https://api.indeed.com/ads/apisearch?publisher=4604260559721605&q=" +
    searchTerm + "&l" + zip + "&format=json&v=2"

  // Performing our AJAX GET request
  $.ajax({
      url: queryURL,
      method: "GET"
    })



 // required in html:
	// in <head>
		// 	<script type="text/javascript"
		// src="https://gdc.indeed.com/ads/apiresults.js"></script>
  	// in <body>                                  
  		// <span id="indeed_at"><a title="Job Search" href="https://www.indeed.com" rel="nofollow" >jobs by <img alt=Indeed src="https://www.indeed.com/p/jobsearch.gif" style="border: 0; vertical-align: middle;"></a></span>