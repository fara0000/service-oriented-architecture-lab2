export type CoordinatesType = {
    id: number;
    x: number;
    y: number;
}

export type HumanType = {
    age: number;
    height: number;
    birthday: Date;
}

export type CityType = {
    id: number;
    name: string;
    coordinates: CoordinatesType;
    creationDate: Date;
    area: number;
    population: number;
    metersAboveSeaLevel: number;
    climate: string;
    government: string;
    standardOfLiving: string;
    governor: HumanType;
}