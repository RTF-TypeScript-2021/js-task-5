/**
Не пускай джуна в прод.
В функции что он написал, закралась ошибка.
По описанию наших аналитиков, подсчет голубиных крошек на полу должен отрисовываться плавно.
А по итогу.... Лаги, сильный фриз, и только потом, итог исполнения функции.
Кажется, настало твое время, мой друг
*/


function breadcrumbCalculate(setter){
    let i = 0
    const timer = setInterval(() => {
        if( i === 1e7) {
            clearInterval(timer);
        } 
        else {
            i++;
            setter(i);
        }
    });
}

module.exports.breadcrumbCalculate = breadcrumbCalculate;
