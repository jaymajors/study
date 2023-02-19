package com.major.jason.pizzastore.store;

import com.major.jason.pizzastore.pizza.*;

public class ChicagoPizzaStore extends PizzaStore {

    @Override
    public Pizza createPizza(String type) {
        if (type == "cheese") {
            return new ChicagoStyleCheesePizza();
        } else if (type == "veggie") {
            return new ChicagoStyleVeggiePizza();
        } else if (type == "clam") {
            return new ChicagoStyleClamPizza();
        } else if (type == "pepperoni") {
            return new ChicagoStylePepperoniPizza();
        } else return null;
    }

}
