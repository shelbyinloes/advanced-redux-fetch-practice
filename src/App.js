import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import ContactsContainer from "./containers/ContactsContainer";
import ProductsContainer from "./containers/ProductsContainer";
import VehiclesContainer from "./containers/VehiclesContainer";
import CommentsContainer from "./containers/CommentsContainer";
import CreateThingsContainer from "./containers/CreateThingsContainer";


class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [], 
      vehicles: [],
      comments: [],
      products: []
    };
  }
  componentDidMount() {
    this.props.getContacts();
    this.props.getProducts();
    this.props.getVehicles();
    this.props.getComments();
  }
  render() {
    return (
      <div>
        <div style={{float: "left", width: "49%"}}>
          <h1>Contacts</h1>
          <ContactsContainer />
          <h1>Products</h1>
          <ProductsContainer />
          <h1>Vehicles</h1>
          <VehiclesContainer />
          <h1>Comments </h1>
          <CommentsContainer />
        </div>
        <div style={{float: "left", width: "49%"}}>
          <CreateThingsContainer />
        </div>
      </div>
    );
  }
}
App.propTypes = {
  getComments: PropTypes.string,
  getContacts: PropTypes.string,
  getVehicles: PropTypes.string,
  getProducts: PropTypes.string,
};

export default (App);


