package com.major.jason.simduck.behavior;

public class RocketPoweredFlyBehavior implements FlyBehavior{
    @Override
    public void fly() {
        System.out.println("I'm flying with a rocket!");
    }
}
