/**
 Поход на закупки по выходным - святое дело.
 Денег нет, сколько потратили понятно... А вот на что...
 В вашей директории лежит файлик с моими покупками и кодами МСС.
 Напиши функцию которая вернет массив покупок (Purchase)
 Класс должен иметь поля: code, type, value, name.
 type - наименование группы по МСС, а value сумма затраченная на приобретение данного продукта.
 
 Как строить класс и как экспортировать функцию resolveBudget, дело ваше, полная свобода.
 */
import { stringOfPurchases } from "./list-items"

export function resolveBudget (string = stringOfPurchases) {
    if (typeof (string) !== 'string') {
        throw new Error("'string' variable has to be a string");
    }
    
    const result = [];
    const items = string.split(',');
    
    for (const i of items) {
        const itemData = i.trim().split(' ');
        if (itemData.length < 3) {
            throw Error(`Wrong item data: ${i}`);
        }
        
        const value = parseFloat(itemData.pop());
        const code = parseInt(itemData.pop());
        const name = itemData.join(' ').trim();
        
        result.push(new Purchase(code, value, name));
    }
    
    return result;
}

class Purchase {
    constructor (code, value, name) {
        if (typeof(code) !== "number" || typeof(value) !== "number" || typeof(name) !== "string") {
            throw Error(`Wrong input parameters: ${code} ${value} ${name}`);
        }
        
        this.code = code;
        this.type = this.MCCCodes[code];
        this.value = value;
        this.name = name;
    }
}

Purchase.prototype.MCCCodes = {
    5411: "Продуктовые магазины, супермаркеты",
    5732: "Магазины электро-товаров",
    5812: "Рестораны, места общественного питания",
    5993: "Табачные магазины",
    5093: "Строительные материалы - нигде более не классифицированные",
    5172: "Нефть и нефтепродукты",
    5651: "Семейные магазины одежды"
};