"use strict"

const { stringOfPurchases } = require("./list-items");

/**
 * @param {String} string 
 */
function* resolveBudget(string = stringOfPurchases) {
    const orders = string
        .split(",")
        .map(order => order.trim().split(' '));
    for(const order of orders) {
        const value = parseFloat(order.pop());
        const mcc = parseInt(order.pop());
        const name = order.join(" ");

        yield new Purchase(mcc, MCC.prototype.keywords[mcc], value, name);
    }
}

class Purchase {
    constructor(code, type, value, name) {
        this.code = code;
        this.type = type;
        this.value = value;
        this.name = name;
    }
}

class MCC {
    //static keycodes = {...} <- eslint блокирует?
}

MCC.prototype.keywords = {
    5411: "Продуктовые магазины, супермаркеты",
    5732: "Магазины электро-товаров",
    5812: "Рестораны, места общественного питания",
    5993: "Табачные магазины",
    5039: "Строительные материалы",
    5172: "Нефть и нефтепродукты",
    5651: "Семейные магазины одежды"
}

module.exports.resolveBudget = resolveBudget;