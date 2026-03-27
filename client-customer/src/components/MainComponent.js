import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Menu from './MenuComponent';
import Inform from './InformComponent';
import Home from './HomeComponent';
import Product from './ProductComponent';
import ProductDetail from './ProductDetailComponent';
import Signup from './SignupComponent';
import Active from './ActiveComponent';
import Login from './LoginComponent';
import Myprofile from './MyprofileComponent';
import Mycart from './MycartComponent';
import Myorders from './MyordersComponent';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotprods: [] // mảng rỗng ban đầu
    };
  }

  // ================= LIFECYCLE =================
  componentDidMount() {
    fetch('/api/hotprods')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ hotprods: Array.isArray(data) ? data : [] });
      });
  }

  // ================= RENDER =================
  render() {
    const { hotprods } = this.state;

    return (
      <div className="body-customer">
        {/* HEADER */}
        <Menu />
        <Inform />

        {/* HOT PRODUCTS PREVIEW */}
        {Array.isArray(hotprods) &&
          hotprods.map((prod) => (
            <div key={prod._id}>{prod.name}</div>
          ))}

        {/* ROUTING */}
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home hotprods={hotprods} />} />
          <Route path="/product/category/:cid" element={<Product />} />
          <Route path="/product/search/:keyword" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/active' element={<Active />} />
          <Route path='/login' element={<Login />} />
          <Route path='/myprofile' element={<Myprofile />} />
          <Route path='/mycart' element={<Mycart />} />
          <Route path='/myorders' element={<Myorders />} />
        </Routes>
      </div>
    );
  }
}

export default Main;