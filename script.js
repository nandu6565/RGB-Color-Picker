function backgroundColor(){
	var redValue = document.getElementById('red').value; 
	var greenValue = document.getElementById('green').value; 
	var blueValue = document.getElementById('blue').value; 
	const color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

	document.body.style.backgroundColor = color; 

	document.getElementById('box').value = color;
}


 
document.getElementById('red') 
    .addEventListener('input', backgroundColor); 
  
 
document.getElementById('green') 
    .addEventListener('input', backgroundColor); 
  

document.getElementById('blue') 
    .addEventListener('input', backgroundColor); 