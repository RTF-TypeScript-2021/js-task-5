/**
Не пускай джуна в прод.
В функции что он написал, закралась ошибка.
По описанию наших аналитиков, подсчет голубиных крошек на полу должен отрисовываться плавно.
А по итогу.... Лаги, сильный фриз, и только потом, итог исполнения функции.
Кажется, настало твое время, мой друг
*/


function breadcrumbCalculate(setter){
    function RIPRam(i) {
        setter(i);
    }
    let s=0;
    setInterval(() => {
        RIPRam(s);
        s++;
        if (s > 1e7) {
            clearTimeout();
        }
    }, 5);
}

module.exports.breadcrumbCalculate = breadcrumbCalculate;
