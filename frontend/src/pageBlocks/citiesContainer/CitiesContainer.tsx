import React, {FC, useEffect, useMemo, useState} from "react";
import {Box, Flex, Icon, useColorMode, useDisclosure} from "@chakra-ui/react";
import {AiOutlinePlus} from "react-icons/ai";
import {CityCard} from "../../components/card";
import {convertTimestamp} from "../../utils/convertDate";
import {useFetch} from "../../hooks/useFetch";
import * as urls from "../../api/urls";
import {AddCityModal} from "../../modals/AddCityModal";
import {DeleteCityModal} from "../../modals/DeleteCityModal";
import {CityType} from "../../types/types";

export type Props = {

}

const cityInitialData = {
    area: null,
    climate: null,
    coordinates: {
        id: 0,
        x: 0,
        y: 0,
    },
    creationDate: null,
    government: "",
    governor: null,
    id: 0,
    metersAboveSeaLevel: null,
    name: "",
    population: 0,
    standardOfLiving: ""
}

export const CitiesContainer: FC<Props> = () => {
    const [getParams, setGetParams] = useState({ sortable: 1, limit: 25, offset: 1 });
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedCity, setSelectedCity] = useState<CityType>(cityInitialData);
    const [cities, setCities] = useState<Array<CityType>>([]);

    const fetchCity = useMemo(async () => {
        console.log('1');
        return useFetch("GET", urls.getCities, `?page=${getParams.offset}&size=${getParams.limit}&sortable=${getParams.sortable}`)
    }, [])

    // @ts-ignore
    useEffect(async () => {
        console.log('2');
        const cities = await fetchCity;
        // @ts-ignore
        setCities(cities.data);
    }, []);

     console.log(cities, '3');

    return (
        <Flex wrap={"wrap"} gridGap="20px" mt="20px">
            <AddCityModal />
            {cities?.map((item) => <CityCard
                key={item.id}
                name={item.name}
                item={item}
                getParams={getParams}
                onOpen={onOpen}
                setSelectedCity={setSelectedCity}
                creationDate={convertTimestamp(item.creationDate)}
            />)}
            {isOpen &&
                <DeleteCityModal item={selectedCity} isOpen={isOpen} onClose={onClose} getCity={fetchCity}/>
            }
        </Flex>
    )
}