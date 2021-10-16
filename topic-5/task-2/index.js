/**
    Поход на закупки по выходным - святое дело.
    Денег нет, сколько потратили понятно... А вот на что...
    В вашей директории лежит файлик с моими покупками и кодами МСС.
    Напиши функцию которая вернет массив покупок (Purchase)
    Класс должен иметь поля: code, type, value, name.
    type - наименование группы по МСС, а value сумма затраченная на приобритение данного продукта.

    Как строить класс и как экспортиоровать функцию resolveBudget, дело ваше, полная свобода.
*/
import stringOfPurchases from "./list-items";

class MCCcodes{
    getGroupNameByMCC(mcc){
        return this.codes[mcc];
    }
}

MCCcodes.prototype.codes = {
    5411: 'Продуктовые магазины, супермаркеты',
    5732: 'Магазины электро-товаров',
    5812: 'Рестораны, места общественного питания',
    5993: 'Табачные магазины',
    5093: 'Строительные материалы - нигде более не классифицированные',
    5172: 'Нефть и нефтепродукты',
    5651: 'Семейные магазины одежды',
};

export function resolveBudget(string = stringOfPurchases.stringOfPurchases){
    const purchases = string.split(",").map(el => el.trim());

    return purchases.map(purchase => {
        const purchaseList = purchase.split(" ");
        const value = parseFloat(purchaseList.pop());
        const code = parseInt(purchaseList.pop());
        const type = new MCCcodes().getGroupNameByMCC(code);
        const name = purchaseList.join(" ").trim();

        return new Purchase(name, value, code, type)
    })
}

class Purchase{
    constructor(name, value, code, type) {
        this.value = value;
        this.code = code;
        this.type = type;
        this.name = name;
    }
}


