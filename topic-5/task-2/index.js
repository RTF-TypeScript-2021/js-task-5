
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



class Purchase{
    constructor(str) {
        const mystr = str.split(' ');
        const dictionaryCode = {
            5411 : 'Бакалейные магазины, супермаркеты',
            5812 : 'Места общественного питания, рестораны', 
            5732 : 'Продажа электронного оборудования',
            5993 : 'Табачные магазины',
            5039 : 'Строительные материалы – нигде более не классифицированные',
            5172 : 'Нефть и нефтепродукты',
            5651 : 'Одежда для всей семьи'
        }
        this.code = /5\d{3}/g.exec(str);
        this.value = parseFloat(mystr[mystr.length - 1]);
        this.name = mystr.slice(0, mystr.length - 2).join(' ');
        this.type = dictionaryCode[this.code];
    }
}


module.exports.resolveBudget = resolveBudget;
