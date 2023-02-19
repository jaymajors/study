package com.major.jason.simduck.behavior;

public class SqueakingDuckBehavior implements QuackBehavior{
    @Override
    public void quack() {
        System.out.println("Squeak, Squeak!");
    }
}
