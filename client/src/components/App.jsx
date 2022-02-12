import React, { useEffect } from 'react';
import Overview from './product_info/Overview.jsx'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchProductId } from '../redux/store.js'
import ReviewsMetadata from './reviews/ReviewsMetadata.jsx';
import RatingsBreakdown from './reviews/RatingsBreakdown.jsx';

function App() {
  const { id } = useParams();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductId(id));
  }, []);

  return (
    <div>
      <h3>Product</h3>
      {/* hi we are loading */}
      {JSON.stringify(product)}
      <h3>Reviews</h3>
      <h4>Reviews Metadata</h4>
      <ReviewsMetadata />
      <h5>Ratings Breakdown</h5>
      <RatingsBreakdown />
    </div>
  );
}

export default App;
