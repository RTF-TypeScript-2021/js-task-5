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

const mcc = {
    5411: "Бакалейные магазины, супермаркеты",
    5732: "Продажа электронного оборудования",
    5812: "Места общественного питания, рестораны",
    5993: "Табачные магазины",
    5039: "Строительные материалы - нигде более не классифицированные",
    5172: "Нефть и нефтепродукты",
    5651: "Одежда для всей семьи"
}

function resolveBudget(){
    const splitStringOfPurchases = stringOfPurchases.split(', ');
    let sumOfPurchase;
    let codeOfPurchase;
    let typeOfPurchase;
    let nameOfPurchase;
    const arrayOfPurchases = [];

    for (const purchaseIndex in splitStringOfPurchases) {
        // trim() - убирает лишние пробелы, если есть
        const purchase = splitStringOfPurchases[purchaseIndex].trim().split(' ');

        sumOfPurchase = parseFloat(purchase[purchase.length - 1]);
        purchase.pop(); // Убираем сумму из массива покупок

        codeOfPurchase = parseInt(purchase[purchase.length - 1]);
        purchase.pop(); // Убираем mcc-код из массива покупок

        typeOfPurchase = mcc[codeOfPurchase];

        nameOfPurchase = purchase.join(' '); // Оставшееся в массиве - name, нужно только склеить его

        arrayOfPurchases.push(new Purchase(codeOfPurchase, typeOfPurchase, sumOfPurchase, nameOfPurchase));
    }

    return arrayOfPurchases;
}

class Purchase{
    constructor(code, type, value, name) {
        this.code = code;
        this.type = type;
        this.value = value;
        this.name = name;
    }
}

module.exports.resolveBudget = resolveBudget;
