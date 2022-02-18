import React from 'react'
import { Button, Stack } from '@chakra-ui/react'

const MyApp = () => {
    return (
        <Stack spacing={4} direction='row' align='center'>
            <Button colorScheme='teal' size='xs'>
                Button
            </Button>
            <Button colorScheme='teal' size='sm'>
                Button
            </Button>
            <Button colorScheme='teal' size='md'>
                Button
            </Button>
            <Button colorScheme='teal' size='lg'>
                Button
            </Button>
        </Stack>
    )
}

export default MyApp
