/**
Не пускай джуна в прод.
В функции что он написал, закралась ошибка.
По описанию наших аналитиков, подсчет голубиных крошек на полу должен отрисовываться плавно.
А по итогу.... Лаги, сильный фриз, и только потом, итог исполнения функции.
Кажется, настало твое время, мой друг
*/


function breadcrumbCalculate(setter){
    let count = 0;
    const timer = setInterval(() => {
        if (count < 1e7){
            setter(count);
            count += 1;
        } else {
            clearInterval(timer);
        }
    });
}

module.exports.breadcrumbCalculate = breadcrumbCalculate;
