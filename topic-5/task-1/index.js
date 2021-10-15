/**
Не пускай джуна в прод.
В функции что он написал, закралась ошибка.
По описанию наших аналитиков, подсчет голубиных крошек на полу должен отрисовываться плавно.
А по итогу.... Лаги, сильный фриз, и только потом, итог исполнения функции.
Кажется, настало твое время, мой друг
*/


function breadcrumbCalculate(setter){

    let i = 0;
    function setterInvoker(){
        do {
            i+=1;
            setter(i);
        } while (i % 1e4 !== 0);

        if (i < 1e7) {
            setTimeout(setterInvoker);
        }
    }
    setterInvoker()
}

module.exports.breadcrumbCalculate = breadcrumbCalculate;
