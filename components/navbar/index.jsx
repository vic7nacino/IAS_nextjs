import {
    Heading,
    Flex,
    Box,
    Spacer,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    HStack,
    Text,
    Icon,
    Link
  } from '@chakra-ui/react'
import { HamburgerIcon, AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon } from '@chakra-ui/icons'
import react from 'react'
import { AiOutlineFileAdd, AiOutlineHome } from 'react-icons/ai'

function NavBar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = react.useRef()
  
    return (
      <>
        <Flex bg='white' boxShadow='xl' rounded='md' position='fixed' w='100%' zIndex='9' top='0'>
            <Box p='2'>
                <HStack spacing={0}>
                    <Heading>
                        <Text
                        bgGradient='linear(to-br, #E97D2E 35%, #FFFFFF, #465E66 50%)'
                        bgClip='text'
                      >
                        I
                      </Text>
                    </Heading>
                    <Heading color={'#465E66'}>AS</Heading>
                </HStack>
            </Box >
            <Box p='2'>
              <HStack>
                  <Link href="/">
                    <Icon as={AiOutlineHome} boxSize={10} />
                  </Link>
              </HStack>
            </Box >
            <Box p='2'>
                <HStack>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<AddIcon />}
                            variant='outline'
                        />
                        <MenuList>
                          <Link href="/new-ias">
                            <MenuItem icon={<AiOutlineFileAdd />}>New IAS</MenuItem>
                          </Link>
                          <Link href="/new-ias-ora">
                            <MenuItem icon={<AiOutlineFileAdd />}>New IAS Oracle</MenuItem>
                          </Link>
                        </MenuList>
                    </Menu>
                </HStack>
            </Box >
            <Spacer />
            <Box p='2'>
                <HStack>
                    <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                      Login
                    </Button>
                </HStack>
            </Box>
        </Flex>

        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
  
            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  export default NavBar