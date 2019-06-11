import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import { Header } from "./components/commons";

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Header headerText={"test"} />
      </View>
    </Provider>
  );
};

export default App;
