import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { setPageAction } from "../utils/store";
import { useDispatch, useSelector } from "react-redux";
import ChangeCategoryModal from "./ChangeCategoryModal";

export default function ButtonsBar() {
  // hooks
  const [open, setOpen] = useState(false);
  const category = useSelector(state => state.category)
  const page = useSelector(state => state.page)
  const maxPage = useSelector(state => state.maxPage)
  const dispatch = useDispatch();

  //handlers
  function setPage(value) {
    if (value >= 0 && value <= maxPage) dispatch(setPageAction(value));
  }
  function handlePrevious () {setPage(page - 1)};
  function handleNext () {setPage(page + 1)};
  function openModal () {setOpen(true)};
  function closeModal() {setOpen(false)}
  
  return (
    // navbar
    <View style={styles.navBar}>
      {/* modal to select category */}
      <ChangeCategoryModal openModal={openModal} closeModal={closeModal} isOpenModal={open}/>
      {/* the curren category */}
      <Text style={styles.h1}>{category }</Text>
      {/* buttons */}
      <View style={styles.container}>
        {/* previous btn */}
        <TouchableOpacity
          onPress={handlePrevious}
          disabled={page <= 1}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        {/* search btn */}
        <TouchableOpacity onPress={openModal} style={styles.button}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        {/* next btn */}
        <TouchableOpacity
          onPress={handleNext}
          disabled={page >= maxPage}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// styles
export const styles = StyleSheet.create({
  navBar: {
    paddingHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    gap: 10
  },
  button: {
    backgroundColor: "#3498db",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  h1: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
