document.getElementsByClassName('tablinks')[0].click()


function toggle_tabs (event, tab_name) {
	var i, tabcontent, tablinks; 

	// get all tabcontent elements 
	tabcontent = document.getElementsByClassName("tabcontent"); 
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none"; 
	}

	// get all tablinks elements 
	tablinks = document.getElementsByClassName("tablinks"); 
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", ""); 
	}

	//show current tab and add active to class 
	document.getElementById(tab_name).style.display = "block"; 
	event.currentTarget.className += " active"; 


}



