package com.major.jason.simduck.duck;

import com.major.jason.simduck.behavior.FlyingDuckBehavior;
import com.major.jason.simduck.behavior.QuackingDuckBehavior;

public class RedheadDuck extends Duck {

    public RedheadDuck() {
        super(new FlyingDuckBehavior(), new QuackingDuckBehavior());
    }

    @Override
    public void display() {
        System.out.println("Display Redhead Duck!");
    }

    @Override
    public String toString() {
        return "Redhead";
    }
}
