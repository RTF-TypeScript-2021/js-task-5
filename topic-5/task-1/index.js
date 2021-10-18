/**
Не пускай джуна в прод.
В функции что он написал, закралась ошибка.
По описанию наших аналитиков, подсчет голубиных крошек на полу должен отрисовываться плавно.
А по итогу.... Лаги, сильный фриз, и только потом, итог исполнения функции.
Кажется, настало твое время, мой друг
*/


function breadcrumbCalculate(setter){
    let counter = 0
    const timer = setInterval(() => {
        if (counter === 1e7) {
            clearInterval(timer);
        } 
        else {
            counter = counter + 1;
            setter(counter);
        }
    });
}

module.exports.breadcrumbCalculate = breadcrumbCalculate;
