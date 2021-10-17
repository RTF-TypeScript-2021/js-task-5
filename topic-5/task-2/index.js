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

const MCC = {
    5039: 'Строительные материалы - нигде более не классифицированные',
    5172: 'Нефть и нефтепродукты',
    5411: 'Бакалейные магазины, супермаркеты',
    5651: 'Одежда для всей семьи',
    5732: 'Продажа электронного оборудования',
    5812: 'Места общественного питания, рестораны',
    5993: 'Табачные магазины',
};

class Purchase{
    constructor(value, code, name) {
        this.code = code
        this.type = MCC[code]
        this.value = value
        this.name = name
    }
}

export function resolveBudget(string = stringOfPurchases){
    return string.stringOfPurchases.split(',').map(x=>x.trim()).map(x=>x.split(' '))
        .map(x => {
            const value = parseFloat(x.pop());
            const code = parseInt(x.pop());
            const name = x.join(" ");

            return new Purchase(value,code,name)
        })
}