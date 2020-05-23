var css=document.createElement("h3");
	var color1=document.querySelector('.color1');
		var color2=document.querySelector('.color2');
			var body=document.getElementById('gradient');
 
					color1.addEventListener("input", function(){
							star=body.style.background="linear-gradient( to right,"+color1.value+" ,"+color2.value + ")";
       							colorname= document.createTextNode(star);
     							 css.appendChild(colorname);
     						 document.querySelector("#background").appendChild(css);
       					console.log(star);
					}
				);
			color2.addEventListener("input", function(){
		css.style.color="linear-gradient(to right",color1.value+", "+color2.value +")";
	}
);
	