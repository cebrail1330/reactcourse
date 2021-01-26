 const speedValues = [
    {
        dataCode: "KM/s", // post'ta giden
        dataLabel:"KM/s" // drop down'da görünen değer olması gerekiyor ama dropdown'da code: label şeklinde olacak.
    },
    "M/s", "FT/h"
];

const birField = { // Başlık
    designator: "FIELDIN ADI",
    occurrence: "M", // M zorunlu, O opsiyonel, C karışık
    minLength: 3,
    maxLength: 7,
    concept: 'Biraz uzunca cümle ile açıklama',

    subfields: [ // dropdown, subfield'ı seçmek için
        { // input
            name: 'ilk isim',
            pattern: "", // bu da input pattern'i, submit ederken kontrol edip uyarmak için.
            fieldDesc: "KOD", // Bu her zaman bu değer: şeklinde başlayacak, kullanıcı kod ve :'dan arta kalan uzunluğu kullanabilir.
            explanation: "Bu da alt field'ın açıklaması",
            example: "KOD:" //KOD:örnek değer placeholder, deaktif değer
            // bu elemental eleman o yüzden tek bir input field'ı ile tanımlanıyor.
        },

        { //  inputlar
            // Bunda fieldDesc yok.
            name: 'ikinci isim',
            explanation: "Bu da alt field'ın açıklaması",
            example: "100KM/S",
            // composite eleman, yani birden çok input field'ı bu alanı tanımlıyor.
            elements: [
                {
                    name: "speed",
                    dtoName: "", // form submitinde kullanılacak isim.
                    pattern: "", // input text
                }, {
                    name: "unit",
                    dtoName: "",
                    values: speedValues, // drop down
                }
            ]
        }
    ]
}

//  {
//      a:1,b:2,{speed:10,unit:}
//  }

/*render() {
    const definition = birField;
    return (<div>
        {}
    </div>)
}*/
 export default {
     speedValues,
     birField
 }
