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

const MCC = {
    5411: 'Продуктовые магазины, супермаркеты',
    5732: 'Магазин электро-товаров',
    5812: 'Рестораны, места общественного питания',
    5993: 'Табачные магазины',
    5039: 'Строительные материалы',
    5172: 'Нефть и нефтепродукты',
    5651: 'Магазины одежды'
}

function resolveBudget(string = stringOfPurchases){
    const pur = string.split(', ');
    const purchaseArray = [];
    pur.forEach(element => {
        const s = element.split(' ');
        const value = s[s.length - 1];
        const code = s[s.length - 2];
        const name = s.slice(0, s.length - 2).join(' ');
        const purchase = new Purchase(name, value, code);
        purchaseArray.push(purchase);
    });

    return purchaseArray;
}

class Purchase{
    constructor(name, value, code) {
        this.name = name;
        this.value = Number(value);
        this.code = Number(code);
        if (!MCC.hasOwnProperty(code)) {
            this.type = "Другое"   
        } else {
            this.type = MCC[this.code];
        }
    }
}

module.exports.resolveBudget = resolveBudget;
