package com.major.jason.starbuzz.condiment;

import com.major.jason.starbuzz.beverage.Beverage;

public class Soy extends CondimentDecorator {

    public Soy(Beverage beverage) {
        super(beverage);
    }

    public double getCost() {
        return getBeverage().getCost() + .15;
    }

    @Override
    public String getDescription() {
        return getBeverage().getDescription() + ", Soy";
    }
}
