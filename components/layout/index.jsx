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
        <Container maxW={{ base:'container.xl', sm:'container.md', lg:'container.xl'}}>
            <NavBar />
          
            <LargeWithLogoCentered />
        </Container>
      </>
    )
  }
  