package com.example.mainservice.model;

import com.example.mainservice.dto.CoordinatesDTO;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "coordinates")
public class Coordinates {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @NotNull
    @Column(name = "x")
    private Float x;

    @Max(740)
    @Column(name = "y")
    private Integer y;

    public Coordinates(CoordinatesDTO coordinatesDTO) {
        this.x = coordinatesDTO.getX();
        this.y = coordinatesDTO.getY();
    }
}
