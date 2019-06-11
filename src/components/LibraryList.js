import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";

class LibraryList extends Component {
  showDetail() {
    this.prop;
  }

  render() {
    return <View />;
  }
}

const mapStateToPros = state => {
  return {
    libraries: state.libraries
  };
};

export default connect(mapStateToPros)(LibraryList);
