package com.major.jason.starbuzz.condiment;

import com.major.jason.starbuzz.beverage.Beverage;

public abstract class CondimentDecorator extends Beverage {

    private Beverage beverage;

    public Beverage getBeverage() {
        return beverage;
    }

    public CondimentDecorator(Beverage beverage) {
        this.beverage = beverage;
    }

    public abstract String getDescription();

}
