import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import {listProducts} from '../actions/productActions'
import { useLocation, useNavigate } from "react-router-dom";


//home screen element
function HomeScreen() {
  const dispatch = useDispatch();
  const location = useLocation();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products, page, pages } = productList;

  let keyword = location.search;

  console.log(keyword);
  //use effect
  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  //actual render
  return (
    <div>
      {!keyword && <ProductCarousel />}
      <h1>Latest Fashion</h1>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : error ? (
        <Message varient="danger">{error}</Message>
      ) : (
        <div>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate page={page} pages={pages} keyword={keyword} />
        </div>
      )}
    </div>
  );
}

export default HomeScreen;
