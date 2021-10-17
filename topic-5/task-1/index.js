/**
Не пускай джуна в прод.
В функции что он написал, закралась ошибка.
По описанию наших аналитиков, подсчет голубиных крошек на полу должен отрисовываться плавно.
А по итогу.... Лаги, сильный фриз, и только потом, итог исполнения функции.
Кажется, настало твое время, мой друг
*/


function breadcrumbCalculate(setter){   
    let i = 0;
    (function count(){
        for (let c = 0; c < 50; c++) {
            i++;
            if (i >= 1e7) {
                return;
            }
            setter(i);
        }
                
        setTimeout(count);      
    }());
}

module.exports.breadcrumbCalculate = breadcrumbCalculate;
