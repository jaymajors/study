package com.major.jason.pizzastore.store;

import com.major.jason.pizzastore.pizza.Pizza;
import com.major.jason.pizzastore.pizza.SimplePizzaFactory;

public abstract class PizzaStore {

    public Pizza orderPizza(String type) {
        Pizza pizza;

        pizza = createPizza(type);

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

        return pizza;
    }

    public abstract Pizza createPizza(String type); // Factory method...

}
