const { stringOfPurchases } = require("./list-items");

/**
    Поход на закупки по выходным - святое дело.
    Денег нет, сколько потратили понятно... А вот на что...
    В вашей директории лежит файлик с моими покупками и кодами МСС.
    Напиши функцию которая вернет массив покупок (Purchase)
    Класс должен иметь поля: code, type, value, name.
    type - наименование группы по МСС, а value сумма затраченная на приобритение данного продукта.

    Как строить класс и как экспортиоровать функцию resolveBudget, дело ваше, полная свобода.
*/

function resolveBudget(string = stringOfPurchases){
    const purchases = string.split(', ')
    const result = []
    for (let i = 0; i < purchases.length; i++) {
        const purchase = purchases[i].split(' ');
        const name = purchase.splice(0, purchase.length - 2).join(' ');
        const code = Number(purchase[purchase.length - 2]);
        const value = parseFloat(purchase[purchase.length - 1]);
        const type = typesArray.get(code);
        result.push(new Purchase(name, code, value, type));
    }

    return result;
}

const typesArray = new Map (
    [[5411, 'Бакалейные магазины, супермаркеты'],
        [5732, 'Продажа электронного оборудования'],
        [5812, 'Места общественного питания, рестораны'], 
        [5993, 'Табачные магазины'],
        [5039, 'Строительные материалы – нигде более не классифицированные'],
        [5172, 'Нефть и нефтепродукты'],
        [5651, 'Одежда для всей семьи']]
);

class Purchase{
    constructor(name, code, value, type) {
        if (typeof name !== 'string' || typeof code !== 'number' || 
        typeof type !== 'string' || typeof value !== 'number') {
            throw Error('Ты чего задумал, шалунишка? Не ломай мне программу!')
        }
        this.name = name;
        this.code = code;
        this.type = type;
        this.value = value;
    }  
}

module.exports.resolveBudget = resolveBudget;