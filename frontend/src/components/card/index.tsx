import React, {FC} from 'react';
import {
    Avatar,
    AvatarGroup,
    Box,
    Flex,
    Button,
    Icon,
    Image,
    Text,
    useColorModeValue, DarkMode, Badge, Divider,
} from "@chakra-ui/react";
// Assets
import {MdPeople, MdTimer, MdVideoLibrary} from "react-icons/md";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import {CityType} from "../../types";

export type Props = {
    name: string;
    item: CityType;
    creationDate: string;
}

export const CityCard: FC<Props> = ({ name, creationDate}) => {
    let boxBg = useColorModeValue("white !important", "#2f9e85 !important");
    let secondaryBg = useColorModeValue("gray.50", "whiteAlpha.100");
    let mainText = useColorModeValue("gray.800", "white");
    let iconBox = useColorModeValue("gray.100", "whiteAlpha.200");
    let iconColor = useColorModeValue("brand.200", "white");

    return (
        <Flex
            borderRadius='20px'
            bg={boxBg}
            p='20px 20px 12px 20px'
            h='auto'
            w={{ base: "300px", md: "345px" }}
            alignItems='center'
            direction='column'>
            <Flex w='100%' mb='18px'>
                <Text
                    my='auto'
                    fontWeight='600'
                    color={mainText}
                    textAlign='center'
                    fontSize='xl'
                    me='auto'
                >
                    {name}
                </Text>
                <Button
                    w='24px'
                    h='24px'
                    align='center'
                    justify='center'
                    borderRadius='12px'
                    bg={iconBox}>
                    <Icon
                        w='24px'
                        h='24px'
                        as={IoEllipsisHorizontalSharp}
                        color={iconColor}
                    />
                </Button>
            </Flex>
            {/*<Text*/}
            {/*    fontWeight='600'*/}
            {/*    color={mainText}*/}
            {/*    textAlign='start'*/}
            {/*    fontSize='xl'*/}
            {/*    w='100%'>*/}
            {/*    Simmmple Web*/}
            {/*</Text>*/}
            <Divider orientation='horizontal' />
            <Flex justifyItems="space-between" width="100%" mt="8px">
                <Flex w="100%">
                    <Text
                        fontWeight='600'
                        color={mainText}
                        // textAlign='center'
                        fontSize='14px'
                        // me='auto'
                    >
                        Created:
                    </Text>
                    <Text
                        ml="5px"
                        fontWeight='600'
                        color={mainText}
                        // textAlign='center'
                        fontSize='14px'
                        // me='auto'
                    >
                        {creationDate}
                    </Text>
                </Flex>
                <Flex mt='auto' justify='flex-end' w='100%' align='center'>
                    <DarkMode>
                        <Text
                            borderRadius='9px'
                            fontSize="14px"
                            background="none"
                            color='#d5d020'
                            textAlign='center'
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            cursor='pointer'
                        >
                            Learn More
                            <Icon as={BsArrowRight} ml="5px"/>
                        </Text>
                    </DarkMode>
                </Flex>
            </Flex>
        </Flex>
    )
}
