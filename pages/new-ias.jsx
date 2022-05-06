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
  import NewIasEntry from "../components/forms/new-ias"
  
  export default function newIas() {
    return (
      <>
        <Heading>
          <title>IAS Entryw</title>
          <meta name="description" content="Inventory Adjustment Slip" />
          <link rel="icon" href="/favicon.ico" />
        </Heading>
        <NavBar />
        <Container maxW={{ base:'container.xl', sm:'container.md', lg:'container.xl'}} mt='5em'>
          <NewIasEntry />
        </Container>
        <LargeWithLogoCentered />
      </>
    )
  }
  