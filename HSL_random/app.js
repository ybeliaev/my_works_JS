
function rand(min, max) {
    return parseInt(Math.random() * (max-min+1), 10) + min;
}
 // или такая функция
function getRandomArbitary(min, max)
{
    return Math.floor((Math.random() * (max - min) + 1) + min);
}

// HSL run
function get_random_color() {
    var h = rand(1, 360); // color hue between 1 and 360
    var s = rand(30, 100); // saturation 30-100%
    var l = rand(30, 70); // lightness 30-70%
    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}

function createDiv(num){

    for (var i =1; i <= num; i++){
        var div = document.createElement("div");
        document.body.appendChild(div);
        div.style.backgroundColor = get_random_color();


    }


}

setInterval(function(){ createDiv(50) }, 1000);

