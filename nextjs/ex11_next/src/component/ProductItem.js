import { Button } from "@mui/material";
import styles from "/public/css/ProductItem.module.css";

export default function ProductItem({ item }){

    return(
        <>
            <div className={styles.wrap}>
                <div className={styles.img_area}>{/* 이미지 영역 */} 
                    <img src={item.image_link} alt={item.name}/>
                </div>
                <div className={styles.info_area}>{/* 제목, 가격정보 등*/}
                    <strong className={styles.title_item}>{item.name}</strong>
                    <strong className={styles.price_item}>{item.price}</strong>
                    <span className={styles.type_item}>
                        { item.category ? `${item.category}/`: "" }
                        { item.product_type }
                    </span>
                    <Button variant="contained" color="error">구매하기</Button>
                </div>
            </div>
            <div className={styles.disp_area}>
                <h3>Description</h3>
                <div style={{ paddingBottom: '20px', fontSize: '17px'}}>
                    { item.description }
                </div>
            </div>
        </>
    );
}