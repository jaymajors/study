package com.major.jason.simduck.behavior;

public class NonFlyingDuckBehavior implements FlyBehavior {
    @Override
    public void fly() {
        System.out.println("I am a duck that cannot fly.");
    }
}
