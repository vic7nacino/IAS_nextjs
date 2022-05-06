import {
    Box,
    chakra,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
    Button
  } from '@chakra-ui/react'
import { useState } from 'react'
  
  function StatFunc(props) {
    const { title, stat } = props;
    return (
      <Stat
        textAlign={'center'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <StatLabel fontWeight={'medium'} isTruncated>
          {title}
        </StatLabel>
        <StatNumber fontSize={'lg'} fontWeight={'medium'}>
          {stat}
        </StatNumber>
      </Stat>
    );
  }
  
  export default function IasStatsCard({ iastatData }) {
    console.log(iastatData)
    const [ newdata, setNewData ] = useState(iastatData.newData)
    const [ closedData, setClosedData] = useState(iastatData.closedData)
    return (
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={'center'}
          fontWeight={'bold'}>
          IAS STATUS
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }} mt='4'>
          <StatFunc title={'New'} stat={newdata} />
          <StatFunc title={'Closed'} stat={closedData} />
          <StatFunc title={'Rejected'} stat={'4'} />
          <StatFunc title={'Cancelled'} stat={'1'} />
        </SimpleGrid>
      </Box>
    );
  }
  