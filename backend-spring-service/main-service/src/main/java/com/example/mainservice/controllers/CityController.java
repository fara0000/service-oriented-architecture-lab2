package com.example.mainservice.controllers;

import com.example.mainservice.endpoints.Endpoints;
import com.example.mainservice.model.City;
import com.example.mainservice.services.CityService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@Slf4j
@RestController
public class CityController {
    private final CityService cityService;

    @GetMapping(Endpoints.CITY)
    public ResponseEntity<List<City>> getCities() {
        List<City> cities = cityService.getAllCities();

        return new ResponseEntity<>(cities, HttpStatus.OK);
    }

    @GetMapping(Endpoints.CITY)
    public ResponseEntity<City> getCityById(@RequestParam Integer cityId) {
        return new ResponseEntity<>(cityService.getCityById(cityId), HttpStatus.OK);
    }

    @DeleteMapping(Endpoints.CITY)
    public ResponseEntity<String> deleteCity(@RequestParam Integer cityId) {
        return new ResponseEntity<>(cityService.deleteCityById(cityId), HttpStatus.OK);
    }
}
