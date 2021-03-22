import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useParams} from 'react-router';

export default function ProductDetailPage(){
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { productId } = useParams();

    
    const API_URL = 'https://lgcns-react.roto.codes/products/'+productId;

    useEffect(()=>{
        setLoading(true);
        fetch(API_URL)
            .then(res=>res.json())
            .then(product => {
                setProduct(product);
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
    if (!product || product.length === 0) {
    return <div>상품이 없습니다.</div>
    }


    // rendering process
    return(
        <div className="ProductDetailPage">
            <img src={`https://lgcns-react.roto.codes${product.image.url}`} />
            <Link className="toList" to="/products">목록으로</Link>
            <div className="content">
                {product.name}
                {product.description}
            </div>

           

        </div>
    )
}