function phoneNumberValidation(number) {

    const inputNumber = number.toString(); //Burada input olarak gelen telefon numarasini stringe cevirdik ve her karaktere islem yapmaya basladik.

    const numberMatch = inputNumber.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im); //Numara eslestirmeleri yapildi ve validasyona baslandi.

    if(!inputNumber) { // Eger telefon numarasi alinamadiysa fonksiyon false dondurur.
        return false;
    }

    else if(!numberMatch) { //Eger numaralar eslesmediyse false dondurur.
        return false;
    }
    else { // Yukaridaki caselerin hicbirine girmediyse validasyon yapilmistir ve true dondurulur.
        return true;
    }

}

module.export = phoneNumberValidation