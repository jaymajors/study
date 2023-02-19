package com.major.jason.designPatterns;

import java.util.ArrayList;
import java.util.List;

public class StatisticsDisplay implements Observer, DisplayElement{

    private final WeatherData weatherData;
    private final List<Float> temps;
    private float highTemp;
    private float lowTemp;

    public StatisticsDisplay(WeatherData weatherData) {
        highTemp = Float.MIN_VALUE;
        lowTemp = Float.MAX_VALUE;
        temps = new ArrayList<>();
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    @Override
    public void display() {
        System.out.println("Avg/Min/Max: " + getAverageTemp() + "/" + lowTemp + "/" + highTemp);
    }

    @Override
    public void update() {
        var temp = weatherData.getTemperature();
        temps.add(temp);
        if (highTemp < temp) {
            highTemp = temp;
        }

        if (lowTemp > temp) {
            lowTemp = temp;
        }

        display();
    }

    private float getAverageTemp() {
        var sum = 0f;
        if (temps == null || temps.size() == 0) return sum;

        for (var temp : temps) {
            sum += temp;
        }
        return sum / temps.size();
    }
}
