import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import Modal from "react-native-modal";
import { styles } from "./ChangeCategoryModal";
import { useDispatch } from "react-redux";
import { changeCategoryAction } from "../utils/store";

// image's info fields to render
const infoFields = [
  "id",
  "user",
  "user_id",
  "likes",
  "views",
  "downloads",
  "tags",
];

export default function ImageInfoModal({ imageObj, closeModal }) {
  //create dispatcher
  let dispatch = useDispatch();

  //  tag renderer from string to category link
  function renderTag(tag) {
    // create press handler for tag
    function handleTagPress() {
      let action = changeCategoryAction(tag);
      dispatch(action);
      closeModal();
    }
    // return presable text
    return (
      <Pressable
        style={styles.pressable}
        key={`tag:${tag}`}
        onPress={handleTagPress}
      >
        <Text style={[styles.text, styles.pressable]}>{tag}</Text>
      </Pressable>
    );
  }

  return imageObj ? (
    // the display image's info modal
    <Modal isVisible={!!imageObj}>
      <View style={styles.container}>
        {/* view the selected image */}
        <Image
          source={{ uri: imageObj.largeImageURL }}
          style={{ width: 300, height: 300 }}
        />
        {/* render a flatlist of data from imageObj according to the infoFields array */}
        <FlatList
          style={styles.flatList}
          data={infoFields}
          renderItem={({ item: key }) => (
            // render the info's key from infoFields
            <View
              style={{
                flexDirection: "row",
                direction: "rtl",
                flexWrap: "wrap",
              }}
            >
              <Text
                style={[
                  styles.text,
                  {
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    marginEnd: 3,
                  },
                ]}
              >
                {/* {key == "tags" ? imageObj[key].split(",").map(renderTag) : key}: */}
                {key}
              </Text>
              {/* 
            // render the info's value from imageObj */}
              <Text style={styles.text}>
                {key == "tags"
                  ? imageObj[key].split(",").map(renderTag)
                  : imageObj[key]}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.toString()}
          numColumns={1}
        ></FlatList>
        {/* modal control btn's */}
        <View style={{ flexDirection: "row", gap: 10 }}>
          <TouchableOpacity onPress={closeModal} style={styles.button}>
            <Text>close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  ) : <></>;
}

// styles here are imported from changeCategoryModal component,
// since they are sharing similar styling rules
