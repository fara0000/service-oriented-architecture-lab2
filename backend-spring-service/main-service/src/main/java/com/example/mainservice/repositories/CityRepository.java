package com.example.mainservice.repositories;

import com.example.mainservice.entities.City;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CityRepository extends JpaRepository<City, Integer> {
    City findCityById(Integer id);
}
