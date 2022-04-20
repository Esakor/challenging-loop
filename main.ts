/**
 * note for buttne A
 * 
 * 1*2*3*4     index0 1 2 3 4
 * 
 * product = 1 
 * 
 * product(new)=product(old)*2 = 1*2
 * 
 * product(new)=product(old)*3 = 1*2*3
 * 
 * product(new)=product(old)*4 = 1*2*3*4
 * 
 * index = 0 product = 1(product) *(0(index)+1)=1
 * 
 * index = 2 product = product*(index+1)
 * 
 * index = 0 product = product*(index+1)
 * 
 * index = 0 product = product*(index+1)
 */
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 3; index++) {
        product = product * (index + 1)
    }
    basic.showNumber(product)
})
let product = 0
product = 1
