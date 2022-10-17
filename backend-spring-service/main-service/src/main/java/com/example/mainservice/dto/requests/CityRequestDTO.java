package com.example.mainservice.dto.requests;

import com.example.mainservice.dto.CoordinatesDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.ZonedDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CityRequestDTO {
    private String name;
    private CoordinatesDTO coordinates;
    private ZonedDateTime creationDate;
    private long area;
    private Integer population;
    private Long metersAboveSeaLevel;
    private String climate;
    private String government;
    private String standardOfLiving;
    private List<Integer> governor;
}
