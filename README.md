# React-Native TechStack

Sample Project ini akan menjelaskan cara kerja Redux dan cara memimplementasikannya</br>

# Digging Deeper with Redux</br>

a. App Mockup and Approach</br>
![Project Outline](https://github.com/elvinotan/react-native-techstack/blob/master/images/project.png)</br>

b. The Basics of Redux</br>
Cara Kerja Redux : </br>
a. Action</br>
b. Reducer</br>
c. State </br>
![Redux](https://github.com/elvinotan/react-native-techstack/blob/master/images/redux.png)</br>

c. More on Redux</br>

```
Plain Redux code
https://stephengrider.github.io/JSPlaygrounds/

const reducer = (state=[], action) => {
    if (action.type === 'split_string') {
        return action.payload.split('');
    }
    if (action.type === 'add_character') {
      //state.push(action.payload);
      //return state;
      state = [...state, action.payload];
      return state;
    }

    return state;

}
const store = Redux.createStore(reducer);
store.getState(); // []

const action = {type:'split_string', payload:'abcde'} // type=action name, payload = data yang di butuhkan unutuk menjalankan action
store.dispatch(action);

store.getState(); //["a","b","c","d","e"]

const action2 = {type:'add_character', payload:'f'}
store.dispatch(action2);

store.getState(); ///["a","b","c","d","e", "f"]

store.getState();
```

d. Redux is Hard!</br>
Redux memudahkan untuk membuat app dgn scale besar, layaknya MVC</br>

e. Application Boilerplate</br>
Install plugin redux dan react-redux</br>
npm install --save redux react-redux</br>

```
/src/App.js
import React from "react";
import { View } from "react-native";

const App = () => {
  return <View />;
};

export default App;

/index.js
import App from "./src/App";
```

f. More on Redux Boilerplate</br>
Store > Redux framework yang berfungsi untuk menyimpan seluruh state</br>
Provider > Perekat antara Redux dan React-Redux sebagai mekanisme komunikasi</br>

# Back To React

Agar component commment bisa di export secara gabungan</br>
component wajib export dgn cara `export { Header };`</br>
serta deklarasikan di bagian index.js</br>

```
export * from "./Header";
export * from "./Card";
export * from "./CardSection";
```

a. Rendering the Header</br>

```
const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Header headerText={"Tech Stack"} />
      </View>
    </Provider>
  );
};
```

b. Reducer and State Design</br>
![State Design](https://github.com/elvinotan/react-native-techstack/blob/master/images/statedesign.png)</br>

![State Design 2](https://github.com/elvinotan/react-native-techstack/blob/master/images/statedesign2.png)</br>

c. Library List of Data</br>
Persiapkan js file untuk handle reducer</br>
Yang Perlu di ingat adalah :
Action => Adalah js Object</br>
Reducer => Adalah function yang return js Object</br>

```
/src/reducers/index.js
import { combineReducers } from "redux";
import { LibraryReducer } from "./LibraryReducer";

export default combineReducers({
  libraries: LibraryReducer
});
```

```
/src/reducers/LibraryReducer.js
export default () => [];
```

d. JSON CopyPaste</br>
Copy paster object data, pada app ini kita tidak menggunakan remote call rest, tetapi menggunakan file sebagai sumber data</br>

e. The Connect Function</br>
Untuk menghubungkan antara action, reducer dengan react-native kita menggunkan connect yang beradal dari react-redux</br>

```
import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";

class LibraryList extends Component {
  render() {
    return <View />;
  }
}
export default connect()(LibraryList);
```

f. MapStateToProps with Connect</br>
![Connect](https://github.com/elvinotan/react-native-techstack/blob/master/images/connect.png)</br>

```
const mapStateToPros = state => {
  return {
    libraries: state.libraries
  };
};

export default connect(mapStateToPros)(LibraryList);
```

Data yang di return dari fungcion mapStateToPros dapat di access dari this.props.libraries</br>

g. A Quick Review and Breather</br>
