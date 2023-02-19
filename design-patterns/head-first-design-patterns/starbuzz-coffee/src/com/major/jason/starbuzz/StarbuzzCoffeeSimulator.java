package com.major.jason.starbuzz;

import com.major.jason.starbuzz.beverage.Beverage;
import com.major.jason.starbuzz.beverage.DarkRoast;
import com.major.jason.starbuzz.beverage.Espresso;
import com.major.jason.starbuzz.beverage.HouseBlend;
import com.major.jason.starbuzz.condiment.Mocha;
import com.major.jason.starbuzz.condiment.Soy;
import com.major.jason.starbuzz.condiment.Whip;

public class StarbuzzCoffeeSimulator {
    public static void main(String[] args) {
        Beverage beverage = new Espresso();
        System.out.println(beverage.getDescription() + " $" + beverage.getCost());

        Beverage beverage2 = new DarkRoast();
        beverage2 = new Mocha(beverage2);
        beverage2 = new Mocha(beverage2);
        beverage2 = new Whip(beverage2);
        System.out.println(beverage2.getDescription() + " $" + beverage2.getCost());

        Beverage beverage3 = new HouseBlend();
        beverage3 = new Soy(beverage3);
        beverage3 = new Mocha(beverage3);
        beverage3 = new Whip(beverage3);
        System.out.println(beverage3.getDescription() + " $" + beverage3.getCost());
    }
}