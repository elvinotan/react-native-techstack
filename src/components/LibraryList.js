import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import { Card, CardSection } from "./commons";
import ListItem from "./ListItem";

class LibraryList extends Component {
  renderItem(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.reducer.libraries} // Data yang di passing oleh reducer
        renderItem={this.renderItem} // Function untuk render single data
        keyExtractor={library => library.id + ""} // Id Uniqeness for looping
      />
    );
  }
}

const mapStateToPros = state => {
  return {
    reducer: {
      libraries: state.libraries,
      selectedLibraryId: state.selectedLibraryId
    }
  };
};

export default connect(mapStateToPros)(LibraryList);
