/*
    Поход на закупки по выходным - святое дело.
    Денег нет, сколько потратили понятно... А вот на что...
    В вашей директории лежит файлик с моими покупками и кодами МСС.
    Напиши функцию которая вернет массив покупок (Purchase)
    Класс должен иметь поля: code, type, value, name.
    type - наименование группы по МСС, а value сумма затраченная на приобритение данного продукта.

    Как строить класс и как экспортиоровать функцию resolveBudget, дело ваше, полная свобода.
*/

const { stringOfPurchases } = require("./list-items");

function resolveBudget(str = stringOfPurchases){
    const myArr = str.split(', ');
    const purchasesArr = [];
    for(let i = 0; i < myArr.length; i++) {
        const purchase = new Purchase(myArr[i]);
        purchasesArr.push(purchase);
    }

    return purchasesArr;
}

function myType(code){
    if(code === 5411) {
        return 'Бакалейные магазины, супермаркеты';
    }
    if(code === 5812) {
        return 'Места общественного питания, рестораны';
    }
    if(code === 5732) {
        return 'Продажа электронного оборудования';
    }
    if(code === 5993) {
        return 'Табачные магазины';
    }
    if(code === 5039) {
        return 'Строительные материалы – нигде более не классифицированные';
    }
    if(code === 5172) {
        return 'Нефть и нефтепродукты';
    }
    if(code === 5651) {
        return 'Одежда для всей семьи';
    }
}

class Purchase{
    constructor(str) {
        const mystr = str.split(' ');
        this.code = Number(mystr[mystr.length - 2]);
        this.value = parseFloat(mystr[mystr.length - 1]);
        this.name = mystr.slice(0, mystr.length - 2).join(' ');
        this.type = myType(this.code);
    }
}


module.exports.resolveBudget = resolveBudget;
