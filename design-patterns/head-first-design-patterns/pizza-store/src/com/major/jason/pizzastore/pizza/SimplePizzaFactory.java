package com.major.jason.pizzastore.pizza;

public class SimplePizzaFactory {

    public Pizza createPizza(String type) {
        Pizza pizza = null;

        if (type.equals("cheese")) {
            return new CheesePizza();
        } else if (type.equals("pepperoni")) {
            return new PepperoniPizza();
        } else if (type.equals("clam")) {
            return new ClamPizza();
        } else if (type.equals("veggie")) {
            return new VeggiePizza();
        }

        return pizza;
    }

}
