(function() {

	// Theme switch
	var themeSwitch = document.getElementById('themeSwitch');
	if(themeSwitch) {
		initTheme(); // if user has already selected a specific theme -> apply it
		themeSwitch.addEventListener('change', function(event){
    	resetTheme(); // update color theme
    })

    function initTheme() {
    	var lightThemeSelected = (localStorage.getItem('themeSwitch') !== null && localStorage.getItem('themeSwitch') === 'light');
    	// update checkbox
    	themeSwitch.checked = lightThemeSelected;
		// update body data-theme attribute
		lightThemeSelected ? document.body.setAttribute('data-theme', 'light') : document.body.removeAttribute('data-theme');
    }

    function resetTheme() {
    	if(themeSwitch.checked) { // light theme has been selected
    		document.body.setAttribute('data-theme', 'light');
    		localStorage.setItem('themeSwitch', 'light');
    	} else {
    		document.body.removeAttribute('data-theme');
    		localStorage.removeItem('themeSwitch');
    	} 
	}
	
	}
}())