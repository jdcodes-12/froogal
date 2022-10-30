import { React, useState, useRef, useEffect } from 'react';
import { getUserData } from '../../../utils/functions/getUserData';
import { storage } from '../../../utils/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import  { FiUser, 
          FiLock, 
          FiImage,
          FiMail
        } from 'react-icons/fi';

import  { Button,
          Text,
          Flex,
          Drawer,
          DrawerOverlay,
          DrawerCloseButton,
          DrawerContent,
          DrawerHeader,
          DrawerBody,
          DrawerFooter,
          useDisclosure,
          FormControl,
          FormLabel,
          FormHelperText,
          FormErrorMessage,
          InputGroup,
          InputLeftAddon,
          Input,
          InputRightElement,
          Image
        } from '@chakra-ui/react';

const UserProfileInfoDrawer = ({ userID = null, linkName }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef()
    const [user, setUser] = useState({
      firstName: "",
      lastName: "",
      email: "",
      avatarURL: "",
      password: "",
    });
    const [file, setFile] = useState("");
    const [show, setShow] = useState(false);
    const [percentage, setPercentage] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
        const data = await getUserData(userID);
        setUser((prev) => ({ ...prev, ...data}));
        } catch (error) {
          console.log(error); 
        }
      };
      fetchData();
    }, []);

    useEffect(() => {
      console.log({ user });
    }, [user]);

    useEffect(() => {
      const uploadFile = () => {
        const name = Date.now() + file.name;
        const storageRef = ref(storage, name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setPercentage(progress);
            switch (snapshot.state) {
              case "paused":
                console.log("Upload paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
              default: 
                break;
            }
          },
          (error) => {
            console.log(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setUser((prev) => ({...prev, avatarURL: downloadURL}));
            });
          });
      };
      file && uploadFile() 
    }, [file]);

    const reset = () => {
      setFile("");
    }

    const handleClick = () => setShow((prev) => !prev);

    const onPasswordCheck = () => {
      console.log("CheckingPassword");
    }

    const onChange = (e) => {
      setUser((prev) => ({
        ...prev, [e.target.name]: e.target.value
      }));
    };

    const onFileChange = (e) => {
      setFile(e.target.files[0]);
    }

    const userSubmission = (e) => {
      e.preventDefault();
      
    };

    // Need to setup the aria connections for better hit
    // detection in sidebar links. As of right now
    // only clicking on the link text opens drawer.
    // This is not the most accessible.
    return (
      <>
        <Button ref={btnRef} 
                onClick={onOpen}
                variant='unstyled'
        >
          <Text fontSize='xl'>
            {linkName}
          </Text>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={() => {
            onClose();
            reset();
          }}
          finalFocusRef={btnRef}
          size='lg'
        >
          <DrawerOverlay />
          <DrawerContent display='flex' flexDirection='column' pl='6px'>
            <DrawerCloseButton mt='16px' fontSize='16px'/>
            <DrawerHeader fontSize='4xl' mb='16px' shadow='md' >My Profile</DrawerHeader>
            <DrawerBody >
              <Flex direction='column' justify='start' gap='48px' mt='32px'>
                <FormControl shadow='sm'>
                  <FormLabel fontSize='2xl' fontWeight='medium'>First Name</FormLabel>
                  <InputGroup size='lg' variant='flushed'>
                    <InputLeftAddon children={<FiUser size='32px' />} pr='16px'/>
                    <Input type='text' name='firstName' onChange={onChange} value={user.firstName} placeholder='BigMoney'/>
                  </InputGroup>
                </FormControl>
                <FormControl shadow='sm'>
                  <FormLabel fontSize='2xl' fontWeight='medium'>Last Name</FormLabel>
                  <InputGroup size='lg' variant='flushed'>
                    <InputLeftAddon children={<FiUser size='32px' />} pr='16px'/>
                    <Input type='text' name='lastName' onChange={onChange} value={user.lastName} placeholder='Millionaire'/>
                  </InputGroup>
                </FormControl>
                <FormControl shadow='sm'>
                  <FormLabel fontSize='2xl' fontWeight='medium'>Avatar</FormLabel>
                  <InputGroup alignItems='center' size='lg' variant='flushed'>
                  <Image h='100px' display='block' rounded='full' objectFit='cover' w='100px' mr='10px' src={
                      user.avatarURL 
                      ? user.avatarURL 
                      : file
                      ? URL.createObjectURL(file) 
                      : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} />
                    <InputLeftAddon children={<FiImage size='32px' />} pr='16px'/>
                    <Input type="file" accept='image/*' name='avatarURL' onChange={onFileChange} />
                  </InputGroup>
                </FormControl>
                <FormControl shadow='sm'>
                  <FormLabel fontSize='2xl' fontWeight='medium'>Email</FormLabel>
                  <InputGroup size='lg' variant='flushed'>
                    <InputLeftAddon children={<FiMail size='32px' />} pr='16px'/>
                    <Input type='email' name='email' onChange={onChange} value={user.email} placeholder='BigMoneyMillionaire@froogal.com'/>
                  </InputGroup>
                </FormControl>
                <FormControl shadow='sm'>
                  <FormLabel fontSize='2xl' fontWeight='medium'>Password</FormLabel>
                  <InputGroup size='lg' variant='flushed'>
                    <InputLeftAddon children={<FiLock size='32px' />} pr='16px'/>
                    <Input
                      pr='4.5rem'
                      name='password'
                      onChange={onChange}
                      type={show ? 'text' : 'password'}
                      placeholder='Enter new password'
                    />
                    <InputRightElement width='4.5rem' mr='10px'>
                      <Button mb='8px' size='md' onClick={handleClick} colorScheme='purple'>
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <FormControl shadow='sm'>
                  <FormLabel fontSize='2xl' fontWeight='medium'>Confirm Password</FormLabel>
                  <InputGroup size='lg' variant='flushed'>
                    <InputLeftAddon children={<FiLock size='32px' />} pr='16px'/>
                      <Input
                        pr='4.5rem'
                        onChange={onPasswordCheck}
                        type={show ? 'text' : 'password'}
                        placeholder='Enter confirmation password'
                      />
                      <InputRightElement width='4.5rem' mr='10px'>
                        <Button mb='8px' size='md' onClick={handleClick} colorScheme='purple'>
                          {show ? 'Hide' : 'Show'}
                        </Button>
                      </InputRightElement>
                  </InputGroup>
                </FormControl>
              </Flex>
            </DrawerBody>
            <DrawerFooter mt='5px' borderTop='2px' borderColor='lightgray'>
              <Flex mt='5px' justify='space-evenly' align='center' w='full'>
                <Button variant='unstyled' 
                        rounded='full' 
                        colorScheme='purple'
                        size='lg'
                        fontSize='xl'
                        onClick={onClose}
                >
                  Cancel
                </Button>
                <Button 
                  variant='solid' 
                  rounded='full' 
                  colorScheme='purple'
                  size='lg'
                  fontSize='xl'
                  disabled={percentage && percentage < 100}
                  onClick={userSubmission}
                >
                  Save
                </Button>
              </Flex>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default UserProfileInfoDrawer;