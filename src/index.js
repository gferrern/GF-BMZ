import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Details from "./routes/details";
import store from './components/reducers/combineReducers';
import { Provider } from 'react-redux';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="details" element={<Details />}>
          <Route path=":productId" element={<App />}/>
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>,
  rootElement
);
