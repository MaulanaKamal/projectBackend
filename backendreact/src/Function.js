import Axios from "axios";

const url = 'http://localhost:3030'

// USER HOME___________________________________________
export function home() {
    return Axios.get(`${url}/season`);
}

// USER KATEGORI___________________________________________
export function kategori(seasonid) {
    return Axios.get(`${url}/kategori/${seasonid}`);
}

// USER PRODUCT___________________________________________
export function product(kategoriid) {
    return Axios.get(`${url}/product/${kategoriid}`);
}

// USER DETAIL___________________________________________
export function detail(productid) {
    return Axios.get(`${url}/detail/${productid}?`);
}

// USER ADD TO CART___________________________________________
export function addtocart() {
    return Axios.post(`${url}/addtocart`);
}

// USER CART___________________________________________
export function cart() {
    return Axios.get(`${url}/cart`);
}

// USER CART EDIT___________________________________________
export function cartedit(cartid) {
    return Axios.get(`${url}/cart/edit/${cartid}?`);
}

// USER CART UPDATE___________________________________________
export function cartupdate(cartid) {
    return Axios.get(`${url}/cart/update/${cartid}?`);
}

// USER CART DELETE___________________________________________
export function cartdelete(cartid) {
    return Axios.get(`${url}/cart/edit/${cartid}?`);
}
