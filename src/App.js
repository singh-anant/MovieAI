import { Provider } from "react-redux";
import Body from "./pages/Body";
import store from "./utils/Store";
const App = () => {
  return (
    <Provider store={store}>
      <Body />
    </Provider>
  );
};

export default App;
