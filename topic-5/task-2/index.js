/**
 Поход на закупки по выходным - святое дело.
 Денег нет, сколько потратили понятно... А вот на что...
 В вашей директории лежит файлик с моими покупками и кодами МСС.
 Напиши функцию которая вернет массив покупок (Purchase)
 Класс должен иметь поля: code, type, value, name.
 type - наименование группы по МСС, а value сумма затраченная на приобритение данного продукта.

 Как строить класс и как экспортиоровать функцию resolveBudget, дело ваше, полная свобода.
 */

const {mccCodes} = require("./mcc_codes");
const {stringOfPurchases} = require("./list-items");

function resolveBudget(string = stringOfPurchases){
    const clearList = string.split(",").map(purchase => purchase.trim());
    const purchases = [];
    clearList.map(item => {
        const raw = item.split(" ")
        const value = parseFloat(raw.pop());
        const code = raw.pop();
        const type = getMCC(code).edited_description;
        const name = raw.join(" ").trim();
        purchases.push(new Purchase(code, type, value, name));
    })

    return purchases;
}

function getMCC(mcc) {
    return mccCodes.find(categoryCode => {
        return categoryCode.mcc === mcc;
    })
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