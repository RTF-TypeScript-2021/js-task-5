/**
Не пускай джуна в прод.
В функции что он написал, закралась ошибка.
По описанию наших аналитиков, подсчет голубиных крошек на полу должен отрисовываться плавно.
А по итогу.... Лаги, сильный фриз, и только потом, итог исполнения функции.
Кажется, настало твое время, мой друг
*/


function breadcrumbCalculate(setter){
    const delay = 5;
    let num = 0;
    setTimeout(function updateBreadcrumb() {
        num++;
        setter(num);
        setTimeout(updateBreadcrumb, delay);
    }, delay)
}

module.exports.breadcrumbCalculate = breadcrumbCalculate;
