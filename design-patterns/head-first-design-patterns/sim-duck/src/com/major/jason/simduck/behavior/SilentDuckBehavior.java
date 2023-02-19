package com.major.jason.simduck.behavior;

public class SilentDuckBehavior implements QuackBehavior{
    @Override
    public void quack() {
        System.out.println("...");
    }
}
