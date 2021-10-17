/**
    Поход на закупки по выходным - святое дело.
    Денег нет, сколько потратили понятно... А вот на что...
    В вашей директории лежит файлик с моими покупками и кодами МСС.
    Напиши функцию которая вернет массив покупок (Purchase)
    Класс должен иметь поля: code, type, value, name.
    type - наименование группы по МСС, а value сумма затраченная на приобритение данного продукта.

    Как строить класс и как экспортиоровать функцию resolveBudget, дело ваше, полная свобода.
*/

import stringOfPurchases from "./list-items.js";

const MCCcode = {
    5411: "Продукты",
    5732: "Электроника",
    5812: "Рестораны",
    5039: "Стройтельные материалы",
    5172: "Авто",
    5651: "Одежда",
    5993: "Young НикоTin хватит курить, лучше бы девушку нашел"
}

export function resolveBudget(string = stringOfPurchases){
    return stringOfPurchases.split(",").map(x => x.trim()).map(x => x.split(" ")).map(x => {
        let value = parseFloat(x.pop());
        let code = parseInt(x.pop());
        let name = x.join(" ");
        let type = MCCcode[code]
        
        return new Purchase(value, type, code, name)
    })
}

class Purchase{
    constructor(value, type, code, name) {
        this.code = code;
        this.type = type;
        this.value = value;
        this.name = name;
    }
}

module.exports.resolveBudget = resolveBudget;
