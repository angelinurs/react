import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import styles from '/public/css/ItemList.module.css';
import { Divider, Grid, Box, Rating, Typography } from '@mui/material';

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;

  const [item, setItem] = useState({});
  const API_URL = `/api/v1/products/${pid}.json`;

  function getData(){
  
    //비동기식 통신 처리
    /*$.ajax({
      
    }).done(function(data){

    });*/
    Axios.get(
      API_URL
    ).then((res) =>{
      //console.log(res);
      setItem(res.data);
    });
  }

  useEffect(() => { //최초 한번만 호출하기 위해 사용함!
    getData();
  },[]);

  console.log( Number.parseInt( item.rating, 10 ) );
  // return <p>Post: {pid} : {API_URL} : <img src={item.image_link} alt={item.id} /></p>;
  return (
    <div className={styles.wrap}>
      <Grid container 
          spacing={2}
          justifyContent="flex-start"
          ml={5}
          mr={5}
          >
        <Grid item xs={2} m={0} p={0} />
        <Grid item xs={2} m={0} p={0}>
          <img src={item.image_link} 
              alt={item.name} 
              className={styles.img_item}/>
        </Grid>
        <Grid item xs={2} m={0} p={0}>
          <Box m={0} p={0}>
            <strong className={styles.title_item}>{item.name}</strong>
            <span className={styles.txt_info}>{item.category}{' '}{item.product_type}</span>
            <strong className={styles.price_info}>{item.price}</strong>
            {/* 
              # rating
             */}
            <Box
              sx={{
                '& > legend': { mt: 2 },
              }}
            >
              <Typography component="legend">Rating</Typography>
              <Rating name="read-only" value={ Math.ceil(item.rating)} readOnly />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4} m={0} p={0} />
      </Grid>    
      <Divider />
      <Box>
        
        <p>{item.description}</p>
      </Box>
      
    </div>

  );
}

export default Post;