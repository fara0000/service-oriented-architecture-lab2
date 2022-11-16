package com.jaxrs.api;

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
@Path("/city")
public class ExtraOperationsResource {
    @GET
    @Consumes(MediaType.APPLICATION_JSON)
    public Response getHelloCity() {
        return Response.ok().entity("Hello ebuciy jax-rs!").build();
    }
}
