import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

class LibraryList extends Component {
  showDetail() {
    return this.props.libraries.map((obj, i) => {
      return <Text>{obj.title}</Text>;
    });
  }

  render() {
    return <View>{this.showDetail()}</View>;
  }
}

const mapStateToPros = state => {
  return {
    libraries: state.libraries
  };
};

export default connect(mapStateToPros)(LibraryList);
