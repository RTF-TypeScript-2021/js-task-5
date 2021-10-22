/**
    Поход на закупки по выходным - святое дело.
    Денег нет, сколько потратили понятно... А вот на что...
    В вашей директории лежит файлик с моими покупками и кодами МСС.
    Напиши функцию которая вернет массив покупок (Purchase)
    Класс должен иметь поля: code, type, value, name.
    type - наименование группы по МСС, а value сумма затраченная на приобритение данного продукта.

    Как строить класс и как экспортиоровать функцию resolveBudget, дело ваше, полная свобода. 
*/
import { stringOfPurchases } from "./list-items";

const CodesTypes = {
    5411: "Продукты",
    5732: "Электроника",
    5812: "Составная еда",
    5993: "Никотиновый глицерин",
    5039: "Строительные материалы",
    5172: "Комплектующие авто",
    5651: "Одежда"
}

function resolveBudget(string){
    if (typeof(string) !== 'string'){
        throw new Error('Не то значение')
    }

    const result = stringOfPurchases.split(', ').map(x => {
                const array = x.split(' ');
                return new Purchase(
                    array.slice(0, array.length - 2).join(' '),
                    array[array.length - 2],
                    array[array.length - 1],
                );
            });

        return result;
}

class Purchase{
    constructor(value, type, code, name) {
        this.code = code;
        this.type = CodesTypes[type];
        this.value = value;
        this.name = name;
    }
}

const _resolveBudget = resolveBudget;
export { _resolveBudget as resolveBudget };
