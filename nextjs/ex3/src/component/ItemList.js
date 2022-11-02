import { Grid } from '@mui/material';
import styles from '/public/css/ItemList.module.css';
import Link from 'next/link';

export default function ItemList({list}){ //{}를 사용했다면 properties의 이름이 반드시 list여야 함!
    return(
        <Grid container>
            {list.map((item) => (
                <Grid item xs={3} key={item.id}>
                    <Link href='/views/[pid]' as={'/views/'+item.id}>
                        <div className={styles.wrap}>
                            <img src={item.image_link} 
                                alt={item.name} 
                                className={styles.img_item}/>
                        
                            <strong className={styles.title_item}>{item.name}</strong>
                            <span className={styles.txt_info}>{item.category} &nbsp; {item.product_type}</span>
                            <strong className={styles.price_info}>{item.price}</strong>
                        </div>
                    </Link>
                </Grid>
            ))}
        </Grid>
    )
}