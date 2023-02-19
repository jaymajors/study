package com.major.jason.simduck.duck;

import com.major.jason.simduck.behavior.NonFlyingDuckBehavior;
import com.major.jason.simduck.behavior.SqueakingDuckBehavior;

public class RubberDuck extends Duck {

    public RubberDuck() {
        super(new NonFlyingDuckBehavior(), new SqueakingDuckBehavior());
    }

    @Override
    public void display() {
        System.out.println("Display: Rubber Duck");
    }

    public String toString() {
        return "Rubber duck";
    }
}
