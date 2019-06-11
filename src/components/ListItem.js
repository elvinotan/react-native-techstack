import React, { Component } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { CardSection } from "./commons";
import { selectLibrary } from "../actions";
import { connect } from "react-redux";

class ListItem extends Component {
  renderExpand(expanded, desription) {
    return expanded ? <Text>{desription}</Text> : null;
  }

  render() {
    const { titleStyle } = styles;
    const { selectLibrary, expanded } = this.props;
    const { title, id, description } = this.props.library.item;

    return (
      <TouchableWithoutFeedback onPress={() => selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderExpand(expanded, description)}
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

const mapStateToPros = (state, ownProps) => {
  return {
    expanded: state.selectedLibraryId == ownProps.library.index
  };
};

export default connect(
  mapStateToPros,
  { selectLibrary }
)(ListItem);
