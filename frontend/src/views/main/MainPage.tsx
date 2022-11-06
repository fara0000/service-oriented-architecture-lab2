import React, {ChangeEvent, useEffect, useState} from 'react';
import {Box, Text, Button, useColorMode, Flex, Image, Icon, ButtonProps} from "@chakra-ui/react";
import {useHistory} from "react-router-dom";
import {useFetch} from "../../hooks/useFetch";
import {getCitiesFetch, getCity} from "../../api";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import {TextInput} from "../../components/input/TextInput";
import {Form, Formik} from "formik";
import { SwitchControl } from "../../components/switch";
import { CityCard } from "../../components/card";
import { CityType } from "../../types";
import {convertTimestamp} from "../../utils/convertDate";

export const MainPage = () => {
    let sortable = 1;
    let limit = 8;
    let offset = 1;
    const [isSortingEnable, setSortingEnable] = useState(false);
    const [cities, setCities] = useState<Array<any>>([]);
    const { colorMode, toggleColorMode } = useColorMode();
    const history = useHistory();

    useEffect(() => {
        // async function getData() {
        //     await getCity(`?page=${offset}&size=${limit}&sortable=${sortable}`)
        // }
        // const cities = useFetch("GET", getCities, `?page=${offset}&size=${limit}&sortable=${sortable}`)?.then((res) => res);

        setCities([
            {
                id: 3,
                name: "Baku",
                coordinates: {
                    id: 2,
                    x: 10.2,
                    y: 11
                },
                creationDate: 1666735691.234,
                area: 86600,
                population: 9000000,
                metersAboveSeaLevel: 2000,
                climate: "STEPPE",
                government: "PUPPET_STATE",
                standardOfLiving: "MEDIUM",
                governor: {
                    id: 2,
                    age: 61,
                    height: 180,
                    birthday: 1032991691.234
                }
            },
            {
                id: 2,
                name: "Baku",
                coordinates: {
                    id: 3,
                    x: 88,
                    y: 13
                },
                creationDate: 1667048730.756,
                area: 10000,
                population: 0,
                metersAboveSeaLevel: 0,
                climate: "OCEANIC",
                government: null,
                standardOfLiving: null,
                governor: {
                    id: 3,
                    age: 0,
                    height: 0,
                    birthday: 1667048730.756
                }
            },
            {
                id: 4,
                name: "Moscow",
                coordinates: {
                    id: 4,
                    x: 87.3,
                    y: 18
                },
                creationDate: 1667172205.113,
                area: 12984300,
                population: 14400000,
                metersAboveSeaLevel: 1500,
                climate: null,
                government: null,
                standardOfLiving: "MEDIUM",
                governor: {
                    id: 4,
                    age: 70,
                    height: 1.63,
                    birthday: 1667172205.113
                }
            },
            {
                id: 5,
                name: "Istanbul",
                coordinates: {
                    id: 5,
                    x: 123,
                    y: 23
                },
                creationDate: 1667172205.113,
                area: 1298324300,
                population: 1600000,
                metersAboveSeaLevel: 1800,
                climate: null,
                government: null,
                standardOfLiving: null,
                governor: {
                    id: 5,
                    age: 70,
                    height: 1.63,
                    birthday: 1667172205.113
                }
            },
            {
                id: 6,
                name: "EREVAN",
                coordinates: {
                    id: 6,
                    x: 126,
                    y: 29
                },
                creationDate: 1667172205.113,
                area: 12300,
                population: 160000,
                metersAboveSeaLevel: 1900,
                climate: null,
                government: null,
                standardOfLiving: "LOW",
                governor: {
                    id: 6,
                    age: 70,
                    height: 1.63,
                    birthday: 1667172205.113
                }
            },
            {
                id: 7,
                name: "OSLO",
                coordinates: {
                    id: 7,
                    x: 1211.9,
                    y: 294
                },
                creationDate: 1667172205.113,
                area: 1230320,
                population: 190000,
                metersAboveSeaLevel: 2300,
                climate: null,
                government: null,
                standardOfLiving: null,
                governor: {
                    id: 7,
                    age: 70,
                    height: 1.63,
                    birthday: 1667172205.113
                }
            },
            {
                id: 8,
                name: "OSLO",
                coordinates: {
                    id: 8,
                    x: 1211.9,
                    y: 294
                },
                creationDate: 1667172205.113,
                area: 1230320,
                population: 190000,
                metersAboveSeaLevel: 2300,
                climate: null,
                government: null,
                standardOfLiving: null,
                governor: {
                    id: 8,
                    age: 70,
                    height: 1.63,
                    birthday: 1667172205.113
                }
            },
            {
                id: 9,
                name: "OSLO",
                coordinates: {
                    id: 9,
                    x: 1211.9,
                    y: 294
                },
                creationDate: 1667172205.113,
                area: 1230320,
                population: 190000,
                metersAboveSeaLevel: 2300,
                climate: null,
                government: null,
                standardOfLiving: null,
                governor: {
                    id: 9,
                    age: 70,
                    height: 1.63,
                    birthday: 1667172205.113
                }
            },
            {
                id: 10,
                name: "CHICAGO",
                coordinates: {
                    id: 10,
                    x: 1211.9,
                    y: 294
                },
                creationDate: 1667172205.113,
                area: 1230320,
                population: 190000,
                metersAboveSeaLevel: 2300,
                climate: null,
                government: null,
                standardOfLiving: null,
                governor: {
                    id: 10,
                    age: 70,
                    height: 1.63,
                    birthday: 1667172205.113
                }
            },
            {
                id: 11,
                name: "CHICAGO",
                coordinates: {
                    id: 11,
                    x: 1211.9,
                    y: 294
                },
                creationDate: 1667172205.113,
                area: 1230320,
                population: 190000,
                metersAboveSeaLevel: 2300,
                climate: null,
                government: null,
                standardOfLiving: null,
                governor: {
                    id: 11,
                    age: 70,
                    height: 1.63,
                    birthday: 1667172205.113
                }
            },
            {
                id: 12,
                name: "CHICAGO",
                coordinates: {
                    id: 12,
                    x: 1211.9,
                    y: 294
                },
                creationDate: 1667172205.113,
                area: 1230320,
                population: 190000,
                metersAboveSeaLevel: 2300,
                climate: null,
                government: null,
                standardOfLiving: null,
                governor: {
                    id: 12,
                    age: 70,
                    height: 1.63,
                    birthday: 1667172205.113
                }
            }
        ])
    }, [])


    return (
            <Box>
                <Box
                    h={'auto'}
                    bgImage={colorMode === "dark" ? "url('/assets/new_back.jpg')" : "url('/assets/images.jpeg')"}
                    bgPosition="center"
                    backgroundRepeat="no-repeat"
                    color='#FFFFFF'
                    d="flex"
                    flexDir="column"
                    gridGap="30px"
                    p="20px"
                >
                    <Button
                        aria-label="Toggle Color Mode"
                        onClick={toggleColorMode}
                        _focus={{ boxShadow: 'none' }}
                        w="fit-content"
                        right="8px"
                        position="absolute"
                        top="15px"
                    >
                        {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
                    </Button>
                    <Box
                        h='auto'
                        w='700px'
                        bg={'rgb(5 37 83 / 19%)'}
                        p="20px"
                        borderRadius="6px"
                        d="flex"
                        flexDir="column"
                    >
                        <Text fontSize="32px" >Настроить список городов</Text>

                        <Formik<any>
                            enableReinitialize
                            initialValues={{}}
                            onSubmit={
                                () => console.log('1')
                            }
                        >
                            {({ isSubmitting, dirty, isValid, values }) => (
                                <Form id="filter-form" style={{display: "flex", flexDirection: "column", marginTop: '15px'}}>
                                    <Box d={"flex"} gridGap="20px">
                                        <Box flexDir="row">
                                            <TextInput
                                                autoComplete="on"
                                                name='filterValue'
                                                label='Фильтрация'
                                                w="230px"
                                                h="43px"
                                            />
                                        </Box>
                                        <Box>
                                            <TextInput
                                                autoComplete="on"
                                                name='sortValue'
                                                label='Сортировка'
                                                w="230px"
                                                h="43px"
                                            />
                                        </Box>
                                    </Box>
                                </Form>
                            )}
                        </Formik>

                        <Flex w="100%" justifyContent="flex-end">
                            <Button
                                ml='34px'
                                mt="34px"
                                h="41px"
                                w="auto"
                                borderRadius="4px"

                                bg={'rgb(255 255 255 / 8%);'}
                                _focus={{ bg: "#31ce7c" }}
                                _active={{ bg: "#31ce7c" }}
                                _hover={{
                                    bg: '#31ce7c',
                                }}
                            >
                                <Text fontSize="16px" onClick={() => history.push('login')}>Применить изменения</Text>
                            </Button>
                        </Flex>
                    </Box>
                    <Flex wrap={"wrap"} gridGap="20px" mt="20px">
                        <Box w="340px" h="110px" d="flex" alignItems="center" justifyContent="center" border="2px dashed #2f9e85" borderRadius="4px">
                            <Icon as={AiOutlinePlus} h="30px" w="30px" cursor="pointer"/>
                        </Box>
                        {cities?.map((item) => <CityCard
                            key={item.id}
                            name={item.name}
                            item={item}
                            creationDate={convertTimestamp(item.creationDate)}
                        />)}
                    </Flex>
                </Box>
            </Box>
    )
}

{/*#2f9e85*/}