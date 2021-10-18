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

const MCCcodes = {
    5411: 'Бакалейные магазины, супермаркеты',
    5732: 'Продажа электронного оборудования',
    5812: 'Места общественного питания, рестораны',
    5993: 'Табачные магазины',
    5093: 'Хозяйственные магазины',
    5172: 'Нефть и нефтепродукты',
    5651: 'Одежда для всей семьи'
};

export function resolveBudget (string = stringOfPurchases.stringOfPurchases) {
    const purchases = string.split(",");
    const resultPurchases = [];
    purchases.forEach(item => {
        const purchase = item.split(" ");
        resultPurchases.push(new Purchase(
            item[0],
            parseFloat(purchase.pop()),
            parseInt(purchase.pop()))
        );
    });

    return resultPurchases;
}

class Purchase {
    constructor(name, value, code) {
        if (typeof(name) !== "string" && !Number.isNaN(value) && !Number.isInteger(code) && code.length !== 4) {
            throw new Error("The input data for class Purchase has wrong type");
        }

        this.name = name;
        this.value = value;
        this.code = code;
        this.type = MCCcodes[code];
    }
}
