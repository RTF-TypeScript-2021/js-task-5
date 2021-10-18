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

const MMCodes = {
    5411: "Продуктовые магазины, супермаркеты",
    5732: "Магазины электро-товаров",
    5812: "Рестораны, места общественного питания",
    5993: "Табачные магазины",
    5039: "Строительные материалы",
    5172: "Нефть и нефтепродукты",
    5651: "Семейные магазины одежды",
};

export function resolveBudget(str = stringOfPurchases.stringOfPurchases) {
    return str.split(",").map((str) => {
        const parts = str.trim().split(" ");

        return new Purchase(
            parts.slice(0, parts.length - 2).join(),
            parseInt(parts[parts.length - 2]),
            parseFloat(parts[parts.length - 1])
        );
    });
}


class Purchase {
    constructor(name, code, value) {
        this.code = code;
        this.type = MMCodes[code];
        this.value = value;
        this.name = name;
    }
}
