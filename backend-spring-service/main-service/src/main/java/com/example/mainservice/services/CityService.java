package com.example.mainservice.services;

import com.example.mainservice.exceptions.NotFoundException;
import com.example.mainservice.entities.City;
import com.example.mainservice.repositories.CityRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@AllArgsConstructor
public class CityService {
    private final CityRepository cityRepository;

    public List<City> getAllCities() {
        return cityRepository.findAll();
    }

    public City getCityById(Integer id) {
        return cityRepository.findById(id).orElseThrow(() -> new NotFoundException(String.format("City with id %d not found", id)));
    }

    public String deleteCityById(Integer id) {
        String successMsg =  "City_id " + id + "deleted successfully";
        getCityById(id);

        return successMsg;
    }

    public City addCity(City city) {
        return cityRepository.save(city);
    }
}
