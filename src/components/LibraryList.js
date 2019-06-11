import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { Card, CardSection } from "./commons";

class LibraryList extends Component {
  showDetail() {
    return this.props.reducer.libraries.map((obj, i) => {
      return (
        <CardSection key={obj.id}>
          <Text>{obj.title}</Text>
        </CardSection>
      );
    });
  }

  render() {
    return <Card>{this.showDetail()}</Card>;
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
