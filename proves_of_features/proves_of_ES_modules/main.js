

class Shop {

    constructor(sellInventory, moneyReserves, listOfProducts, weeklyDemand){

        this.sellInventory = sellInventory;
        this.moneyReserves = moneyReserves;
        this.listOfProducts = listOfProducts;
        this.weeklyDemand = weeklyDemand

    }

    //*Here we set the weekly demand of products:
    setWeeklyDemand(newWeeklyDemand){

        this.weeklyDemand = Number(newWeeklyDemand);

    }

    //*You specify your amount of products and you fill the list of products:
    getProductsForInventory(amountOfProducts){

        this.listOfProducts = [amountOfProducts]

        for (let i = 0; i < this.listOfProducts.length; i++) {

            this.listOfProducts[i] = new Icecream();

        }

        //*We explain to user that don't support the daily demand of icecream
        if(amountOfProducts < this.weeklyDemand){

            console.warn('We need to buy more products for our demand of icecreams');

        }

    }

    fillSellInventory(){

        

    }

}

class Icecream {

    constructor(taste, price, name, amountOfballs){

        this.taste = taste,
        this.price = price,
        this.name = name,
        this.amountOfballs = amountOfballs

    }


    defTasteOfIcecream(newTaste){

        this.taste = String(newTaste);

    }


    defNameOfIcecream(){

        this.name = `Icecream of ${this.taste}`;

    }


    priceOfIcecream(icecreamPrice){

        this.price = Number(icecreamPrice);

    }


    defTotalPriceOfIcecream(newIcecreamBall){

        this.amountOfballs = Number(newIcecreamBall);

        this.price = Number(this.price * this.amountOfballs);

    }

}


class User{

    constructor(id, completeName, age){



    }

}


let chocolateIcecream = new Icecream();

chocolateIcecream.defTasteOfIcecream('chocolate');
chocolateIcecream.defNameOfIcecream();
chocolateIcecream.priceOfIcecream(12);
chocolateIcecream.defTotalPriceOfIcecream(2);

console.log(chocolateIcecream);