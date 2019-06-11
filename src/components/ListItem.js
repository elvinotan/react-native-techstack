import React, { Component } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { CardSection } from "./commons";
import { selectLibrary } from "../actions";
import { connect } from "react-redux";

class ListItem extends Component {
  renderExpand(selected, desription) {
    return selected ? <Text>{desription}</Text> : null;
  }

  render() {
    const { titleStyle } = styles;
    const { selectLibrary, selectedLibraryId } = this.props;
    const { title, id, description } = this.props.library.item;
    const selected = id === selectedLibraryId;

    return (
      <TouchableWithoutFeedback onPress={() => selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderExpand(selected, description)}
        </View>
      </TouchableWithoutFeedback>
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
    selectedLibraryId: state.selectedLibraryId
  };
};

export default connect(
  mapStateToPros,
  { selectLibrary }
)(ListItem);
