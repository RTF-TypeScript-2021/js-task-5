/**
Не пускай джуна в прод.
В функции что он написал, закралась ошибка.
По описанию наших аналитиков, подсчет голубиных крошек на полу должен отрисовываться плавно.
А по итогу.... Лаги, сильный фриз, и только потом, итог исполнения функции.
Кажется, настало твое время, мой друг
*/

function breadcrumbCalculate(setter){
    let i = 0;
    let timer = setTimeout(function delay() {
        i++
        if (i !== 1e7) {
            setter(i)
            timer = setTimeout(delay, 20)
        } else {
            clearTimeout(timer)
        }
    }, 20)
}

module.exports.breadcrumbCalculate = breadcrumbCalculate;