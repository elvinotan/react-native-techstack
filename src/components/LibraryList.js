import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import { Card, CardSection } from "./commons";

class LibraryList extends Component {
  renderItem(item) {}

  render() {
    return (
      <FlatList
        data={this.props.reducer.libraries} // Data yang di passing oleh reducer
        render={this.renderItem} // Function untuk render single data
        keyExtractor={library => library.id} // Id Uniqeness for looping
      />
    );
  }
}

const mapStateToPros = state => {
  return {
    reducer: {
      libraries: state.libraries
    }
  };
};

export default connect(mapStateToPros)(LibraryList);
