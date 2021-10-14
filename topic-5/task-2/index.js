const shoppingData = require('./list-items.js');
/**
    Поход на закупки по выходным - святое дело.
    Денег нет, сколько потратили понятно... А вот на что...
    В вашей директории лежит файлик с моими покупками и кодами МСС.
    Напиши функцию которая вернет массив покупок (Purchase)
    Класс должен иметь поля: code, type, value, name.
    type - наименование группы по МСС, а value сумма затраченная на приобритение данного продукта.

    Как строить класс и как экспортиоровать функцию resolveBudget, дело ваше, полная свобода.
*/

function resolveBudget(string=shoppingData.stringOfPurchases){
    if (typeof(string) !== 'string'){
        throw new Error('Type error.Incorrect type.')
    }

    const shopList = string.split(',');

    return shopList.map(purchase => {
        const purchaseData = purchase.trim().split(' ');
        if (purchaseData.length < 3){
            throw new Error('Incorrect input string format.');
        }

        const value = parseFloat(purchaseData.pop())
        const code = parseInt(purchaseData.pop())
        const name =  purchaseData.join(' ')

        if (isNaN(code) || isNaN(code) || name.length === 0){
            throw new Error('Incorrect input string format.');
        }

        return new Purchase(name, value, code)
    })
}

function Purchase(name, value, code){
    if (typeof(name) !== 'string' || !Number.isFinite(value) || !Number.isInteger(code)){
        throw new Error('Argument error. Incorrect type.');
    }

    this.name = name;
    this.value = value;
    this.code = code;
    this.type = code in this.MCC ? this.MCC[code]: 'other';

}

Purchase.prototype.MCC = {5411: 'Продуктовые магазины, супермаркеты', 5732:'Магазины электро-товаров',
    5812: 'Рестораны, места общественного питания', 5993: 'Табачные магазины',
    5039: 'Строительные материалы - нигде более не классифицированные',
    5172: 'Нефть и нефтепродукты',  5651: 'Семейные магазины одежды'};

module.exports.resolveBudget = resolveBudget;
