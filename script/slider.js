var form = document.forms.f1;
	var pictures = ["img/slid/1.jpg","img/slid/2.jpg","img/slid/3.jpg","img/slid/4.jpg","img/slid/5.jpg"];
	var slide = document.getElementById('slide');
	var i=0;
	document.getElementById("left").onclick = function () {		
		if (i == 0){
			i = pictures.length;
		}
		i--;
		slide.src = pictures[i];
		for (var l = 0;l<form.length; l++){
			form.elements[i].checked = true;
		}
	}

	document.getElementById("right").onclick = function () {
		i++;
		if (i == pictures.length){
			i = 0;
		}		
		slide.src = pictures[i];
		for (var l = 0;l<form.length; l++){
			form.elements[i].checked = true;
		}				
	};

	(function () {
		stop = setInterval(function () {
						i++;
						if (i == pictures.length){
							i = 0;
						}		
						slide.src = pictures[i];
						for (var l = 0;l<form.length; l++){
							form.elements[i].checked = true;
						}				
		},2500);
	})();


	form.onclick = function () {
		for (var l = 0;l<form.length; l++){
			if (form.elements[l].checked) {
				var i = -1;
				slide.src = pictures[l];
				clearInterval(stop);
				setInterval(function () {

						i++;
						if (i == pictures.length){
							i = 0;
						}		
						slide.src = pictures[i];
						for (var l = 0;l<form.length; l++){
							form.elements[i].checked = true;
						}				
		},2500);
			}
			
		}
	} 

	for (var n = 0 ; n< form.length; n++){
		form.elements[n].onmouseover = function () {
		document.getElementById("mini").style.display = "block";
		document.getElementById("mini").src = pictures[this.value-1] 
		}	
	 
		
		
	}
	for (var n = 0 ; n< form.length; n++){
		form.elements[n].onmouseout = function () {
		document.getElementById("mini").style.display = "none";
		document.getElementById("mini").src = "";
		}	
	 
		
		
	}