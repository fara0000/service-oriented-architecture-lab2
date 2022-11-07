import {
    Box,
    Button,
    Divider,
    Flex,
    Icon,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import React, {FC, useState} from 'react';
import {AiOutlinePlus} from "react-icons/ai";
import {CloseIcon} from "../assets/svg/CloseIcon";
import {Form, Formik} from "formik";
import {TextInput} from "../components/input/TextInput";
import {SelectField} from "../components/select";
import {ClimateTypes, GovernmentTypes, LivingStandardTypes} from "../types/enums";
import { useFetch } from "../hooks/useFetch";
import * as urls from "../api/urls";

interface ModalManualProps {

}

export const AddCityModal: FC<ModalManualProps> = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isGovernor, setIsGovernor] = useState(false);
    const token = localStorage.getItem('authToken')
    const [ inputValue, setInputValue ] = useState('');

    const addNewCity = async () => {
        const addCityFetch = useFetch("POST", urls.addCities, '', )
    }

    const closeModal = () => {
        setIsGovernor(false);
        setInputValue('');
        onClose();
        setInputValue('');
    }

    return (
        <Box>
            <Box w="340px" h="110px" d="flex" alignItems="center" justifyContent="center" border="2px dashed #2f9e85" borderRadius="4px" onClick={onOpen}>
                <Icon as={AiOutlinePlus} h="30px" w="30px" cursor="pointer"/>
            </Box>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <ModalOverlay opacity='0.4' />
                <ModalContent
                    mt='10px'
                    mb='0px'
                    minW='699px'
                    h='645'
                    borderRadius="6px"
                    color={'#000000'}
                    bg={'#FFFFFF'}
                    p="20px 28px"
                    overflow="hidden"
                >
                    <ModalHeader p="0">
                        <Flex justifyContent="space-between">
                            <Text align='center' fontSize='22px' fontWeight="700">
                                New City
                            </Text>
                            <Box cursor="pointer" onClick={closeModal}>
                                <CloseIcon />
                            </Box>
                        </Flex>
                    </ModalHeader>
                    <ModalBody p="0">
                        <Formik<any>
                            enableReinitialize
                            initialValues={{}}
                            onSubmit={
                                () => console.log('1')
                            }
                        >
                            {({ isSubmitting, dirty, isValid, values }) => (
                                <Form id="filter-form" style={{display: "flex", justifyContent: "space-between", marginTop: '15px'}}>
                                    <Box d={"flex"}  flexDir="column" gridGap="20px" w="90%" paddingRight="5%">
                                        <Box flexDir="column">
                                            <TextInput
                                                labelStyles={{ color: "#5D5D5D", fontSize: "16px" }}
                                                autoComplete="on"
                                                name='name'
                                                label='City name'
                                                w="100%"
                                                h="43px"
                                                borderRadius="6px"
                                                style={{ border: "1px solid #C4C4C4"}}
                                                required
                                                placeholder='Enter new City name...'
                                                _placeholder={{ color: "#C4C4C4" }}
                                            />
                                        </Box>
                                        <Box flexDir="column">
                                            <TextInput
                                                labelStyles={{ color: "#5D5D5D", fontSize: "16px" }}
                                                autoComplete="on"
                                                name='coordinates'
                                                label='Coordinates'
                                                placeholder='x, y'
                                                w="100%"
                                                h="43px"
                                                borderRadius="6px"
                                                    style={{ border: "1px solid #C4C4C4"}}
                                                required
                                                _placeholder={{ color: "#C4C4C4" }}
                                            />
                                        </Box>
                                        <Box flexDir="column">
                                            <TextInput
                                                labelStyles={{ color: "#5D5D5D", fontSize: "16px" }}
                                                autoComplete="on"
                                                name='population'
                                                label='Population'
                                                type="number"
                                                placeholder='Enter city population...'
                                                w="100%"
                                                h="43px"
                                                borderRadius="6px"
                                                style={{ border: "1px solid #C4C4C4"}}
                                                _placeholder={{ color: "#C4C4C4" }}
                                                required
                                            />
                                        </Box>
                                        <Flex gridGap="20px">
                                            <Box flexDir="column">
                                                <TextInput
                                                    labelStyles={{ color: "#5D5D5D", fontSize: "16px" }}
                                                    autoComplete="on"
                                                    name='area'
                                                    type="number"
                                                    label='Area'
                                                    placeholder='square'
                                                    w="100%"
                                                    h="43px"
                                                    borderRadius="6px"
                                                    style={{ border: "1px solid #C4C4C4"}}
                                                    _placeholder={{ color: "#C4C4C4" }}
                                                />
                                            </Box>
                                            <Box flexDir="column">
                                                <TextInput
                                                    labelStyles={{ color: "#5D5D5D", fontSize: "16px" }}
                                                    autoComplete="on"
                                                    name='metersAboveSeaLevel'
                                                    label='Above sea level'
                                                    type="number"
                                                    placeholder='meters'
                                                    w="100%"
                                                    h="43px"
                                                    borderRadius="6px"
                                                    style={{ border: "1px solid #C4C4C4"}}
                                                    _placeholder={{ color: "#C4C4C4" }}
                                                />
                                            </Box>
                                        </Flex>
                                        <SelectField
                                            name="climate"
                                            label="Climate"
                                            options={[
                                                {
                                                    label: ClimateTypes.TROPICAL_SAVANNA,
                                                    value: ClimateTypes.TROPICAL_SAVANNA,
                                                },
                                                {
                                                    label: ClimateTypes.STEPPE,
                                                    value: ClimateTypes.STEPPE,
                                                },
                                                {
                                                    label: ClimateTypes.OCEANIC,
                                                    value: ClimateTypes.OCEANIC,
                                                },
                                            ]}
                                            placeholder="Add City's Climate"
                                        />
                                    </Box>

                                    <Divider orientation='vertical' height="490px" w="1px" background="rgba(196, 196, 196, 0.5)" />

                                    <Box d={"flex"}  flexDir="column" gridGap="20px" w="90%" paddingLeft="5%">
                                        <SelectField
                                            name="standardOfLiving"
                                            label="Living Standard"
                                            options={[
                                                {
                                                    label: LivingStandardTypes.VERY_LOW,
                                                    value: LivingStandardTypes.VERY_LOW,
                                                },
                                                {
                                                    label: LivingStandardTypes.LOW,
                                                    value: LivingStandardTypes.LOW,
                                                },
                                                {
                                                    label: LivingStandardTypes.MEDIUM,
                                                    value: LivingStandardTypes.MEDIUM,
                                                },
                                                {
                                                    label: LivingStandardTypes.NIGHTMARE,
                                                    value: LivingStandardTypes.NIGHTMARE,
                                                },
                                                {
                                                    label: LivingStandardTypes.ULTRA_HIGH,
                                                    value: LivingStandardTypes.ULTRA_HIGH,
                                                },
                                            ]}
                                            placeholder="Add City's Climate"
                                            required
                                        />

                                        <SelectField
                                            name="government"
                                            label="Government Type"
                                            options={[
                                                {
                                                    label: GovernmentTypes.PUPPET_STATE,
                                                    value: GovernmentTypes.PUPPET_STATE,
                                                },
                                                {
                                                    label: GovernmentTypes.THEOCRACY,
                                                    value: GovernmentTypes.THEOCRACY,
                                                },
                                                {
                                                    label: GovernmentTypes.OLIGARCHY,
                                                    value: GovernmentTypes.OLIGARCHY,
                                                },
                                                {
                                                    label: GovernmentTypes.THALASSOCRACY,
                                                    value: GovernmentTypes.THALASSOCRACY,
                                                },
                                            ]}
                                            placeholder="Add City's Climate"
                                            required
                                        />
                                        <Text color="blue.500" cursor="pointer" onClick={() => setIsGovernor(!isGovernor)}>
                                            {isGovernor ? 'Remove Governor fields...' : 'Add Governor fields...'}
                                        </Text>
                                        {isGovernor ?
                                            <>
                                                <Flex gridGap="20px">
                                                    <Box flexDir="column">
                                                        <TextInput
                                                            labelStyles={{ color: "#5D5D5D", fontSize: "16px" }}
                                                            autoComplete="on"
                                                            name='age'
                                                            label='Age'
                                                            placeholder='Governor age'
                                                            w="100%"
                                                            h="43px"
                                                            type="number"
                                                            borderRadius="6px"
                                                            style={{ border: "1px solid #C4C4C4"}}
                                                            _placeholder={{ color: "#C4C4C4" }}
                                                        />
                                                    </Box>
                                                    <Box flexDir="column">
                                                        <TextInput
                                                            labelStyles={{ color: "#5D5D5D", fontSize: "16px" }}
                                                            autoComplete="on"
                                                            name='height'
                                                            label='Height'
                                                            placeholder='Governor height'
                                                            w="100%"
                                                            h="43px"
                                                            type="number"
                                                            borderRadius="6px"
                                                            style={{ border: "1px solid #C4C4C4"}}
                                                            _placeholder={{ color: "#C4C4C4" }}
                                                        />
                                                    </Box>
                                                </Flex>
                                                <Box flexDir="column">
                                                    <TextInput
                                                        labelStyles={{ color: "#5D5D5D", fontSize: "16px" }}
                                                        autoComplete="on"
                                                        name='birthday'
                                                        label='Birthday'
                                                        placeholder='Enter Governor birthday'
                                                        w="100%"
                                                        h="43px"
                                                        borderRadius="6px"
                                                        style={{ border: "1px solid #C4C4C4"}}
                                                        _placeholder={{ color: "#C4C4C4" }}
                                                    />
                                                </Box>
                                            </>
                                            : null
                                        }
                                    </Box>
                                </Form>
                            )}
                        </Formik>
                    </ModalBody>
                    <ModalFooter p="0" d="flex" justifyContent="space-between">
                        <Button
                            onClick={closeModal}
                            h="38px"
                            w='140px'
                            borderRadius="4px"
                            border={'1px solid #5C59EC'}
                            color="#5C59EC"
                            bg={'transparent'}
                            // _focus={{ bg: "white.700" }}
                            // _active={{ bg: "blue" }}
                            // _hover={{
                            //     bg: '#3047FE',
                            // }}
                        >
                            <Text fontSize="14px">Cancel</Text>
                        </Button>

                        <Button
                            onClick={() => console.log('1')}
                            h="38px"
                            w='140px'
                            borderRadius="4px"
                            bg={'#5C59EC;'}
                            _focus={{ bg: "white.700" }}
                            _active={{ bg: "blue" }}
                            _hover={{
                                bg: 'blue.500',
                            }}
                        >
                            <Text fontSize="14px" color="#FFF">Save</Text>
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}
