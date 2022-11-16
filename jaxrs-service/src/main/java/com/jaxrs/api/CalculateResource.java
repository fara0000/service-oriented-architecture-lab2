package com.jaxrs.api;

import com.jaxrs.services.CalculateService;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.json.stream.JsonParsingException;
import jakarta.validation.ValidationException;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.ArrayList;
import java.util.List;

@ApplicationScoped
@Path("/calculate")
public class CalculateResource {
    @Inject
    CalculateService calculateService;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getHelloCity() {
        return Response.ok().entity("Hello ebuciy jax-rs!").build();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/between-max-and-min-populated")
    public Response calculatePopulated() {
        System.out.println("calculatePopulated method in controller");
        Integer maxAndMinPopulated = calculateService.calculatePopulated();

        return Response.ok(maxAndMinPopulated, MediaType.APPLICATION_JSON).build();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/to-newest")
    public Response calculateToNewest() {
        System.out.println("calculatePopulated method in controller");
        Integer maxAndMinPopulated = calculateService.calculateToNewest();

        return Response.ok(maxAndMinPopulated, MediaType.APPLICATION_JSON).build();
    }
}
