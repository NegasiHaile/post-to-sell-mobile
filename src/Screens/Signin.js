import { useState } from "react";
import { useDispatch } from "react-redux";

// Redux Actions
import { _setProfile } from "../Redux/Actions";

// Utility functions
import { validEmail } from "../Utils/Validation/InputValueValidations";

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
import { api_Signin } from "../api";

const initialSigninState = {
  email: "",
  password: "",
};

const Signin = ({ navigation }) => {
  const dispatch = useDispatch();
  // useStates
  const [showPassword, setShowPassword] = useState(false);
  const [signinCredentials, setSigninCredentials] =
    useState(initialSigninState);
  const [isLoading, setIsLoading] = useState(false);
  const [inputErrors, setInputErrors] = useState({});

  // Validating signup inputs
  const validateInputs = () => {
    const errors = {};
    !validEmail(signinCredentials.email) ? (errors.email = false) : "";
    signinCredentials.password === "" ? (errors.password = false) : "";
    setInputErrors(errors);
    return JSON.stringify(errors) === "{}";
  };

  // On sumbmit -> login
  const onSubmitSignin = async () => {
    setInputErrors({});
    const validForm = validateInputs();
    if (validForm) {
      setIsLoading(true);
      try {
        const res = await api_Signin(signinCredentials);
        dispatch(_setProfile(res.data));
        navigation.navigate("Products");
      } catch (error) {
        setIsLoading(false);
        alert(error.response.data.msg);
      }
    }
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
          <FormControl isRequired isInvalid={"email" in inputErrors}>
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
            {"email" in inputErrors && (
              <FormControl.ErrorMessage mt={0}>
                Please provide a valid email!
              </FormControl.ErrorMessage>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={"password" in inputErrors}>
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
            {"password" in inputErrors && (
              <FormControl.ErrorMessage mt={0}>
                Please provide your password!
              </FormControl.ErrorMessage>
            )}
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
