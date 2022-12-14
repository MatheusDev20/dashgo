import React from 'react'
import { Flex, Text, Input, Icon, Stack, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

export const Header = () => {
  return (
    <Flex
      w='100%'
      as='header'
      maxWidth={1480}
      h='20'
      mx='auto'
      mt='4'
      px='6'
      border='1px solid red'
      align='center'>

      <Text
        fontSize='3xl'
        fontWeight='bold'
        letterSpacing='tight'
        w='64'
      >
        dashgo
        <Text as='span' color='pink.500' ml='1'>.</Text>
      </Text>

      <Flex
        as='label'
        flex='1'
        py='4'
        px='8'
        ml='6'
        maxWidth='400'
        color='gray.200'
        alignSelf='center'
        position='relative'
        bg='gray.800'
        borderRadius='full'
      >

        <Input
          color='gray.50'
          variant='unstyled'
          placeholder='Buscar na plataforma'
          _placeholder={{ color: 'gray.400' }}
          px='4'
          mr='4' />

        <Icon as={RiSearchLine} fontSize='20' />

      </Flex>
      <Flex align='center' ml='auto'>
        <HStack spacing='8' mx='8' px='8' py='1' color='gray.300' borderRightWidth={1} borderColor='gray.700'>
          <Icon as={RiNotificationLine} fontSize='20' />
          <Icon as={RiUserAddLine} fontSize='20' />
        </HStack>

        <Flex align='center'>
          <Box mr='4' textAlign='right'>
            <Text>Matheus de Paula</Text>
            <Text color='gray.300'>matheusdev20@gmail.com</Text>
          </Box>

          <Avatar size='md' name='Matheus de Paula' src='https://github.com/MatheusDev20.png' />
        </Flex>

      </Flex>

    </Flex>
  )
}
