package com.major.jason.simduck.behavior;

public class FlyingDuckBehavior implements FlyBehavior {

    @Override
    public void fly() {
        System.out.println("I am a graceful flying duck!");
    }
}
