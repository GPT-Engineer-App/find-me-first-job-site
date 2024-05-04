// Complete the Index page component here
// Use chakra-ui
import React from "react";
import { Box, Flex, Text, Button, Input, Image, VStack, HStack, FormControl, FormLabel, InputGroup, InputRightElement, IconButton, useToast, Heading, Link } from "@chakra-ui/react";
import { FaSearch, FaUserPlus, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaBuilding, FaGraduationCap, FaBriefcase, FaPhone, FaGlobe, FaPlus, FaUserTie } from "react-icons/fa";

const Index = () => {
  const toast = useToast();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Flex direction="column" align="center" justify="center" h="100vh" bgGradient="linear(to-r, orange.200, white)">
      <VStack spacing={4} w="full" maxW="md" p={8} borderWidth={1} borderRadius="lg" boxShadow="lg">
        <Image src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqb2IlMjBzZWFyY2h8ZW58MHx8fHwxNzEzOTA3MDMzfDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="full" boxSize="150px" alt="Find me First Logo" />
        <Heading as="h1" size="xl" textAlign="center">
          Find me First
        </Heading>
        <Text fontSize="md" color="gray.600">
          Connecting Job Seekers and Recruiters Efficiently
        </Text>

        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <InputGroup>
            <Input type="email" placeholder="Enter your email" />
            <InputRightElement children={<FaEnvelope color="gray.300" />} />
          </InputGroup>
        </FormControl>

        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input type={showPassword ? "text" : "password"} placeholder="Enter password" />
            <InputRightElement>
              <IconButton bg="transparent" variant="ghost" icon={showPassword ? <FaEyeSlash /> : <FaEye />} onClick={handleShowClick} />
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button leftIcon={<FaUserPlus />} colorScheme="orange" w="full">
          Register as Job Seeker
        </Button>
        <Button leftIcon={<FaUserTie />} colorScheme="orange" w="full">
          Register as Recruiter/Company
        </Button>
        <Button leftIcon={<FaUserPlus />} colorScheme="orange" variant="outline" w="full">
          Login as Job Seeker
        </Button>
        <Button leftIcon={<FaUserTie />} colorScheme="orange" variant="outline" w="full">
          Login as Recruiter/Company
        </Button>
        <HStack spacing={2} justify="center">
          <Text fontSize="sm">New here?</Text>
          <Link color="orange.500" href="#">
            Sign up
          </Link>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default Index;
