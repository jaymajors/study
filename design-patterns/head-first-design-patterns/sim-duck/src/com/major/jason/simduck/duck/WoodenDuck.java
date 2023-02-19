package com.major.jason.simduck.duck;

import com.major.jason.simduck.behavior.NonFlyingDuckBehavior;
import com.major.jason.simduck.behavior.SilentDuckBehavior;

public class WoodenDuck extends Duck {

    public WoodenDuck() {
        super(new NonFlyingDuckBehavior(), new SilentDuckBehavior());
    }

    @Override
    public void display() {
        System.out.println("Display: Wooden Duck");
    }
}
