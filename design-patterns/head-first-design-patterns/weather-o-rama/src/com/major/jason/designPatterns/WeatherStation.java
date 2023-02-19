package com.major.jason.designPatterns;

public class WeatherStation {

    public static void main(String[] args) {
        var weatherData = new WeatherData();
        new CurrentConditionsDisplay(weatherData);
        new HeatIndexDisplay(weatherData);
        new StatisticsDisplay(weatherData);

        weatherData.setMeasurements(41f, 82f, 10f);
        weatherData.setMeasurements(78f, 82f, 10f);
        weatherData.setMeasurements(90f, 82f, 10f);

    }
}
