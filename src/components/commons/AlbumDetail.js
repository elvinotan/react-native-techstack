import React from "react";
import { View, Text, Image, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

const AlbumDetail = ({ album }) => {
  const { image, title, artist, thumbnail_image, url } = album;
  const {
    imageStyle,
    headerTextStyle,
    thumbnailContainerStyle,
    cardStyle,
    headerContentStyle,
    tumbnailStyle
  } = styles;
  return (
    <Card>
      <CardSection styles={cardStyle}>
        <View style={thumbnailContainerStyle}>
          <Image style={tumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>Buy at Amazon</Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  tumbnailStyle: {
    width: 50,
    height: 50
  },
  cardStyle: {
    justifyContent: "flex-start",
    flexDirection: "row"
  },
  headerContentStyle: {
    justifyContent: "space-around",
    flexDirection: "column",
    paddingLeft: 10
  },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  headerTextStyle: {
    fontSize: 18
  }
};

export default AlbumDetail;
