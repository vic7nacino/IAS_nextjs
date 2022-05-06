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
  import LargeWithLogoCentered from '../components/footer'
  
  export default function newIas() {
    return (
      <>
        <Heading>
          <title>IAS Oracle Entry</title>
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
          </Grid>
        </Container>
        <LargeWithLogoCentered />
      </>
    )
  }
  