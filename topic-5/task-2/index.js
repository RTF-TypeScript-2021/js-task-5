const {stringOfPurchases} = require("./list-items");

/**
 Поход на закупки по выходным - святое дело.
 Денег нет, сколько потратили понятно... А вот на что...
 В вашей директории лежит файлик с моими покупками и кодами МСС.
 Напиши функцию которая вернет массив покупок (Purchase)
 Класс должен иметь поля: code, type, value, name.
 type - наименование группы по МСС, а value сумма затраченная на приобритение данного продукта.

 Как строить класс и как экспортиоровать функцию resolveBudget, дело ваше, полная свобода.
 */

function resolveBudget(string = stringOfPurchases) {
    const purchases = [];

    string
        .split(',')
        .map(x => x
            .split(" ")
            .filter(x => x !== ""))
        .forEach(item => {
            const name = item.slice(0, -2).join(" ");
            const code = parseInt(item[item.length - 2]);
            const value = parseFloat(item[item.length - 1]);

            purchases.push(new Purchase(name, code, value));
        });

    return purchases;
}

const MCC = {
    5411: "Продуктовые магазины",
    5732: "Магазины электроники",
    5812: "Рестораны",
    5993: "Табачные магазины",
    5039: "Строительные магазины",
    5172: "АЗС",
    5651: "Магазины одежды и обуви"
};

class Purchase {
    constructor(name, code, value) {
        if (typeof name !== "string" ||
            typeof code !== "number" || !(code in MCC) ||
            typeof value !== "number") {
            throw Error();
        }

        this.name = name;
        this.code = code;
        this.value = value;
        this.type = MCC[code];
    }
}

module.exports.resolveBudget = resolveBudget;
