package com.major.jason.pizzastore;

import com.major.jason.pizzastore.pizza.Pizza;
import com.major.jason.pizzastore.store.ChicagoPizzaStore;
import com.major.jason.pizzastore.store.NYPizzaStore;

public class PizzaStoreSim {
    public static void main(String[] args) {
        var nyPizzaStore = new NYPizzaStore();
        var chPizzaStore = new ChicagoPizzaStore();

        Pizza pizza = nyPizzaStore.orderPizza("cheese");
        System.out.println("Dad dad ordered a " + pizza.getName() + "\n");

        pizza = chPizzaStore.orderPizza("cheese");
        System.out.println("Luke ordered a " + pizza.getName() + "\n");
    }
}