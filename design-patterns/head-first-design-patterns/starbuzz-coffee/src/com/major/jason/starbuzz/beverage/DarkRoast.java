package com.major.jason.starbuzz.beverage;

public class DarkRoast extends Beverage {

    public DarkRoast() {
        this.description = "Dark Roast";
    }

    @Override
    public double getCost() {
        return .99;
    }
}
