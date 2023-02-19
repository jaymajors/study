package com.major.jason.starbuzz.condiment;

import com.major.jason.starbuzz.beverage.Beverage;

public class Mocha extends CondimentDecorator{

    public Mocha(Beverage beverage) {
        super(beverage);
    }

    public double getCost() {
        return getBeverage().getCost() + .20;
    }

    @Override
    public String getDescription() {
        return getBeverage().getDescription() + ", Mocha";
    }
}
