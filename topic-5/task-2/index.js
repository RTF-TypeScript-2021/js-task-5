import {stringOfPurchases} from "./list-items"
/**
    Поход на закупки по выходным - святое дело.
    Денег нет, сколько потратили понятно... А вот на что...
    В вашей директории лежит файлик с моими покупками и кодами МСС.
    Напиши функцию которая вернет массив покупок (Purchase)
    Класс должен иметь поля: code, type, value, name.
    type - наименование группы по МСС, а value сумма затраченная на приобритение данного продукта.

    Как строить класс и как экспортиоровать функцию resolveBudget, дело ваше, полная свобода.
*/

export function resolveBudget(string = stringOfPurchases){
    return string.split(",").map(str => str.trim()).map(x => new Purchase(x));
}

class Purchase{
    constructor(str) {
        const items = str.split(" ");
        this.value = parseInt(items.pop());
        this.code = parseFloat(items.pop());
        this.name = items.join(" ").trim();
        this.type = this.mccCodes[this.code.toString()];
    }
}
Purchase.prototype.mccCodes = {
    5411: "Супермаркет",
    5732: "Продажа электронного оборудования",
    5812: "Места общественного питания, рестораны",
    5993: "Табачные магазины",
    5039: "Строительные магазины",
    5172: "Нефть",
    5651: "Одежда"
}

