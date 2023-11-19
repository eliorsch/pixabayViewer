import { SafeAreaView } from "react-native";
import react, { useEffect } from "react";
import ImagesViewer from "./ImagesViewer";
import ButtonsBar from "./ButtonsBar";
import { useDispatch, useSelector } from "react-redux";
import { setImagesListAction, setNumOfItemsInPageAction } from "../utils/store";
import fetchImagesList from "../utils/api_data_handler/fetchImagesList";
import { setMaxPageAction } from "../utils/store/actions";

// app's main function
export default function Main() {

  // import data from redux store
  const category = useSelector((s) => s.category);
  const page = useSelector((s) => s.page);
  const items_in_page = useSelector((s) => s.items_in_page);

  // create dispatcher
  const dispatch = useDispatch();

  // register side efffects
  // this useEffect responsible for updating the data when necceery
  useEffect(() => {
    dispatch(setImagesListAction([])); // clear the images_list from previus data
    fetchImagesList(category, page, items_in_page) // fetch new data
      .then((data) => {// dispatch new data to store
        dispatch(setImagesListAction(data.hits));
        dispatch(setMaxPageAction(data.maxPage));
      }); 
  }, [category, page, items_in_page]);

  return (
    <SafeAreaView style={{ marginTop: "10%", height: "100%" }}>
      <ButtonsBar />
      <ImagesViewer />
    </SafeAreaView>
  );
}

