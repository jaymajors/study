package com.major.jason.starbuzz.beverage;

public class Decaf extends Beverage {

    public Decaf() {
        this.description = "Decaf";
    }

    @Override
    public double getCost() {
        return 1.05;
    }
}
