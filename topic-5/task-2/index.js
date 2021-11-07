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

function resolveBudget(string) {

    const MCCcodes = {
        5411: "Супермаркет",
        5732: "Продажа электронного оборудования",
        5812: "Места общественного питания, рестораны",
        5993: "Табачные магазины",
        5039: "Строительные магазины",
        5172: "Нефть",
        5651: "Одежда"
    };
}

function resolveBudget(string = stringOfPurchases){
    if (typeof(string) !== "string") {
        throw new Error("Invalid argument");
    }
    const array = string.split(',');
    const purchase =[];
    for (let i = 0; i < array.length; i++) {
        purchase.push(getPurchase(array[i].trim().split(' '))); 
    }
    return purchase;
}

function getPurchase(purchase){
    const value = parseFloat(purchase.pop());
    const code = parseFloat(purchase.pop());
    const name = purchase.join(' ').trim();
    return new Purchase(value, code, name); 
}

class Purchase{
    constructor(value, code, name) {
        if (typeof(code) !== "number" || typeof(value) !== "number" || typeof(name) !== "string") {
            throw new Error("The input data for the purchase of the class is of the wrong type")
        }
        
        this.code = code
        this.type = MCC[code]
        this.value = value
        this.name = name
    }
}

module.exports.resolveBudget = resolveBudget;
