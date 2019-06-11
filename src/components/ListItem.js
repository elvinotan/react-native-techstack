import React, { Component } from "react";
import { Text } from "react-native";
import { CardSection } from "./commons";
import { selectLibrary } from "../actions";
import { connect } from "react-redux";

class ListItem extends Component {
  render() {
    console.log(this.props);
    const { titleStyle } = styles;
    return (
      <CardSection>
        <Text style={titleStyle}>{this.props.library.item.title}</Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToPros = state => {
  return {
    reducer: {
      selectedLibraryId: state.selectedLibraryId
    }
  };
};

export default connect(
  mapStateToPros,
  { selectLibrary }
)(ListItem);
