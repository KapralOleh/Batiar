var count1 = 0,
	count2 = 0,
	count3 = 0,
	count4 = 0;
window.onload = function () {

	document.getElementById("firstUl").setAttribute("class","low")
	document.getElementById("firstUl").style.marginLeft = "0px"
}
window.onscroll = function () {
	console.log(scrollY);

if (scrollY >= 100) {
	document.getElementById("menu").setAttribute("class","scrollmenu");
	document.getElementById("logo").style.top = "0px";
	if (document.body.clientWidth < 1400) {
	document.getElementById("menu").style.height = "50px";
	} else {
		document.getElementById("menu").style.height = "70px";
	}
	
} else {
	document.getElementById("menu").setAttribute("class","");
	document.getElementById("logo").style.top = "15px"
	if (document.body.clientWidth < 1400) {
		document.getElementById("menu").style.height = "50px";
		document.getElementById("logo").style.top = "0px";	
	} else {
		document.getElementById("menu").style.height = "100px";
	}
	
};

if(scrollY>=400){
		if (count1 == 0) {
			document.getElementById("img1").setAttribute("class","norm");
			document.getElementById("img2").setAttribute("class","norm1");
			var c = 1
			var x = setInterval(rec,200);
			function rec () {
				document.getElementById("secondUl").style.opacity = c/15;
				c++;
			if(c/15>1){
				clearInterval(x);
				document.getElementById("img1").style.marginLeft = "0px";
				document.getElementById("img2").style.marginLeft = "0px";
			}
		}
			count1++;
		}		
};

if (scrollY >= 1400) {
	if (count2 == 0) {
		document.getElementById("img3").setAttribute("class","norm2");
		document.getElementById("img4").setAttribute("class","norm2");
		var f = 1
		var y = setInterval(ret,200);
		function ret () {
			document.getElementById("thirdUl").style.opacity = f/15;
			f++;
			if(f/15>1){
				clearInterval(z);
				document.getElementById("img3").style.marginTop = "0px";
				document.getElementById("img4").style.marginTop = "0px";
			}
		}
		count2++;
	}
};

if (scrollY >= 2160) {
	if (count3 == 0) {
		document.getElementById("img5").setAttribute("class","norm3");
		document.getElementById("img6").setAttribute("class","norm3");
		var o = 1
		var z = setInterval(rem,200);
		function rem () {
			document.getElementById("fourthUl").style.opacity = o/15;
			o++;
			if(o/15>1){
				clearInterval(z);
			}
		}
		count3++;

	}
};
if (scrollY >= 3300) {
	if (count4 == 0) {
		
		document.getElementById("img7").setAttribute("class","norm4");
		var p = 1,
			j = 1;
		var v = setInterval(reh,200);
		function reh () {
			document.getElementById("fiveUl").style.opacity = p/15;
			document.getElementById("sixUl").style.opacity = j/15;
			
			p++;
			j++;
			if(p/15>1){
				clearInterval(v);
			}
		}
		count4++;

	}
};

if (document.body.clientWidth < 1400) {
	if (scrollY < 500) {
		document.getElementById("a1").style.color = "red";
		document.getElementById("a1").style.fontSize = "22px";
		document.getElementById("a2").style.color = "white";
		document.getElementById("a2").style.fontSize = "18px";
	} else {
		if (scrollY < 1000) {
			document.getElementById("a2").style.color = "red";
			document.getElementById("a2").style.fontSize = "22px";
			document.getElementById("a1").style.color = "white";
			document.getElementById("a3").style.color = "white";
			document.getElementById("a1").style.fontSize = "18px";
			document.getElementById("a3").style.fontSize = "18px";
		} else {
			 if (scrollY < 1500) {
				document.getElementById("a3").style.color = "red";
				document.getElementById("a3").style.fontSize = "22px";
				document.getElementById("a2").style.color = "white";
				document.getElementById("a4").style.color = "white";
				document.getElementById("a2").style.fontSize = "18px";
				document.getElementById("a4").style.fontSize = "18px";
			} else {
				if (scrollY < 2000) {
					document.getElementById("a4").style.color = "red";
					document.getElementById("a4").style.fontSize = "22px";
					document.getElementById("a3").style.color = "white";
					document.getElementById("a5").style.color = "white";
					document.getElementById("a3").style.fontSize = "18px";
					document.getElementById("a5").style.fontSize = "18px";
				} else {
					if (scrollY < 2500) {
						document.getElementById("a5").style.color = "red";
						document.getElementById("a5").style.fontSize = "22px";
						document.getElementById("a4").style.color = "white";
						document.getElementById("a6").style.color = "white";
						document.getElementById("a4").style.fontSize = "18px";
						document.getElementById("a6").style.fontSize = "18px";
					}
					else {
						document.getElementById("a6").style.color = "red";
						document.getElementById("a6").style.fontSize = "22px";
						document.getElementById("a5").style.color = "white";
						document.getElementById("a5").style.fontSize = "18px";
					}
				}
			}
		}
	
}
} else {
	if (scrollY < 1000) {
		document.getElementById("a1").style.color = "red";
		document.getElementById("a1").style.fontSize = "24px";
		document.getElementById("a2").style.color = "white";
		document.getElementById("a2").style.fontSize = "20px";
	} else {
		if (scrollY < 2000) {
			document.getElementById("a2").style.color = "red";
			document.getElementById("a2").style.fontSize = "24px";
			document.getElementById("a1").style.color = "white";
			document.getElementById("a3").style.color = "white";
			document.getElementById("a1").style.fontSize = "20px";
			document.getElementById("a3").style.fontSize = "20px";
		} else {
			 if (scrollY < 3000) {
				document.getElementById("a3").style.color = "red";
				document.getElementById("a3").style.fontSize = "24px";
				document.getElementById("a2").style.color = "white";
				document.getElementById("a4").style.color = "white";
				document.getElementById("a2").style.fontSize = "20px";
				document.getElementById("a4").style.fontSize = "20px";
			} else {
				if (scrollY < 4000) {
					document.getElementById("a4").style.color = "red";
					document.getElementById("a4").style.fontSize = "24px";
					document.getElementById("a3").style.color = "white";
					document.getElementById("a5").style.color = "white";
					document.getElementById("a3").style.fontSize = "20px";
					document.getElementById("a5").style.fontSize = "20px";
				} else {
					if (scrollY < 5000) {
						document.getElementById("a5").style.color = "red";
						document.getElementById("a5").style.fontSize = "24px";
						document.getElementById("a4").style.color = "white";
						document.getElementById("a6").style.color = "white";
						document.getElementById("a4").style.fontSize = "20px";
						document.getElementById("a6").style.fontSize = "20px";
					}
					else {
						document.getElementById("a6").style.color = "red";
						document.getElementById("a6").style.fontSize = "24px";
						document.getElementById("a5").style.color = "white";
						document.getElementById("a5").style.fontSize = "20px";
					}
				}
			}
		}
	
}
}








}
