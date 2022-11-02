import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Axios from 'axios'
import { useEffect, useState } from 'react'
import ItemList from '../src/component/ItemList'
import { Divider, CircularProgress, Box } from '@mui/material'

export default function Home() {
  const [list, setList] = useState([]);
  const [chk, setChk] = useState(true);
  const API_URL = "/api/v1/products.json?brand=maybelline";

  function getData(){
  
    //비동기식 통신 처리
    /*$.ajax({
      
    }).done(function(data){

    });*/
    Axios.get(
      API_URL
    ).then((res) =>{
      //console.log(res);
      setList(res.data);
      setChk(false); //데이터를 모두 가져왔다면 프로그레스를 없애기 위해 
                    // chk값을 false로 전환한다.
    });
  }

  useEffect(() => { //최초 한번만 호출하기 위해 사용함!
    getData();
  },[]);

  return (
    <div className={styles.container}>
      {chk && (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress determinate='true' sx={{margin: '0 auto'}}/>
        </Box>
      )}
      
      {!chk && (
        <>
          <div style={{width:'80%', margin: 'auto', padding: '20px'}}>
            <h2>베스트 상품</h2>
            <Divider/> {/* 구분선 */}
            <ItemList list={list.slice(0,9)}/>
          </div>
          <div style={{width:'80%', margin: 'auto', padding: '20px'}}>
            <h2>신 상품</h2>
            <Divider/> {/* 구분선 */}
            <ItemList list={list.slice(9)}/>{/* 9번지부터 마지막까지 모두 가져온다. */}
          </div>
        </>
      )}
      
    </div>
  )
}
