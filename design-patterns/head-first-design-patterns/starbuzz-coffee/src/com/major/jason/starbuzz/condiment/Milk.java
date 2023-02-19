package com.major.jason.starbuzz.condiment;

import com.major.jason.starbuzz.beverage.Beverage;

public class Milk extends CondimentDecorator{

    public Milk(Beverage beverage) {
        super(beverage);
    }

    public double getCost() {
        return getBeverage().getCost() + .10;
    }

    @Override
    public String getDescription() {
        return getBeverage().getDescription() + ", Milk";
    }
}
