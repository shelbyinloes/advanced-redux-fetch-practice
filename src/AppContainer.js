import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { fetchContacts, fetchProducts, fetchVehicles, fetchComments } from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    getContacts() {
      const action = fetchContacts();
      dispatch(action);
    },

    getProducts() {
      const action = fetchProducts();
      dispatch(action);
    },

    getVehicles() {
      const action = fetchVehicles();
      dispatch(action);
    },

    getComments() {
      const action = fetchComments();
      dispatch(action);
    }
  };
}

export default connect(null,mapDispatchToProps)(App);
