package com.example.mainservice.exceptions;

import com.example.mainservice.dto.ExceptionMessageDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

/**
    ResponseEntityExceptionHandler -> A convenient base class for @ControllerAdvice classes that wish to provide
 centralized exception handling across all @RequestMapping methods through @ExceptionHandler methods.
**/
@Slf4j
@RestControllerAdvice
public class RestResponseExceptionHandler extends ResponseEntityExceptionHandler {

    /**
        Not found exception handler
     **/
    @ExceptionHandler(value = { NotFoundException.class })
    protected ResponseEntity<Object> handleDataNotFound(RuntimeException e, WebRequest request) {
        log.error("{}: {}", e.getClass().getSimpleName(), e.getMessage());
        ExceptionMessageDto errorDTO = new ExceptionMessageDto(e.getMessage());
        return handleExceptionInternal(e, errorDTO, new HttpHeaders(), HttpStatus.NOT_FOUND, request);
    }
}
