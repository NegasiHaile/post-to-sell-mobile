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
import { MaterialIcons } from "@expo/vector-icons";

const initialSigninState = {
  email: "",
  password: "",
};

const Signin = ({ navigation }) => {
  // useStates
  const [showPassword, setShowPassword] = useState(false);
  const [signinCredentials, setSigninCredentials] =
    useState(initialSigninState);
  const [isLoading, setIsLoading] = useState(false);

  // On sumbmit -> login
  const onSubmitSignin = () => {
    try {
      setIsLoading(true);
      alert("Login succeed!");
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
          Sign in to continue!
        </Heading>

        <VStack space={2} mt="5">
          <FormControl isRequired>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input
              type="email"
              value={signinCredentials.email}
              onChangeText={(text) =>
                setSigninCredentials({ ...signinCredentials, email: text })
              }
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
          <FormControl isRequired>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type={showPassword ? "text" : "password"}
              value={signinCredentials.password}
              onChangeText={(text) =>
                setSigninCredentials({ ...signinCredentials, password: text })
              }
              placeholder="******"
              size="lg"
              InputRightElement={
                <Icon
                  as={
                    <MaterialIcons
                      name={showPassword ? "visibility" : "visibility-off"}
                    />
                  }
                  size={5}
                  mr="2"
                  color="muted.400"
                  onPress={() => setShowPassword((prev) => !prev)}
                />
              }
            />
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "indigo.500",
              }}
              alignSelf="flex-end"
              mt="1"
              onPress={() => navigation.navigate("ForgetPassword")}
            >
              Forget Password?
            </Link>
          </FormControl>
          <Button
            mt="2"
            colorScheme="primary"
            size="lg"
            leftIcon={<Icon as={MaterialIcons} name="login" />}
            onPress={() => onSubmitSignin()}
            isLoading={isLoading}
            isLoadingText="Signingin..."
          >
            Sign in
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

export default Signin;
