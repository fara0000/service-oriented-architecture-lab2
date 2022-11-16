package com.jaxrs.services;

import com.jaxrs.dtos.City;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.ws.rs.client.Client;
import jakarta.ws.rs.client.ClientBuilder;
import jakarta.ws.rs.client.WebTarget;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

// http: 35867 - service1
// https: 35868 - service1
// management-http: 35998 - serivce1
// management-https: 35999 - service1

@ApplicationScoped
public class CalculateService {
    Client client = ClientBuilder.newClient();
    String api = "http://localhost:8080/city";

    public City[] getCitiesFromMainService() {
        return client
                .target(api)
                .request(MediaType.APPLICATION_JSON)
                .get(City[].class);
    }

    public Integer calculatePopulated () {
        City[] responseBody = getCitiesFromMainService();
        System.out.println("Request from main service received with {} elements.\n CalculatePopulated: " + String.valueOf(responseBody.length));
        return 90;
    }

    public Integer calculateToNewest() {
        City[] responseBody = getCitiesFromMainService();

        System.out.println("Request from main service received with {} elements.\n calculateNewest: " + String.valueOf(responseBody.length));
        return 100;
    }
}
