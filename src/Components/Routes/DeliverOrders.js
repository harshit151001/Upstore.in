import React, { useEffect, useState } from 'react';
import API from '../../backend';
import Axios from 'axios';

export default function DeliverOrders() {
  useEffect(() => {
    let mounted = true;
    // const loadandsetdata = async () => {
    //   const response = await Axios.get(`${API}/api/search/products/5eff8e76d75ecb3735b243b1?search=${search}&&page=${currentPage}`);

    //   window.scroll(0, 0);

    //   setData(response.data.products);
    // };
    // loadandsetdata();

    return () => {
      mounted = false;
    };
  }, []);

  return <div>all orders</div>;
}
