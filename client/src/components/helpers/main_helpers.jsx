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
export const getRelated = (product_id) => {
  reqInstance.get(`${BASEURL}/products/${product_id}/related`)
    .then((res) => { console.log(res.data); })
    .catch((err) => console.log(err.message));
};

//Q&A Requests
export const getQandA = (productId, callback) => {
  reqInstance.get(`${BASEURL}/qa/questions/?product_id=${productId}`)
   .then((res) => { callback(res.data.results); })
   .catch((err) => console.log(err.message));
};
export const postQuestion = (newQuestion, cb) => {
  reqInstance.post(
    `${BASEURL}/qa/questions`,
    { params: newQuestion },)
    .then((res) => {callback()})
    .catch((err) => console.log(err,message));
};
export const postAnswer = (newAnswer, cb) => {
  reqInstance.post(
    `${BASEURL}/qa/questions`,
    { params: newAnswer },)
    .then((res) => {callback()})
    .catch((err) => console.log(err,message));
};
export const updateHelpful = (itemId) => {
  reqInstance.put(`${BASEURL}/qa/questions`)
    .then((res) => res.status(204).send(res.data))
    .catch((err) => console.error(err));
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
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));
};
export const getReviewsMetadata = (product_id, callback) => {
  reqInstance.get(
    `${BASEURL}/reviews/meta`,
    {
      params:
      { product_id },
    },
  )
    .then((res) => callback(res.data))
    .catch((err) => err);
};
export const addNewReview = (newReview) => {
  reqInstance.post(
    `${BASEURL}/reviews`,
    { params: newReview },
  );
};
export const markReviewAsHelpful = (product_id) => {
  reqInstance.put(`${BASEURL}/reviews/${product_id}/helpful`)
    .then((res) => res.status(204).send(res.data))
    .catch((err) => console.error(err));
};
export const reportReview = (product_id) => {
  reqInstance.put(`${BASEURL}/reviews/${product_id}/report`)
    .then((res) => res.status(204).send(res.data))
    .catch((err) => console.error(err));
};
