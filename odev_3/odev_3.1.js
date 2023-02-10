//Dairenin alanını ve çevresini hesaplayan bir fonksiyonu export et.
//Fonksiyonları farklı bir dosyada çağır ve kullan.
//Daire alanı: pi * r2
//Daire çevresi: 2*r*pi

function circleArea(r) {
    let area = Math.PI*Math.pow(r,2);
    return area;
}

function circleCircumference(r){
    let circumference = Math.PI*2*r;
    return circumference;
}

module.exports = {circleArea,circleCircumference};
