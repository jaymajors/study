package com.major.jason.simduck.duck;

import com.major.jason.simduck.behavior.FlyingDuckBehavior;
import com.major.jason.simduck.behavior.QuackingDuckBehavior;

public class MallardDuck extends Duck {

    public MallardDuck() {
        super(new FlyingDuckBehavior(), new QuackingDuckBehavior());
    }
    @Override
    public void display() {
        System.out.println("Display Mallard Duck");
    }
}
