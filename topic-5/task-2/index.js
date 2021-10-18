/**
    Поход на закупки по выходным - святое дело.
    Денег нет, сколько потратили понятно... А вот на что...
    В вашей директории лежит файлик с моими покупками и кодами МСС.
    Напиши функцию которая вернет массив покупок (Purchase)
    Класс должен иметь поля: code, type, value, name.
    type - наименование группы по МСС, а value сумма затраченная на приобритение данного продукта.

    Как строить класс и как экспортиоровать функцию resolveBudget, дело ваше, полная свобода.
*/
const {stringOfPurchases} = require("./list-items");

function resolveBudget(string){
    const result = stringOfPurchases
        .split(', ')
        .map(x => {
            const array = x.split(' ');

            return new Purchase(
                array.slice(0, array.length - 2).join(' '),
                array[array.length - 2],
                array[array.length - 1]
            );
        });

    return result;
}

const PurchaseTypes = {
    5411: "Food",
    5732: "Electronics",
    5812: "Food",
    5651: "Clothes"
}

class Purchase{
    constructor(name, code, value) {
        this.name = name;
        this.code = Number(code);
        this.value = Number(value);
        this.type = code in PurchaseTypes
            ? PurchaseTypes[code]
            : "Other";
    }
}

module.exports.resolveBudget = resolveBudget;
