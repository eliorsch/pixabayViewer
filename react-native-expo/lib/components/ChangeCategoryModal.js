import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Image,
  FlatList,
} from "react-native";
import Modal from "react-native-modal";
import React, { useEffect, useState } from "react";
import { categories } from "../../assets/categories.json";
import { useDispatch } from "react-redux";
import { changeCategoryAction } from "../utils/store";

export default function ChangeCategoryModal({
  openModal,
  closeModal,
  isOpenModal,
}) {
  // state for selected catgory
  const [category, setCategory] = useState("");

  // side effect to clear the category state when modal is opened/closed
  useEffect(() => {
    setCategory("");
  }, [isOpenModal]);

  //create dispatcher
  let dispatch = useDispatch();

  // handler to aplly category selection
  function handleSelect() {
    dispatch(changeCategoryAction(category));
    closeModal();
  }

  return (
    // category selection modal
    <Modal isVisible={isOpenModal}>
      <View style={styles.container}>
        <Text style={styles.h4}>{"select category "}</Text>
        {/*render a flatlist of categories (importen from assets/categories.json)*/}
        <FlatList
          style={styles.flatList}
          data={categories}
          renderItem={({item}) => (
            <Pressable onPress={() => setCategory(item)}>
              <Text
                style={[
                  styles.text,
                  (item == category) && styles.selected,
                ]} /*if category is selected, add additional styles*/
              >
                {item}
              </Text>
            </Pressable>
          )}
          keyExtractor={(item) => item.toString()}
          numColumns={1}
        ></FlatList>
        {/* modal control btn's */}
        <View style={{ flexDirection: "row", gap: 10 }}>
          {/* confirm select button */}
          <TouchableOpacity onPress={handleSelect} style={styles.button}>
            <Text>select</Text>
          </TouchableOpacity>
          {/* cancel and close  buttom */}
          <TouchableOpacity onPress={closeModal} style={styles.button}>
            <Text>close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

// styles
export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginHorizontal: "2.5%",
    marginVertical: "5%",
    backgroundColor: "#fff",
    padding: 20,
  },
  flatList: {
    width: "100%",
  },
  button: {
    backgroundColor: "#3498db",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: "50%",
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    padding: 2.5,
  },
  selected: {
    fontWeight: "bold",
    backgroundColor: "#f3f3f3",
    borderRadius: 10,
  },
  h4: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  pressable: {
    textDecorationLine: "underline",
  },
});
