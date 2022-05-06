import { 
  Container,
  Heading,
  Grid,
  GridItem, 
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Flex
} from "@chakra-ui/react"
import NavBar from "../components/navbar"
import IasStatsCard from '../components/statscard/ias-stats-card'
import IasOracleStatsCard from "../components/statscard/ias-oracle-stats-card"
import LargeWithLogoCentered from '../components/footer'

export default function Home() {
  return (
    <>
      <Heading>
        <title>IAS Dashboard</title>
        <meta name="description" content="Inventory Adjustment Slip" />
        <link rel="icon" href="/favicon.ico" />
      </Heading>
      <NavBar />
      <Container maxW={{ base:'container.xl', sm:'container.md', lg:'container.xl'}} mt='5em'>
        <Grid
          h='auto'
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(7, 1fr)'
          gap={2}
          mt='5'
        >
          <GridItem colSpan={{base: '5', sm:'7', lg:'5'}} boxShadow='2xl' p='6' rounded='md' bg='white'>
            <Table w='auto' colorScheme='facebook'>
            <TableCaption>Recent IAS entry</TableCaption>
              <Thead>
                <Tr>
                  <Th>IAS #</Th>
                  <Th>STATUS</Th>
                  <Th>TYPE</Th>
                  <Th>AREA / DEPARTMENT</Th>
                  <Th>REQUESTOR</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>01234567</Td>
                  <Td>New</Td>
                  <Td>Lot Class Conversion</Td>
                  <Td>P1 / EBR</Td>
                  <Td>BBM</Td>
                </Tr>
                <Tr>
                  <Td>01234568</Td>
                  <Td>New</Td>
                  <Td>Lot Class Conversion</Td>
                  <Td>P2 / EBR</Td>
                  <Td>Sarah</Td>
                </Tr>
                <Tr>
                  <Td>01234569</Td>
                  <Td>New</Td>
                  <Td>Quantity Adjustment</Td>
                  <Td>PHM / EBR</Td>
                  <Td>BBM Sarah</Td>
                </Tr>
              </Tbody>
            </Table>
          </GridItem>
          <GridItem  colSpan={{base: '2', sm:'7', lg:'2'}} boxShadow='2xl' p='6' rounded='md' bg='white'>
            <IasStatsCard 
              iastatData={{
                'newData':21,
                'closedData': 51
              }} 
            />
          </GridItem>
          <GridItem  colSpan={{base: '5', sm:'7', lg:'5'}} boxShadow='2xl' p='6' rounded='md' bg='white'>
            <Table variant='simple' colorScheme='facebook'>
            <TableCaption>Recent IAS Oracle entry</TableCaption>
              <Thead>
                <Tr>
                  <Th>IAS #</Th>
                  <Th>STATUS</Th>
                  <Th>TYPE</Th>
                  <Th>AREA / DEPARTMENT</Th>
                  <Th>REQUESTOR</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>01234567</Td>
                  <Td>New</Td>
                  <Td>Lot Class Conversion</Td>
                  <Td>P1 / EBR</Td>
                  <Td>BBM</Td>
                </Tr>
                <Tr>
                  <Td>01234568</Td>
                  <Td>New</Td>
                  <Td>Lot Class Conversion</Td>
                  <Td>P2 / EBR</Td>
                  <Td>Sarah</Td>
                </Tr>
                <Tr>
                  <Td>01234569</Td>
                  <Td>New</Td>
                  <Td>Quantity Adjustment</Td>
                  <Td>PHM / EBR</Td>
                  <Td>BBM Sarah</Td>
                </Tr>
              </Tbody>
            </Table>
          </GridItem>
          <GridItem  colSpan={{base: '2', sm:'7', lg:'2'}} boxShadow='2xl' p='6' rounded='md' bg='white'>
            <IasOracleStatsCard 
              iasOraStatData={{
                'newData':18,
                'closedData': 20
              }} 
            />
          </GridItem>
        </Grid>
      </Container>
      <LargeWithLogoCentered />
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}
