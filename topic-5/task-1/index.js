/**
Не пускай джуна в прод.
В функции что он написал, закралась ошибка.
По описанию наших аналитиков, подсчет голубиных крошек на полу должен отрисовываться плавно.
А по итогу.... Лаги, сильный фриз, и только потом, итог исполнения функции.
Кажется, настало твое время, мой друг
*/

let isStart = false;
let timeout;
function breadcrumbCalculate(setter){
    if(isStart){
        // debugger
        clearTimeout(timeout)
        isStart = false
    }
    if (!isStart){
        isStart = true;
        // debugger
        let i = 0;
        let delay = 0;
        timeout = setTimeout(function incriment() {
            i++;
            setter(i);
            delay+=0.2
            timeout = setTimeout(incriment,delay)
            if(i === 1e7){
                setter(0)
                clearTimeout(timeout)
                
            }
        }, delay);
    }
}


module.exports.breadcrumbCalculate = breadcrumbCalculate;
