import { StyleSheet, } from "react-native";
import Main from "./lib/components/Main";
import { Provider } from "./lib/utils/store";


// main app
export default function App() {
  return (
    <Provider >
      <Main/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
