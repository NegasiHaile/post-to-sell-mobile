import { useState } from "react";
import { useDispatch } from "react-redux";

// APIs
import { api_Signup } from "../api";

// Redux Actions
import { _setProfile } from "../Redux/Actions";

// Utility functions
import {
  validName,
  validEmail,
  validPhoneNumber,
  validPassword,
} from "../Utils/Validation/InputValueValidations";

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
  fName: "",
  lName: "",
  email: "",
  contacts: [],
  phone: "",
  password: "",
  retypePassword: "",
};

const Signup = ({ navigation }) => {
  const dispatch = useDispatch();
  // useStates
  const [showPassword, setShowPassword] = useState(false);
  const [signupCredentials, setSignupCredentials] =
    useState(initialSigninState);
  const [isLoading, setIsLoading] = useState(false);
  const [inputErrors, setInputErrors] = useState({});

  // Validating signup inputs
  const validateInputs = () => {
    const errors = {};
    !validName(signupCredentials.fName) ? (errors.fName = false) : "";
    !validEmail(signupCredentials.email) ? (errors.email = false) : "";
    !validPhoneNumber(signupCredentials.phone) ? (errors.phone = false) : "";
    !validPassword(signupCredentials.password) ? (errors.password = false) : "";
    signupCredentials.password !== signupCredentials.retypePassword
      ? (errors.retypePassword = false)
      : "";
    setInputErrors(errors);
    return JSON.stringify(errors) === "{}";
  };

  // On sumbmit -> login
  const onSubmitSignup = async () => {
    setInputErrors({});
    const validForm = validateInputs();

    if (validForm) {
      setIsLoading(true);
      try {
        const res = await api_Signup(signupCredentials);
        dispatch(_setProfile(res.data));
        navigation.navigate("Home");
      } catch (error) {
        setIsLoading(false);
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
          Sign up to continue!
        </Heading>

        <VStack space={2} mt="5">
          <FormControl isRequired isInvalid={"fName" in inputErrors}>
            <FormControl.Label>First Name</FormControl.Label>
            <Input
              type="text"
              value={signupCredentials.fName}
              onChangeText={(text) =>
                setSignupCredentials({
                  ...signupCredentials,
                  fName: text,
                })
              }
              placeholder="First name"
              size="lg"
              required
            />
            {"fName" in inputErrors && (
              <FormControl.ErrorMessage mt={0}>
                First name should contain at least 3 characters!
              </FormControl.ErrorMessage>
            )}
          </FormControl>

          <FormControl>
            <FormControl.Label>Last Name</FormControl.Label>
            <Input
              type="text"
              value={signupCredentials.lName}
              onChangeText={(text) =>
                setSignupCredentials({ ...signupCredentials, lName: text })
              }
              placeholder="Last name"
              size="lg"
            />
          </FormControl>

          <FormControl isRequired isInvalid={"email" in inputErrors}>
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
            {"email" in inputErrors && (
              <FormControl.ErrorMessage mt={0}>
                Please enter a valid email!
              </FormControl.ErrorMessage>
            )}
          </FormControl>

          <FormControl isRequired isInvalid={"phone" in inputErrors}>
            <FormControl.Label>Phone number</FormControl.Label>
            <Input
              type="number"
              value={signupCredentials.phone}
              onChangeText={(text) =>
                setSignupCredentials({
                  ...signupCredentials,
                  phone: text,
                })
              }
              placeholder="+251 ... ... ..."
              size="lg"
            />
            {"email" in inputErrors && (
              <FormControl.ErrorMessage mt={0}>
                Please enter a valid phone number!
              </FormControl.ErrorMessage>
            )}
          </FormControl>

          <FormControl isRequired isInvalid={"password" in inputErrors}>
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
            {"password" in inputErrors && (
              <FormControl.ErrorMessage mt={0}>
                Password should be minimum of 8 characters long, with at least 1
                symbol, 1 uppercase, and 1 lowercase letters and 1 number!
              </FormControl.ErrorMessage>
            )}
          </FormControl>

          <FormControl isRequired isInvalid={"retypePassword" in inputErrors}>
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
            {"retypePassword" in inputErrors && (
              <FormControl.ErrorMessage mt={0}>
                Oops, Password not mutch!
              </FormControl.ErrorMessage>
            )}
          </FormControl>

          <Button
            type="sumbmit"
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
