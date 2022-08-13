import { useState } from "react";

// Dev components
import { ContentContainer } from "../Components/Containers";

// Nativebase components
import {
  Box,
  FormControl,
  Heading,
  Icon,
  Input,
  Button,
  Link,
  HStack,
  Text,
  VStack,
} from "native-base";

// Icons
import { MaterialIcons } from "@expo/vector-icons";

// variables
const initialSigninState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  retypePassword: "",
};

const Signup = ({ navigation }) => {
  // useStates
  const [showPassword, setShowPassword] = useState(false);
  const [signupCredentials, setSignupCredentials] =
    useState(initialSigninState);
  const [isLoading, setIsLoading] = useState(false);

  // On sumbmit -> login
  const onSubmitSignup = () => {
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
          Sign up to continue!
        </Heading>

        <VStack space={2} mt="5">
          <FormControl isRequired>
            <FormControl.Label>First Name</FormControl.Label>
            <Input
              type="text"
              value={signupCredentials.firstName}
              onChangeText={(text) =>
                setSignupCredentials({
                  ...signupCredentials,
                  firstName: text,
                })
              }
              placeholder="First name"
              size="lg"
            />
          </FormControl>

          <FormControl>
            <FormControl.Label>Last Name</FormControl.Label>
            <Input
              type="text"
              value={signupCredentials.lastName}
              onChangeText={(text) =>
                setSignupCredentials({ ...signupCredentials, lastName: text })
              }
              placeholder="Last name"
              size="lg"
            />
          </FormControl>

          <FormControl isRequired isEmail>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input
              type="email"
              value={signupCredentials.email}
              onChangeText={(text) =>
                setSignupCredentials({ ...signupCredentials, email: text })
              }
              placeholder="User101@gmail.com"
              size="lg"
            />
          </FormControl>

          <FormControl>
            <FormControl.Label>Phone number</FormControl.Label>
            <Input
              type="number"
              value={signupCredentials.phoneNumber}
              onChangeText={(text) =>
                setSignupCredentials({
                  ...signupCredentials,
                  phoneNumber: text,
                })
              }
              placeholder="+251 ... ... ..."
              size="lg"
            />
          </FormControl>

          <FormControl isRequired>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type={showPassword ? "text" : "password"}
              value={signupCredentials.password}
              onChangeText={(text) =>
                setSignupCredentials({ ...signupCredentials, password: text })
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
          </FormControl>

          <FormControl isRequired>
            <FormControl.Label>Retype Password</FormControl.Label>
            <Input
              type={showPassword ? "text" : "password"}
              value={signupCredentials.retypePassword}
              onChangeText={(text) =>
                setSignupCredentials({
                  ...signupCredentials,
                  retypePassword: text,
                })
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
          </FormControl>

          <Button
            mt="2"
            colorScheme="primary"
            size="lg"
            leftIcon={<Icon as={MaterialIcons} name="login" />}
            onPress={() => onSubmitSignup()}
            isLoading={isLoading}
            isLoadingText="Signingup..."
          >
            Sign up
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
              onPress={() => navigation.navigate("Signin")}
            >
              Sign in
            </Link>
          </HStack>
        </VStack>
      </Box>
    </ContentContainer>
  );
};

export default Signup;
