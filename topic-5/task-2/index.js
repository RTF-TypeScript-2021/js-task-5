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

const mcc = {
    5411: 'Бакалейные магазины, супермаркеты',
    5732: 'Продажа электронного оборудования',
    5812: 'Места общественного питания, рестораны',
    5993: 'Табачные магазины',
    5039: 'Строительные материалы',
    5172: 'Нефть и нефтепродукты',
    5651: 'Одежда для всей семьи'
}

function resolveBudget(){
    const data = stringOfPurchases.split(', ')
    const purchases = []
    for (const i in data){
        const d = data[i].split(' ')
        purchases.push(new Purchase(d.slice(0, d.length - 1).join(' '), d[d.length - 2], d[d.length - 1]))
    }

    return purchases;
}

class Purchase{
    constructor(name, mccCode, price){
        this.code = Number(mccCode);
        this.type = mcc[mccCode];
        this.value = Number(price);
        this.name = name;
    }

}

module.exports.resolveBudget = resolveBudget;

