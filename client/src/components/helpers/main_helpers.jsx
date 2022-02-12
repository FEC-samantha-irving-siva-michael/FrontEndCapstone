import axios from 'axios';
import GITAPIKEY from '../../../../config.js';
import { store, product } from '../../redux/store.js';

const BASEURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax';

const reqInstance = axios.create({
  headers: {
    Authorization: GITAPIKEY,
  },
});

// Product Requests
export const getProducts = () => {
  reqInstance.get(`${BASEURL}/products`)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err.message));
};
<<<<<<< HEAD
export const getProduct = async (product_id) => {
  try{
    let res =  await reqInstance.get(`${BASEURL}/products/${product_id}`)
    return res
  } catch(err){
    return null;
  }
};
export const getStyles = (product_id, callback) => {
  reqInstance.get(`${BASEURL}/products/${product_id}/styles`)
    .then((res) => { callback(res.data.results); })
    .catch((err) => console.log(err.message));
};
=======
export const getProduct = (product_id) => {
  reqInstance.get(`${BASEURL}/products/${product_id}`)
    .then((res) => { store.dispatch(product.actions.setProduct(res.data)); })
    .catch((err) => console.log(err.message));
};
export const getStyles = (product_id) => {
  reqInstance.get(`${BASEURL}/products/${product_id}/styles`)
    .then((res) => { console.log(res.data); })
    .catch((err) => console.log(err.message));
};
>>>>>>> 13c5479 (updated getReviewsMetaData helper)
export const getRelated = (product_id) => {
  reqInstance.get(`${BASEURL}/products/${product_id}/related`)
    .then((res) => { console.log(res.data); })
    .catch((err) => console.log(err.message));
};

// Cart Requests

// Review Requests
export const getReviews = (page, count, sort, product_id) => {
  reqInstance.get(
    `${BASEURL}/reviews`,
    {
      params:
      {
        page, count, sort, product_id,
      },
    },
  )
<<<<<<< HEAD
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));
};
export const getReviewsMetadata = (product_id, callback) => {
=======
  .then((res) => console.log(res.data))
  .catch((err) => console.error(err));
};

export const getReviewsMetadata = (product_id, setMetadata) => {
>>>>>>> 13c5479 (updated getReviewsMetaData helper)
  reqInstance.get(
    `${BASEURL}/reviews/meta`,
    {
      params:
      { product_id },
    },
  )
<<<<<<< HEAD
    .then((res) => callback(res.data))
    .catch((err) => err);
=======
    .then((res) => setMetadata(res.data))
    .catch((err) => console.error(err));
>>>>>>> 13c5479 (updated getReviewsMetaData helper)
};
export const addNewReview = (newReview) => {
  reqInstance.post(
    `${BASEURL}/reviews`,
    { params: newReview },
  )
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));
};
export const markReviewAsHelpful = (product_id) => {
  reqInstance.put(`${BASEURL}/reviews/${product_id}/helpful`)
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));
};
export const reportReview = (product_id) => {
  reqInstance.put(`${BASEURL}/reviews/${product_id}/report`)
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));
};