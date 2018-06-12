//  contacts
export function fetchContacts() {
  return function (dispatch) {
    fetch("http://localhost:5100/contacts")
      .then( (response) => {
        return response.json();
      }).then((contacts) => {
        dispatch(contactsFetched(contacts));
      });
  };
}
export function contactsFetched(contacts) {
  return {
    type: "CONTACTS_FETCHED",
    value: contacts
  };
}

export function createContact(contact) {
  return function (dispatch) {
    fetch("http://localhost:5100/contacts", {
      method: "post", 
      body: JSON.stringify(contact),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (res) {
      return res.json();
    }).then(function (c) {
      dispatch(contactCreated(c));
    });
  };
}
  
export function contactCreated(contact) {
  return {
    type: "CONTACT_CREATED", 
    value: contact
  };
}






//  products
export function fetchProducts() {
  return function (dispatch) {
    fetch("http://localhost:5100/products")
      .then((response) => {
        return response.json();
      }).then((products) => {
        dispatch(productsFetched(products));
      });
  };
}

export function productsFetched(products) {
  return {
    type: "PRODUCTS_FETCHED",
    value: products
  };
}

export function createProduct(product) {
  return function (dispatch) {
    fetch("http://localhost:5100/products", {
      method: "post", 
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (res) {
      return res.json();
    }).then(function (p) {
      dispatch(productCreated(p));
    });
  };
}
    
export function productCreated(product) {
  return {
    type: "PRODUCT_CREATED", 
    value: product
  };
}




//  vehicles
export function fetchVehicles() {
  return function (dispatch) {
    fetch("http://localhost:5100/vehicles")
        .then((response) => {
          return response.json();
        }).then((vehicles) => {
          dispatch(vehiclesFetched(vehicles));
        });
  };
}
  
export function vehiclesFetched(vehicles) {
  return {
    type: "VEHICLES_FETCHED",
    value: vehicles
  };
}

//  comments
export function fetchComments() {
  return function (dispatch) {
    fetch("http://localhost:5100/comments")
      .then((response) => {
        return response.json();
      }).then((comments) => {
        dispatch(commentsFetched(comments));
      });
  };
}
    
export function commentsFetched(comments) {
  return {
    type: "COMMENTS_FETCHED",
    value: comments
  };
}


