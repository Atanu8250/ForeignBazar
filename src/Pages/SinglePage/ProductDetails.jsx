import React from 'react'
import axios from 'axios'

const ProductDetails = () => {

    const [data, setData] = React.useState([])


    const getProductDetails = (val) => {
        onOpen()
        axios({
            baseURL: 'http://localhost:3000',
            url: `/Male/${val}`,
            method: 'get'
        })
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.log(err));
    }

    return (
        <div>ProductDetails</div>
    )
}

export default ProductDetails