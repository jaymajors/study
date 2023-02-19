package com.major.jason.starbuzz.beverage;

public class HouseBlend extends Beverage {

    public HouseBlend() {
        this.description = "House Blend";
    }

    @Override
    public double getCost() {
        return .89;
    }
}
