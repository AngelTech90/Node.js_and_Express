
//*Here is our biggest object were we use to define our business logic:
class Shop {

    constructor(sellInventory, moneyReserves, listOfProducts, weeklyDemand, dailySellInventory){

        this.sellInventory = sellInventory;
        this.moneyReserves = moneyReserves;
        this.listOfProducts = listOfProducts;
        this.weeklyDemand = weeklyDemand;
        this.dailySellInventory = dailySellInventory

    }

    //*Here we set the weekly demand of products:
    setWeeklyDemand(newWeeklyDemand){

        this.weeklyDemand = Number(newWeeklyDemand);

    }

    //*You specify your amount of products and you fill the list of products:
    getProductsForInventory(amountOfProducts){

        this.listOfProducts = [amountOfProducts];

        for (let i = 0; i < this.listOfProducts.length; i++) {

            this.listOfProducts[i] = new Icecream();

        }

        //*We explain to user that don't support the daily demand of icecream
        if(amountOfProducts < this.weeklyDemand){

            console.warn('We need to buy more products for our demand of icecreams');

        }

    }


    //*In our shop our sell inventory works by a daily inventory:
    fillSellInventory(){

        this.dailySellInventory = [Math.round(this.listOfProducts.length / 7)];

    }

}


//*This class contains all the properties for create and manipulate our products information:
class Icecream {

    constructor(taste, price, name, amountOfballs){

        this.taste = taste,
        this.price = price,
        this.name = name,
        this.amountOfballs = amountOfballs

    }


    //*Here we define what is our taste string value:
    defTasteOfIcecream(newTaste = ' '){

        this.taste = String(newTaste);

    }


    //*Here we define the name of our icecream using our defined taste
    defNameOfIcecream(){

        this.name = String(`Icecream of ${this.taste}`);

    }


    //*Here we difine the price of selected icecream:
    priceOfIcecream(icecreamPrice = 0){

        this.price = Number(icecreamPrice);

    }


    //*Here we set the total price depending of the amount of balls of icecream
    defTotalPriceOfIcecream(newIcecreamBall = 0){

        this.amountOfballs = Number(newIcecreamBall);

        this.price = Number(this.price * this.amountOfballs);

    }

}


//*Here we define our user an their important properties for our shop:
class User{

    constructor(id, completeName, age){

        this.id = id;
        this.completeName = completeName;
        this.age = age

    }
    
    //*We generate a random Id with random numbers in range of 1 to 1000;
    createId(){

        this.id = Math.random(1,1000);

    }


    //*With this function we use the parameters that we need to compound the complete name of our user:
    defCompleteName(firstName = ' ', lastName = ' ', secondName = ' ', secondLastName = ' ' ){

        this.completeName = String(`${firstName}${lastName}${secondName}${secondLastName}`);

    }

}

module.exports = {Icecream, User, Shop}