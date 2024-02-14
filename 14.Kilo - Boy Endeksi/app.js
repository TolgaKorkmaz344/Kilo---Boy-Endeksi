// KİLO BOY ENDEKSİ

let kilo = Number(prompt("Kilonuzu Giriniz: "));
let boy = Number(prompt("Boyunuzu Giriniz: "));

let sonuc = kilo/(boy*2);

if(sonuc<18.5) {

    alert("İdeal Kilonun Altında " + sonuc);

} else if (sonuc>=18.5 && sonuc<=24.9) {
    
    alert("İdeal Kiloda " + sonuc);

} else if (sonuc>=25 && sonuc<=29.9) {

    alert("İdeal Kilonun Üstünde " + sonuc);

} else if (sonuc>=30 && sonuc<=39.9) {

    alert("Obez " + sonuc);

} else if (sonuc>=40) {

    alert("Morbid obez " + sonuc);
}


