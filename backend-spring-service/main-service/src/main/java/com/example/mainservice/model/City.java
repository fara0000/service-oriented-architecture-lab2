package com.example.mainservice.model;

import com.example.mainservice.model.Coordinates;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.time.ZonedDateTime;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "city")
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @NotBlank
    @NotNull
    @Column(name = "name")
    private String name; //Поле не может быть null, Строка не может быть пустой

    @OneToOne(cascade = CascadeType.REFRESH, fetch = FetchType.EAGER)
    @JoinColumn(name = "coordinates_id", referencedColumnName = "id")
    private Coordinates coordinates; //Поле не может быть null

    @NotNull
    @Column(name = "creationDate")
    private ZonedDateTime creationDate = ZonedDateTime.now(); //Поле не может быть null, Значение этого поля должно генерироваться автоматически

    @Min(1)
    @Column(name = "area")
    private long area; //Значение поля должно быть больше 0

    @NotNull
    @Min(1)
    @Column(name = "population")
    private Integer population; //Значение поля должно быть больше 0, Поле не может быть null

    @Column(name = "metersAboveSeaLevel")
    private Long metersAboveSeaLevel;

    @NotNull
    @Column(name = "climate")
    private Climate climate; //Поле может быть null

    @NotNull
    @Column(name = "government")
    private Government government; //Поле не может быть null

    @NotNull
    @Column(name = "standardOfLiving")
    private StandardOfLiving standardOfLiving; //Поле не может быть null

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Human> governor; //Поле может быть null
}
