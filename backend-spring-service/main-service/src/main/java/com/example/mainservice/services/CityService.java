package com.example.mainservice.services;

import com.example.mainservice.exceptions.NotFoundException;
import com.example.mainservice.entities.City;
import com.example.mainservice.repositories.CityRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@AllArgsConstructor
public class CityService {
    private final CityRepository cityRepository;

    public List<City> getAllCities(Integer size, Integer page, String sortable) {
        Pageable pagination = PageRequest.of(page - 1, size);
        return cityRepository.findAll(pagination).stream().collect(Collectors.toList());
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

    public City updateCity(Integer id, City cityUpdateData) {
        return cityRepository.findById(id).map(org -> {
            org.setName(cityUpdateData.getName());
            org.setArea(cityUpdateData.getArea());
            org.setClimate(cityUpdateData.getClimate());
            org.setGovernment(cityUpdateData.getGovernment());
            org.setGovernor(cityUpdateData.getGovernor());
            org.setCoordinates(cityUpdateData.getCoordinates());
            org.setCreationDate(cityUpdateData.getCreationDate());
            org.setMetersAboveSeaLevel(cityUpdateData.getMetersAboveSeaLevel());
            org.setPopulation(cityUpdateData.getPopulation());
            org.setStandardOfLiving(cityUpdateData.getStandardOfLiving());
            return cityRepository.save(org);
        }).orElseThrow(() -> new NotFoundException(String.format("City with id %d not found", id)));
    }

    public Long averageBySeaLevel() {
        return cityRepository.findAverageOfSeaLevels();
    }

    public List<City> getCitiesByName(String cityName) {
        return cityRepository.findCitiesByName(cityName).orElseThrow(() -> new NotFoundException(String.format("City with name %d not found", cityName)));
    }
}
