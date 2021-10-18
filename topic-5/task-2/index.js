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

const MCC = {
    5039: 'Строительные магазины',
    5172: 'Нефть(что-то на богатом)',
    5411: 'Супермаркеты',
    5651: 'Одежда',
    5732: 'Электронное оборудование',
    5812: 'Рестораны и кафе',
    5993: 'Паробар',
};

function resolveBudget(string = stringOfPurchases){
    if (typeof(string) !== "string") {
        throw new Error("Тут что-то не так");
    }
    const arrayOfAll = string.split(',');
    const purchase =[];
    for (let i = 0; i < arrayOfAll.length; i++) {
        purchase.push(getPurchase(arrayOfAll[i].trim().split(' '))); 
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
            throw new Error("Видимо покупки совершались не так как надо, проверь выходные данные при создании массива")
        }
        this.code = code
        this.type = MCC[code]
        this.value = value
        this.name = name
    }
}


module.exports.resolveBudget = resolveBudget;
