import React, {FC} from "react";
import {Box, Button, Flex, Text} from "@chakra-ui/react";
import {Form, Formik} from "formik";
import {TextInput} from "../../components/input/TextInput";

export type Props = {

}

export const SettingsFormBlock: FC<Props> = () => {
    return (
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
                    <Text fontSize="16px">Применить изменения</Text>
                </Button>
            </Flex>
        </Box>
    )
}