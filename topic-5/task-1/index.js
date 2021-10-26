/**
Не пускай джуна в прод.
В функции что он написал, закралась ошибка.
По описанию наших аналитиков, подсчет голубиных крошек на полу должен отрисовываться плавно.
А по итогу.... Лаги, сильный фриз, и только потом, итог исполнения функции.
Кажется, настало твое время, мой друг
*/


function breadcrumbCalculate(setter){
    let counter = 0;
   let timer = setInterval(function(){
        counter++;
        setter(counter);
        if (counter > 1e7){
            clearInterval(timer);
        }
   },20)
}

module.exports.breadcrumbCalculate = breadcrumbCalculate;
