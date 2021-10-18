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
const dictMCCName = {
    5411: "продукты",
    5732: "техника",
    5812: "Фаст Фуд",
    5993: "табак",
    5039: "стройматериалы",
    5172: "АЗС",
    5651: "одежда"
}

class Purchase{
    constructor(str){
        const listStrings = str.split(" ").filter(word => word.length > 0);
        this.value = parseInt(listStrings.pop());
        this.code = parseInt(listStrings.pop());
        this.name = listStrings.join(" ");
        this.type = this.code in dictMCCName ? dictMCCName[this.code] : "другое";
    }
}

function resolveBudget(){
    const listPurchases = [];
    for(const s of stringOfPurchases.split(",")){
        listPurchases.push(new Purchase(s));
    }

    return listPurchases;
}

resolveBudget();


module.exports.resolveBudget = resolveBudget;