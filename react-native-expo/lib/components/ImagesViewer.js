import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ImageInfoModal from "./ImageInfoModal";

export default function ImagesViewer() {
  // state for the current image to be its info displayed. info modal is closed when state is empty (null)
  const [image_info, setImageInfo] = useState(null);
  // import the images_list array from the store
  const images_list = useSelector((state) => state.images_list);

  // Calculate the dimensions for each image in a 3x3 grid
  const imageWidth = Dimensions.get("window").width / 3;
  const imageHeight = Dimensions.get("window").height / 3;

  // Render each image item in the FlatList
  const renderItem = ({ item }) => (
    <Pressable onPress={() => setImageInfo(item)}>
      <Image
        source={{ uri: item.largeImageURL }}
        style={{ width: imageWidth, height: imageHeight }}
      />
    </Pressable>
  );

  return (
    <>
    {/* render the display image's info modal */}
      <ImageInfoModal imageObj={image_info} closeModal={() => setImageInfo(null)} />
      {/* render a flatlist of all the images  */}
      <FlatList
        data={images_list}
        renderItem={renderItem}
        //extraData={key}
        keyExtractor={(item) => item.id.toString()} // assuming each item has a unique id
        numColumns={3} // Set the number of columns in the grid
        contentContainerStyle={styles.container}
        style={{ flex: 9 }}
      ></FlatList>
    </>
  );
}

// styles
export const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
