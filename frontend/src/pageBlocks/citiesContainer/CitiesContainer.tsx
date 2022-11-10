import React, {FC, useEffect, useState} from "react";
import {Box, Flex, Icon, useColorMode} from "@chakra-ui/react";
import {AiOutlinePlus} from "react-icons/ai";
import {CityCard} from "../../components/card";
import {convertTimestamp} from "../../utils/convertDate";
import {useFetch} from "../../hooks/useFetch";
import * as urls from "../../api/urls";
import {AddCityModal} from "../../modals/AddCityModal";

export type Props = {

}

export const CitiesContainer: FC<Props> = () => {
    let sortable = 1;
    let limit = 25;
    let offset = 1;
    const [cities, setCities] = useState<Array<any>>([]);

    // @ts-ignore
    useEffect(async () => {
        const getCityFetch = useFetch("GET", urls.getCities, `?page=${offset}&size=${limit}&sortable=${sortable}`)

        const cities = await getCityFetch;

        // @ts-ignore
        setCities(cities.data);
    }, []);


    return (
        <Flex wrap={"wrap"} gridGap="20px" mt="20px">
            <AddCityModal />
            {cities?.map((item) => <CityCard
                key={item.id}
                name={item.name}
                item={item}
                creationDate={convertTimestamp(item.creationDate)}
            />)}
        </Flex>
    )
}