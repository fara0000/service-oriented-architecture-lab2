package com.example.mainservice.exceptions;

import lombok.extern.slf4j.Slf4j;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

/**
    ResponseEntityExceptionHandler -> A convenient base class for @ControllerAdvice classes that wish to provide
 centralized exception handling across all @RequestMapping methods through @ExceptionHandler methods.
**/
@Slf4j
@RestControllerAdvice
@Order(Ordered.HIGHEST_PRECEDENCE)
public class RestResponseExceptionHandler extends ResponseEntityExceptionHandler {

    /**
        Not found exception handler
     **/
//    @ExceptionHandler(value = { NotFoundException.class })
//    protected ResponseEntity<Object> handleDataNotFound(RuntimeException e, WebRequest request) {
//        log.error("{}: {}", e.getClass().getSimpleName(), e.getMessage());
//        ExceptionMessageDto errorDTO = new ExceptionMessageDto(e.getMessage());
//        return handleExceptionInternal(e, errorDTO, new HttpHeaders(), HttpStatus.NOT_FOUND, request);
//    }
//
//    @ExceptionHandler(value = {MethodArgumentTypeMismatchException.class})
//    protected ResponseEntity<Object> handleInputIncorrectExceptionMessageDto(RuntimeException e, WebRequest request) {
//        log.error("{}: {}", e.getClass().getSimpleName(), e.getMessage());
//        ExceptionMessageDto errorDTO = new ExceptionMessageDto("Invalid value supplied");
//        return handleExceptionInternal(e, errorDTO, new HttpHeaders(), HttpStatus.BAD_REQUEST, request);
//    }
//
//    @Override
//    protected ResponseEntity<Object> handleMissingPathVariable(MissingPathVariableException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
//        log.error("{}: {}", ex.getClass().getSimpleName(), ex.getMessage());
//        ExceptionMessageDto errorDTO = new ExceptionMessageDto("Missing path variable");
//        return this.handleExceptionInternal(ex, errorDTO, new HttpHeaders(), HttpStatus.BAD_REQUEST, request);
//    }

//    @Override
//    protected ResponseEntity<Object> handleHttpMessageNotReadable(HttpMessageNotReadableException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
//        log.error("{}: {}", ex.getClass().getSimpleName(), ex.getMessage());
//        ExceptionMessageDto errorDTO = new ExceptionMessageDto("Invalid data supplied");
//        return this.handleExceptionInternal(ex, errorDTO, new HttpHeaders(), HttpStatus.BAD_REQUEST, request);
//    }




//    @Override
//    protected ResponseEntity<Object> handleHttpMessageNotReadable(HttpMessageNotReadableException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
//        String error = "Malformed JSON request";
//        return buildResponseEntity(new ExceptionMessageDto(error, HttpStatus.BAD_REQUEST));
//    }
//
//    private ResponseEntity<Object> buildResponseEntity(ExceptionMessageDto apiError) {
//        return new ResponseEntity<>(apiError, apiError.getHttpStatus());
//    }

//    @ResponseStatus(HttpStatus.BAD_REQUEST)
//    @ExceptionHandler(MethodArgumentNotValidException.class)
//    public Map<String, String> handleInvalidArgument(MethodArgumentNotValidException ex) {
//        Map<String, String> errorMap = new HashMap<>();
//        ex.getBindingResult().getFieldErrors().forEach(error -> {
//            errorMap.put(error.getField(), error.getDefaultMessage());
//        });
//        return errorMap;
//    }

//    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
//    @ExceptionHandler(UserNotFoundException.class)
//    public Map<String, String> handleBusinessException(UserNotFoundException ex) {
//        Map<String, String> errorMap = new HashMap<>();
//        errorMap.put("errorMessage", ex.getMessage());
//        return errorMap;
//    }

}
