import { useEffect, useState } from "react"
import { api } from "../Api/api"
import { Catalog } from "../Catalog/Catalog"
import { SearchOutlined } from '@ant-design/icons';
import { Button} from 'antd';
import { useNavigate } from "react-router-dom";

export function ProductPage() {
    const navigate = useNavigate();
    const [products, setProducts] = useState({ total: 0, products: [] })

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token')
            if (token) {
                const res = await api.getProducts(token);
                const responce = await res.json()
                setProducts(responce)
            } else {
                navigate(-1)
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            <Button className='button' icon={<SearchOutlined />}>Search</Button>
            <Catalog products={products} />
        
        </div>)
}