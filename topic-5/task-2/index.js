/**
    Поход на закупки по выходным - святое дело.
    Денег нет, сколько потратили понятно... А вот на что...
    В вашей директории лежит файлик с моими покупками и кодами МСС.
    Напиши функцию которая вернет массив покупок (Purchase)
    Класс должен иметь поля: code, type, value, name.
    type - наименование группы по МСС, а value сумма затраченная на приобритение данного продукта.

    Как строить класс и как экспортиоровать функцию resolveBudget, дело ваше, полная свобода.
*/

import listItems from "./list-items"

export function resolveBudget(string=listItems.stringOfPurchases){
    const arrBudget = string.split(",");
    let value, name, code, tmpArr;
    const result = [];
    for (const str of arrBudget){
        tmpArr = str.trim().split(" ");
        value = tmpArr.splice(-1)[0];
        code = tmpArr.splice(-1)[0];
        name = tmpArr.join(" ");
        result.push(new Purchase(code, value, name));
    }

    return result;
}

class Purchase{
    constructor(code, value, name) {
        console.log(code, value, name)
        if (Purchase.MCCcodes[code] === undefined) {
            throw new Error (`not valid MCC code: ${code}`);
        }
        if (typeof name !== "string") {
            throw new Error ("type error, name is not string");
        }
        if (isNaN(Number(value))) {
            throw new Error ("type error, value is a number or containt chars");
        }
        this.code = Number(code);
        this.type = Purchase.MCCcodes[code];
        this.value = Number(value);
        this.name = name;
    }
}

Purchase.MCCcodes = {
    5993 : "Табачные магазины",
    5411 : "Баколейные магазины, супермаркеты",
    5732 : "Продажа электронного оборудования",
    5812 : "Места общественного питания, рестораны",
    5651 : "Одежда для всей семьи",
    5039 : "Строительные материалы - нигде более не классифицированные",
    5172 : "Нефть и нефтепродукты",
}