/**
    Поход на закупки по выходным - святое дело.
    Денег нет, сколько потратили понятно... А вот на что...
    В вашей директории лежит файлик с моими покупками и кодами МСС.
    Напиши функцию которая вернет массив покупок (Purchase)
    Класс должен иметь поля: code, type, value, name.
    type - наименование группы по МСС, а value сумма затраченная на приобритение данного продукта.

    Как строить класс и как экспортиоровать функцию resolveBudget, дело ваше, полная свобода.
*/
const { stringOfPurchases } = require("./list-items");

function resolveBudget(string = stringOfPurchases){
    const array = string.split(',');
    const purchases = [];
    for (let i = 0; i < array.length; i++) {
        purchases.push(getPurchase(array[i].trim().split(' ')));      
    }

    return purchases;
}

function Purchase(code, value, name) {
    this.code = code;
    this.type = code in this.MCC ? this.MCC[code] : 'Other';
    this.value = value;
    this.name = name;   
}

function getPurchase(purchase) {
    const value = parseFloat(purchase.pop());
    const code = parseInt(purchase.pop());
    const name = purchase.join(' ').trim();

    return new Purchase(code, value, name);
}

Purchase.prototype.MCC = {
    5411: 'Grocery shops', 
    5732:'Electronics stores', 
    5812: 'Сafeterias', 
    5993: 'Vape shops',
    5039: 'Hardware stores',
    5172: 'Gas station',  
    5651: 'Clothes'
}; 

module.exports.resolveBudget = resolveBudget;