import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

export default function ProductListPage(){

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    
    const API_URL = 'https://lgcns-react.roto.codes/products';

    useEffect(()=>{
        setLoading(true);
        fetch(API_URL)
            .then(res=>res.json())
            .then(products => {
                setProducts(products);
            })
            .catch(e => setError(e))
            .finally(()=>setLoading(false))
    },[])

    if (loading) {
        return <div>loading...</div>
      }
      
    if (error) {
    return <div>데이터 로딩에 실패했습니다.</div>
    }
      
    // 서버에서 불러온 데이터 결과가 null이거나 빈 배열일 때
    if (!products || products.length === 0) {
    return <div>상품이 없습니다.</div>
    }


    // rendering process
    const printProductList = products.map(product =>(
        
        <div>
            <img src={`https://lgcns-react.roto.codes${product.image.url}`} />
            <Link to={`/products/${product.id}`}>
                {product.name}
            </Link>
        </div>
        
    ));

      
    return(
        <div className="ProductListPage">
            {printProductList}
        </div>
    )
}