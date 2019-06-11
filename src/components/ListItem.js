import React, { Component } from "react";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  Platform,
  UIManager
} from "react-native";
import { CardSection } from "./commons";
import { selectLibrary } from "../actions";
import { connect } from "react-redux";

class ListItem extends Component {
  constructor() {
    super();
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderExpand(expanded, desription) {
    return expanded ? (
      <CardSection>
        <Text style={{ flex: 1 }}>{desription}</Text>
      </CardSection>
    ) : null;
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

const mapActionToProps = { selectLibrary };

export default connect(
  mapStateToPros,
  mapActionToProps
)(ListItem);
