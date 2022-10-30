package com.example.mainservice.controllers;

import com.example.mainservice.dto.mappers.CityMapper;
import com.example.mainservice.dto.requests.CityRequestDTO;
import com.example.mainservice.dto.requests.CityUpdateRequestDTO;
import com.example.mainservice.endpoints.Endpoints;
import com.example.mainservice.entities.City;
import com.example.mainservice.services.CityService;
import io.swagger.v3.oas.annotations.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
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
    private final CityMapper cityMapper;

    @GetMapping(Endpoints.CITY)
    public ResponseEntity<List<City>> getCities(@RequestParam int size, @RequestParam int page) {
        List<City> cities = cityService.getAllCities(size, page);

        return new ResponseEntity<>(cities, HttpStatus.OK);
    }

    @GetMapping(Endpoints.CITY_BY_ID)
    public ResponseEntity<City> getCityById(@PathVariable Integer cityId) {
        return new ResponseEntity<>(cityService.getCityById(cityId), HttpStatus.OK);
    }

    @DeleteMapping(Endpoints.CITY)
    public ResponseEntity<String> deleteCity(@RequestParam Integer cityId) {
        return new ResponseEntity<>(cityService.deleteCityById(cityId), HttpStatus.OK);
    }

    @PostMapping(Endpoints.CITY)
    @Operation(summary = "Create City",
            responses = {
                    @ApiResponse(description = "City",
                            responseCode = "200",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = City.class))),
                    @ApiResponse(responseCode = "400", content = @Content(mediaType = "application/json"), description = "City is invalid")
            }
    )
    public ResponseEntity<City> addCity(@RequestBody CityRequestDTO cityRequestDTO) {
        City city = cityMapper.convertToEntity(cityRequestDTO);

        log.info("City mapped: ", city);

        return new ResponseEntity<>(cityService.addCity(city), HttpStatus.OK);
    }

    /*
         TODO: хреново сделано не хочется каждый раз при обновлении сущности все его параметры с клиента
                посылать хочется сделать так чтобы посылать только тот аттрибут который хотим изменить
    */
    @PutMapping(Endpoints.CITY)
    public ResponseEntity<City> updateCity(@RequestBody CityUpdateRequestDTO cityUpdateRequestDTO) {
        City city = cityMapper.convertToEntity(cityUpdateRequestDTO.getBody());

        return new ResponseEntity<>(cityService.updateCity(cityUpdateRequestDTO.getId(), city), HttpStatus.OK);
    }

    @GetMapping(Endpoints.GET_CITY_AVERAGE)
    public ResponseEntity<Long> averageCitiesBySeaLevel() {
        return new ResponseEntity<>(cityService.averageBySeaLevel(), HttpStatus.OK);
    }

    @GetMapping(Endpoints.GET_CITIES_BY_NAME)
    public ResponseEntity<List<City>> getCitiesByName(@RequestParam String cityName) {
        return new ResponseEntity<>(cityService.getCitiesByName(cityName), HttpStatus.OK);
    }
}
