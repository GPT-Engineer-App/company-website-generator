import { Box, Container, Heading, Text, VStack, SimpleGrid, Image, Button, Icon, HStack } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Our Company
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Leading innovation with excellence
        </Text>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box textAlign="center">
            <Heading size="lg">About Us</Heading>
            <Text mt={4}>We are a tech company focused on delivering top-notch solutions. Our team is dedicated to pushing the boundaries of what's possible, creating innovative products that drive progress.</Text>
          </Box>
          <Box textAlign="center">
            <Heading size="lg">Our Services</Heading>
            <Text mt={4}>We offer a wide range of services including web development, mobile applications, and cloud solutions. Our approach is tailored to meet the unique needs of each client.</Text>
          </Box>
          <Box textAlign="center">
            <Heading size="lg">Contact Us</Heading>
            <VStack spacing={3} mt={4} alignItems="center">
              <Button leftIcon={<Icon as={FaPhone} />} variant="ghost">
                +123 456 7890
              </Button>
              <Button leftIcon={<Icon as={FaEnvelope} />} variant="ghost">
                info@ourcompany.com
              </Button>
              <Button leftIcon={<Icon as={FaMapMarkerAlt} />} variant="ghost">
                123 Business Rd, City
              </Button>
            </VStack>
          </Box>
        </SimpleGrid>

        <Box w="full">
          <Heading size="lg" textAlign="center">
            Meet Our Team
          </Heading>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={10} mt={8}>
            <VStack>
              <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNDk1ODI4M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Team Member 1" />
              <Text fontWeight="bold">John Doe</Text>
              <Text>CEO</Text>
            </VStack>
            <VStack>
              <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNDk1ODI4M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Team Member 2" />
              <Text fontWeight="bold">Jane Smith</Text>
              <Text>CTO</Text>
            </VStack>
            <VStack>
              <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNDk1ODI4M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Team Member 3" />
              <Text fontWeight="bold">Emily Johnson</Text>
              <Text>Lead Developer</Text>
            </VStack>
            <VStack>
              <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1474176857210-7287d38d27c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHw0fHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNDk1ODI4M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Team Member 4" />
              <Text fontWeight="bold">Michael Brown</Text>
              <Text>Marketing Head</Text>
            </VStack>
          </SimpleGrid>
        </Box>

        <Box w="full" mt={10}>
          <Heading size="lg" textAlign="center">
            Follow Us
          </Heading>
          <HStack justifyContent="center" spacing={4} mt={4}>
            <Icon as={FaFacebook} w={8} h={8} />
            <Icon as={FaTwitter} w={8} h={8} />
            <Icon as={FaLinkedin} w={8} h={8} />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
