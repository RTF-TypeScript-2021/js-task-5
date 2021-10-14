import stringOfPurchases from "./list-items";

/**
    Поход на закупки по выходным - святое дело.
    Денег нет, сколько потратили понятно... А вот на что...
    В вашей директории лежит файлик с моими покупками и кодами МСС.
    Напиши функцию которая вернет массив покупок (Purchase)
    Класс должен иметь поля: code, type, value, name.
    type - наименование группы по МСС, а value сумма затраченная на приобритение данного продукта.

    Как строить класс и как экспортиоровать функцию resolveBudget, дело ваше, полная свобода.
*/

class MCCStorage {
    getTitleByMCC(mcc) {
        return this.storage[mcc];
    }
}

MCCStorage.prototype.storage = {
    5411: "Продуктовые магазины, супермаркеты",
    5732: "Магазины электро-товаров",
    5812: "Рестораны, места общественного питания",
    5993: "Табачные магазины",
    5039: "Строительные материалы - нигде более не классифицированные",
    5172: "Нефть и нефтепродукты",
    5651: "Семейные магазины одежды",
};

export function resolveBudget() {
    return (
        (str) => str
            .split(",")
            .map((str) => Purchase.fromString(str))
    )(stringOfPurchases.stringOfPurchases);
}

class Purchase {
    static fromString(str) {
        const el = str.replace(/^\s|\s$/, "").split(" ");
        const code = parseInt(el[el.length - 2]);

        return new Purchase(
            code,
            parseInt(el[el.length - 1]),
            el.slice(0, el.length - 2).join()
        );
    }

    constructor(code, value, name, mcc = new MCCStorage()) {
        this.code = code;
        this.type = mcc.getTitleByMCC(code);
        this.value = value;
        this.name = name;
    }
}
