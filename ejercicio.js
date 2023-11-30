'use strict'

function ProductOne(productOne){
    this.productOne=productOne;
}

let chocolate= new ProductOne("Chocolate, 50g, código: 0102, precio: $0.50, stock: 20.");
alert(chocolate.productOne);

function ProductTwo(productTwo){
    this.productTwo=productTwo;
}

let leche= new ProductTwo("Leche, 100ml, código: 0103, precio: $1.00, stock: 15.");
alert(leche.productTwo);

function ProductThree(productThree){
    this.productThree=productThree;
}

let galletas= new ProductThree("Galletas (20 unidades), 100g , código: 0104, precio: $1.50, stock: 30.");
alert(galletas.productThree)

function ProductOne(productOne){
    this.productOne=productOne;
}

