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
  } from "@chakra-ui/react"
  import NavBar from "../components/navbar"
  import StatsCard from "../components/statscard"
  import LargeWithLogoCentered from '../components/footer'
  
  export default function newIas() {
    return (
      <>
        <Heading>
          <title>New IAS Entry</title>
          <meta name="description" content="New Inventory Adjustment Slip Entry" />
          <link rel="icon" href="/favicon.ico" />
        </Heading>
        <Container maxW={{ base:'container.xl' }}>
          <NavBar />
          <Grid
            h='auto'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(6, 1fr)'
            gap={2}
            mt='5'
          >
            <GridItem colSpan={4} maxW={{ base:'container.xl' }} boxShadow='2xl' p='6' rounded='md' bg='white'>
                NEW IAS ENTRY
            </GridItem>
            <GridItem  colSpan={6} >
              <LargeWithLogoCentered />
            </GridItem>
          </Grid>
        </Container>
      </>
    )
  }
  