var line="Вписать сюда текст бегущей строки";
var speed=100; 
var i=0;
function ticker() { 
	if(i++<line.length)
    
		{
		document.demo.form.value=line.substring(0,i);
		}else {
			document.demo.form.value=" ";
			i=0;} 
	setTimeout("ticker()",speed);
}
ticker()