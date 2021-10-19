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

const dictMCC = {};
function resolveBudget(string=stringOfPurchases) {
    if(Object.keys(dictMCC).length===0){
        fetchFromGithub() 
    }

    const purchases = string.split(', ')
    const arrayPurchases = []   
    for (let i = 0; i < purchases.length; i++) {
        const arrayPurchase = purchases[i].trim().split(' ');
        arrayPurchases.push(new Purchase(array.pop(),array.pop(),array.join(' ')))
    }

    return arrayPurchases;
    
}

function fetchFromGithub(){
    const request = new XMLHttpRequest()
    request.open("GET","https://alex-shutov.github.io/MCC.github.io/",false);
    request.send(null)
    addInDictMCC(request.response.replace(/(<\/?t[rd]>)/g,"*").split("*"))

}

function addInDictMCC(splitRes){
    let codeFound = false
    let code = ""
    for (let i = 0; i < splitRes.length; i++) {
        const str = splitRes[i].replace(/^\s*/," ").trimStart()
        if(str !==""){
            if (!isNaN(str)){
                codeFound = true;
                code = str;
                dictMCC[code]="";
            } else if(codeFound){
                codeFound=false;
                dictMCC[code]=str
            }
        }
    }
}

class Purchase {

    constructor(value,code,name){
        this.Value=value;
        this.Code=code;
        this.Name=name;
    }
    set Name(value){
        this.name=value
    }
    set Value(value){
        if(!isNaN(value)){
            this.value = parseFloat(value)
        }else{
            throw new Error(`${value} is not a right instance`)
        }
    }
    set Code(value){
        if(!isNaN(value) && value.length===4){
            this.code=parseInt(value)
            this.type = dictMCC[value];
        }else{
            throw new Error(`${value} is not a right instance`)
        }
    }
}

module.exports.resolveBudget = resolveBudget;
