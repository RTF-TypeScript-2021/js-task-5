"use strict"

function breadcrumbCalculate(setter){
    let i = 0;
    const timer = setInterval(() => {
        i++;
        setter(i)
        if (i === 1e7) {
            clearInterval(timer);
        }
    }, 5)
}

module.exports.breadcrumbCalculate = breadcrumbCalculate;