import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import ProductItem from '../../src/component/ProductItem';

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;

  const [item, setItem] = useState({});
  const API_URL = `/api/v1/products/${pid}.json`;

  function getData(){
  
    //비동기식 통신 처리
    Axios.get(
      API_URL
    ).then((res) =>{
      //console.log(res);
      setItem(res.data);//상세보기에서 사용된다.
    });
  }

  useEffect(() => { //최초 한번만 호출하기 위해 사용함!
    getData();
  },[pid]);

  //return <p> <img src={item.image_link} alt={item.id}/></p>;
  return <ProductItem item={item}/>;
}

export default Post;