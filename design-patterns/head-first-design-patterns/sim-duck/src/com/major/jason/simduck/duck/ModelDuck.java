package com.major.jason.simduck.duck;

import com.major.jason.simduck.behavior.NonFlyingDuckBehavior;
import com.major.jason.simduck.behavior.QuackingDuckBehavior;

public class ModelDuck extends Duck {

    public ModelDuck() {
        super(new NonFlyingDuckBehavior(), new QuackingDuckBehavior());
    }

    @Override
    public void display() {
        System.out.println("I'm a model duck!");
    }
}
