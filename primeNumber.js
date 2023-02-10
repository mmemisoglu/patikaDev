//1e ve kendisine bölünecek, 
//1 den büyük pozitif tamsayı olacak
var arguments = process.argv.slice(2)
var showPrimeNumbers = (lowNumber,highNumber) => {
    for(let i = lowNumber; i <= highNumber; i ++){
        let isPrime = true;
        for(let j = 2; j <= i; j++){
            if(i%j === 0 && j !== i){
                isPrime = false
            }
        }
        if(isPrime){
            console.log(i)
        }
    }
}
//process.argv dizi içerisinde string bir 
//değer döndürür. 
//Çarpmanın etkisiz elemanı 1 ile çarparız.
//number() fonksiyonuda kullanılabilirdi.
//fakat bu daha pratik
//Node.js otomatik olarak değişkenini number yapar.
showPrimeNumbers(arguments[0]*1,arguments[1]*1)
