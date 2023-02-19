package com.major.jason.simduck;

import com.major.jason.simduck.behavior.RocketPoweredFlyBehavior;
import com.major.jason.simduck.duck.*;

import java.util.ArrayList;

public class SimDuckSimulator {
    public static void main(String[] args) {
        var sim = new SimDuckSimulator();
        sim.begin();
    }

    public void begin() {
        var modelDuck = new ModelDuck();

        var ducks = new ArrayList<Duck>();
        ducks.add(new MallardDuck());
        ducks.add(new RedheadDuck());
        ducks.add(new RubberDuck());
        ducks.add(new WoodenDuck());
        ducks.add(modelDuck);

        for (var duck : ducks) {
            exerciseDuck(duck);
        }

        System.out.println("\n*** Switching Model Duck to Rocket Power ***\n");
        modelDuck.setFlyBehavior(new RocketPoweredFlyBehavior());
        exerciseDuck(modelDuck);
    }

    private void exerciseDuck(Duck duck) {
        duck.display();
        duck.fly();
        duck.swim();
        duck.quack();
    }
}