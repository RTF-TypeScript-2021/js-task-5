/**
Не пускай джуна в прод.
В функции что он написал, закралась ошибка.
По описанию наших аналитиков, подсчет голубиных крошек на полу должен отрисовываться плавно.
А по итогу.... Лаги, сильный фриз, и только потом, итог исполнения функции.
Кажется, настало твое время, мой друг
*/
 
function breadcrumbCalculate(setter){
    let i = 0;
    let myPer = setTimeout(function run() {
        if(i === 1e7) {
            clearTimeout(myPer);
        }
        i++ ;
        setter(i);
        myPer = setTimeout(run, 1);
    }, 1);
}
  

module.exports.breadcrumbCalculate = breadcrumbCalculate;
