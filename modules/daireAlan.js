
var arguments = process.argv.slice(2);
//Dairenin alanı = pi x r2

var circleArea = (radius) => {
    var area = Math.PI * radius * 2;
    console.log(`Yarıçapı ${radius} 
    olan dairenin alanı: ${area.toFixed(2)}`)
}

circleArea(arguments[0]*1)

