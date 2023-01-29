import { Card, Space } from 'antd';
import Layout from 'antd/es/layout/layout';
import { useEffect } from 'react';


const { Meta } = Card;
export function Catalog ({ products }) {

    useEffect(() =>{
console.log('catalog', products);
    }, [])

    return (
        
        <Space direction='horizontal' align='center' split wrap className='space'>
            {products.products.map(product => {
              return <Card
                    style={{ width: 300 }}
                    cover={
                        <img
                            alt={product.name}
                            src={product.pictures}
                        />
                    }>
                    <Meta
                        // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title={product.name}
                        description={product.description}
                    />

                </Card>
            })}
        </Space>
    )
}