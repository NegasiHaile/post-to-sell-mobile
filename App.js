import React from "react";

// Redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/Redux/store";

// Nativebase components
import { NativeBaseProvider, extendTheme } from "native-base";

// Dev components
import { Routing } from "./src/Layouts";

// Theme
import { Colors } from "./src/Theme";

export default () => {
  const theme = extendTheme({ colors: Colors });

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NativeBaseProvider theme={theme}>
          <Routing theme={theme} />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};
