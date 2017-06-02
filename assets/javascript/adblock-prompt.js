if( window.canRunAds === undefined ){
	// adblocker detected, show fallback
	console.log("adblocker detected!");

	var dialog = document.querySelector('dialog');
    var showDialogButton = document.querySelector('#show-dialog');
    dialog.showModal();

    dialog.querySelector('.close').addEventListener('click', function() {
      location.reload();
    });
}