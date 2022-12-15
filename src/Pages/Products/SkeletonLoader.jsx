import React from 'react'
import { Box, SkeletonText } from '@chakra-ui/react'

const SkeletonLoader = () => {
    return (
        <>
            <Box padding='6' boxShadow='lg' bg='white'>
                <SkeletonText mt='4' noOfLines={1} skeletonHeight='280px' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='4' />
            </Box>

            <Box padding='6' boxShadow='lg' bg='white'>
                <SkeletonText mt='4' noOfLines={1} skeletonHeight='280px' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='4' />
            </Box>

            <Box padding='6' boxShadow='lg' bg='white'>
                <SkeletonText mt='4' noOfLines={1} skeletonHeight='280px' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='4' />
            </Box>

            <Box padding='6' boxShadow='lg' bg='white'>
                <SkeletonText mt='4' noOfLines={1} skeletonHeight='280px' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='4' />
            </Box>

            <Box padding='6' boxShadow='lg' bg='white'>
                <SkeletonText mt='4' noOfLines={1} skeletonHeight='280px' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='4' />
            </Box>

            <Box padding='6' boxShadow='lg' bg='white'>
                <SkeletonText mt='4' noOfLines={1} skeletonHeight='280px' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='4' />
            </Box>

            <Box padding='6' boxShadow='lg' bg='white'>
                <SkeletonText mt='4' noOfLines={1} skeletonHeight='280px' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='4' />
            </Box>

            <Box padding='6' boxShadow='lg' bg='white'>
                <SkeletonText mt='4' noOfLines={1} skeletonHeight='280px' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='4' />
            </Box>

        </>
    )
}

export default SkeletonLoader