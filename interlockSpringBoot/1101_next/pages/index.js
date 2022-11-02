import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useState, useEffect } from 'react'
import Axios from 'axios'
import ViewTable from '../src/component/ViewTable'
let currentPage=1;

export default function Home( ) {

  const [ list, setList ] = useState( [] );
  const [ bname, setBname ] = useState( 'BBS' );
  const BBS_API_URL = '/bbs/list';

  const callBBS = () => {
    Axios.get(
      BBS_API_URL, {
        params : {
          bname: bname,
          cPage: currentPage
        }
      }
    ).then( data => {
      console.log( data.data.list );
      setList( data.data.list );
    });
  }

  useEffect( () => {
    callBBS();
  }, [] );
  
  const changePage = ( event ) => {
    console.log( event.target.innerText );
    // setCPage( event.target.innerText );
    currentPage = event.target.innerText*1;

    callBBS();
    
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ViewTable list={list} changePage={changePage} />
      
    </div>
  )
}
