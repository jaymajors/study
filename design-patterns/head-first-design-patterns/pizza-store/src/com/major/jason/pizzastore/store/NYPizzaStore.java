package com.major.jason.pizzastore.store;

import com.major.jason.pizzastore.pizza.*;

public class NYPizzaStore extends PizzaStore {

    @Override
    public Pizza createPizza(String type) {
        if (type == "cheese") {
            return new NYStyleCheesePizza();
        } else if (type == "veggie") {
            return new NYStyleVeggiePizza();
        } else if (type == "clam") {
            return new NYStyleClamPizza();
        } else if (type == "pepperoni") {
            return new PepperoniPizza();
        } else return null;
    }
}
