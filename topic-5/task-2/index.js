/**
    Поход на закупки по выходным - святое дело.
    Денег нет, сколько потратили понятно... А вот на что...
    В вашей директории лежит файлик с моими покупками и кодами МСС.
    Напиши функцию которая вернет массив покупок (Purchase)
    Класс должен иметь поля: code, type, value, name.
    type - наименование группы по МСС, а value сумма затраченная на приобритение данного продукта.

    Как строить класс и как экспортиоровать функцию resolveBudget, дело ваше, полная свобода.
*/
const stringOfPurchases = require("./list-items");
function resolveBudget(string){
    const listPurchases = [];
    for(const s of stringOfPurchases.split(",")){
        listPurchases.push(new Purchase(s));
    }

    return listPurchases;
}

const typesArray = {
        5411: 'MAGNIT',
        5732: 'DNS',
        5812: 'STARBUCKS', 
        5993: 'BAR',
        5039: 'LEROY MERLIN',
        5172: 'Lukoil',
        5651: 'ADIDAS'
};

class Purchase{
    constructor(name, code, value, type) {
        if (typeof name !== 'string' || typeof code !== 'number' || 
        typeof type !== 'string' || typeof value !== 'number') {
            throw UserException("Invalid data")
        }
        this.name = name;
        this.code = code;
        this.type = type;
        this.value = value;
    }  
}

module.exports.resolveBudget = resolveBudget;
