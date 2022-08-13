import { useState } from "react";

// Dev components
import { ContentContainer } from "../Components/Containers";

// Nativebase components
import {
  Box,
  FormControl,
  Heading,
  Input,
  Button,
  VStack,
  Link,
  HStack,
  Text,
  Icon,
} from "native-base";

// Icons
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const ForgetPassword = ({ navigation }) => {
  // useStates
  const [passwordResetEmail, setPasswordResetEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // On sumbmit -> login
  const onSubmitForgerPassword = () => {
    try {
      setIsLoading(true);
      alert("Password forget succeed!");
    } catch (error) {}
  };

  return (
    <ContentContainer>
      <Box w="90%" py={10}>
        <Heading
          size="xl"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          textAlign="center"
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
          textAlign="center"
        >
          Provide your email to continue!
        </Heading>

        <VStack space={2} mt="5">
          <FormControl isRequired>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input
              type="email"
              value={passwordResetEmail}
              onChangeText={(text) => setPasswordResetEmail(text)}
              placeholder="User101@gmail.com"
              size="lg"
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="person" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
            />
          </FormControl>
          <Button
            mt="2"
            colorScheme="primary"
            size="lg"
            leftIcon={<Icon as={MaterialCommunityIcons} name="lock-reset" />}
            onPress={() => onSubmitForgerPassword()}
            isLoading={isLoading}
            isLoadingText="Signingin..."
          >
            Forget Password
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              I'm a new user.{" "}
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              onPress={() => navigation.navigate("Signup")}
            >
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </ContentContainer>
  );
};

export default ForgetPassword;
