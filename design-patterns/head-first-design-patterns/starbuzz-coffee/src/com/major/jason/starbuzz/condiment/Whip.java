package com.major.jason.starbuzz.condiment;

import com.major.jason.starbuzz.beverage.Beverage;

public class Whip extends CondimentDecorator {

    public Whip(Beverage beverage) {
        super(beverage);
    }

    @Override
    public String getDescription() {
        return getBeverage().getDescription() + ", Whip";
    }

    @Override
    public double getCost() {
        return getBeverage().getCost() + .10;
    }
}
