import { 
    Container,
    Grid,
    GridItem,
    ChakraProvider,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    extendTheme,
    Select,
    Radio,
    RadioGroup,
    HStack,
    Textarea,
    Text,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    IconButton,
    Stack
  } from "@chakra-ui/react"
import { AddIcon, RepeatIcon } from '@chakra-ui/icons'
  const activeLabelStyles = {
    transform: 'scale(0.85) translateY(-24px)',
  }
  export const theme = extendTheme({
    components: {
      Form: {
        variants: {
          floating: {
            container: {
              _focusWithin: {
                label: {
                  ...activeLabelStyles,
                },
              },
              'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label':
                {
                  ...activeLabelStyles,
                },
              label: {
                top: 0,
                left: 0,
                zIndex: 2,
                position: 'absolute',
                backgroundColor: 'white',
                pointerEvents: 'none',
                mx: 3,
                px: 1,
                my: 2,
                transformOrigin: 'left top'
              },
            },
          },
        },
      },
    },
  })
  export default function NewIasEntry() {
    return (
      <>
{/* ================================= START OF IAS TICKET INFORMATION ================================= */}
        <Container
          h='auto'
          maxW={{ base:'container.xl', sm:'container.md', lg:'container.sm'}}
          gap={2}
          mt='5'
          boxShadow='2xl' p='6' rounded='md' bg='white'
        >
          <ChakraProvider theme={theme}>
            <Grid
              h='auto'
              templateRows='repeat(2, 1fr)'
              templateColumns='repeat(1, 1fr)'
              gap={5}
              mt='5px'
            >
              <GridItem>
                <Text fontSize='4xl'>IAS TICKET INFORMATION</Text>
                <hr />
              </GridItem>
              <GridItem>
                <FormControl as='fieldset' id='site' isRequired>
                  <FormLabel as='legend'>Site</FormLabel>
                  <RadioGroup>
                    <HStack spacing='24px'>
                      <Radio value='Sasuke'>OSPI</Radio>
                      <Radio value='Nagato'>SSMP</Radio>
                    </HStack>
                  </RadioGroup>
                </FormControl>
              </GridItem>
              <GridItem mt={3}>
                  <FormControl variant='floating' id='requestType' isRequired>
                    <Select placeholder=' '>
                      <option>INVENTORY WRITE-ON</option>
                      <option>INVENTORY WRITE-OFF</option>
                      <option>QUANTITY ADJUSTMENT</option>
                      <option>LOT CLASS CONVERSION</option>
                      <option>DCR (DEVICE CHANGE REQUEST)</option>
                    </Select>
                    <FormLabel>Request Type</FormLabel>
                    <FormErrorMessage>Your First name is invalid</FormErrorMessage>
                  </FormControl>
              </GridItem>
              <GridItem>
                <FormControl variant='floating' id='purpose' isRequired>
                <Textarea />
                  <FormLabel>Purpose Description</FormLabel>
                  <FormErrorMessage>Your First name is invalid</FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl variant='floating' id='area' isRequired>
                  <Select placeholder=' '>
                    <option>ASSEMBLY PLANNING</option>
                  </Select>
                  <FormLabel>Area</FormLabel>
                  <FormErrorMessage>Your First name is invalid</FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl variant='floating' id='department' isRequired>
                  <Select placeholder=' '>
                    <option>ASSEMBLY</option>
                    <option>TEST</option>
                  </Select>
                  <FormLabel>Department</FormLabel>
                  <FormErrorMessage>Your First name is invalid</FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl variant='floating' id='first-name' isRequired>
                  <Input placeholder='Auto fill up from LDAP. to be disabled' />
                  <FormLabel>Supervisor</FormLabel>
                  <FormErrorMessage>Your First name is invalid</FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl variant='floating' id='first-name' isRequired>
                  <Input placeholder=' ' />
                  <FormLabel>Source Part Item</FormLabel>
                  <FormErrorMessage>Your First name is invalid</FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl variant='floating' id='first-name' isRequired>
                  <Input placeholder=' ' />
                  <FormLabel>Target Part Item</FormLabel>
                  <FormErrorMessage>Your First name is invalid</FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl variant='floating' id='first-name' isRequired>
                  <Input placeholder=' ' />
                  <FormLabel>Custom Source</FormLabel>
                  <FormErrorMessage>Your First name is invalid</FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl variant='floating' id='first-name' isRequired>
                  <Input placeholder=' ' />
                  <FormLabel>Routing</FormLabel>
                  <FormErrorMessage>Your First name is invalid</FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl variant='floating' id='first-name' isRequired>
                  <Input placeholder=' ' />
                  <FormLabel>Change log</FormLabel>
                  <FormErrorMessage>Your First name is invalid</FormErrorMessage>
                </FormControl>
              </GridItem>
            </Grid>
          </ChakraProvider>
        </Container>
{/* ================================= END OF IAS TICKET INFORMATION ================================= */}
{/* ================================= START OF LOT DETAILS ================================= */}
        <Container
          h='auto'
          maxW={{ base:'container.xl', sm:'container.md', lg:'container.sm'}}
          gap={2}
          mt='5'
          boxShadow='2xl' p='6' rounded='md' bg='white'
        >
          <ChakraProvider theme={theme}>
            <Grid
              h='auto'
              templateRows='repeat(2, 1fr)'
              templateColumns='repeat(1, 1fr)'
              gap={1}
              mt='5px'
            >
              <GridItem>
                <Text fontSize='4xl'>LOT DETAILS</Text>
                <hr />
              </GridItem>
              <GridItem>
                <HStack direction='row' spacing={4}>
                  <IconButton
                    colorScheme='green'
                    aria-label='Search database'
                    icon={<AddIcon />}
                  />
                  <IconButton
                    colorScheme='blue'
                    aria-label='Search database'
                    icon={<RepeatIcon />}
                  />
                </HStack>
              </GridItem>
              <GridItem mt='2'>
                <HStack spacing={0}>
                  <FormControl variant='floating' id='lotNo' isRequired>
                    <Input placeholder=' ' />
                    <FormLabel>LOT NO</FormLabel>
                    <FormErrorMessage>Your First name is invalid</FormErrorMessage>
                  </FormControl>
                  <FormControl variant='floating' id='deviceNo' isRequired>
                    <Input placeholder=' ' />
                    <FormLabel>DEVICE NO</FormLabel>
                    <FormErrorMessage>Your First name is invalid</FormErrorMessage>
                  </FormControl>
                  <FormControl variant='floating' id='lotClass' isRequired>
                    <Select placeholder=' '>
                      <option>LOT CLASS 1</option>
                      <option>LOT CLASS 2</option>
                    </Select>
                    <FormLabel>LOT CLASS</FormLabel>
                    <FormErrorMessage>Your First name is invalid</FormErrorMessage>
                  </FormControl>
                  <FormControl id='qty' isRequired>
                    <NumberInput min={1} >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                    <FormLabel style={{
                      top: -11,
                      left: 15,
                      zIndex: 2,
                      position: 'absolute',
                      backgroundColor: 'white',
                      pointerEvents: 'none',
                      mx: 3,
                      px: 1,
                      my: 2,
                      fontSize:14
                    }}>QTY</FormLabel>
                    <FormErrorMessage>Your First name is invalid</FormErrorMessage>
                  </FormControl>
                </HStack>
              </GridItem>
            </Grid>
          </ChakraProvider>
        </Container>
{/* ================================= END OF LOT DETAILS ================================= */}
      </>
    )
  }
  