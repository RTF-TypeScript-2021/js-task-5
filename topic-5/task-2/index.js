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
    if (typeof(string) !== "string") {
        throw new Error("Wrong argumnet!");
    }
    const arr = string.split(',');
    const purchases = [];
    for (let i = 0; i < arr.length; i++) {
        purchases.push(getPurchase(arr[i].trim().split(' ')));      
    }
    
    return purchases;
}

function Purchase(code, value, name){
    if ((typeof(code) !== "number") || (typeof(value) !== "number") || (typeof(name) !== "string")) {
        throw new Error("Wrong argument while creating class Purchase")
    }
    this.code = code;
    this.type = code in this.SHOP? this.SHOP[code]: "Other";;
    this.value = value;
    this.name = name;   
}

Purchase.prototype.SHOP = {
    5411: 'Продуктовые магазины, супермаркеты', 
    5732: 'Продажа электронного оборудования', 
    5812: 'Места общественного питания, рестораны', 
    5993: 'Табачные магазины',
    5039: 'Строительные материалы',
    5172: 'Нефть и нефтепродукты',  
    5651: 'Одежда для всей семьи'
}; 

function getPurchase(purchase) {
    const value = parseFloat(purchase.pop());
    const code = parseInt(purchase.pop());
    const name = purchase.join(' ').trim();
    return new Purchase(code, value, name);
}

module.exports.resolveBudget = resolveBudget;
