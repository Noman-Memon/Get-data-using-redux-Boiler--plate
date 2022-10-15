import React, { useEffect, useState } from 'react'
import { GetProducts } from '../../Store/Reducers/Product'
import { useDispatch, useSelector } from 'react-redux'

function TestingData() {
  const dispatch = useDispatch()

  const {
    product: { Products },
  } = useSelector((state) => state)

  const [itemProduct, setItemProduct] = useState([])
  console.log('🚀 ~ file: home.js ~ line 8 ~ Home ~ itemProduct', itemProduct)

  useEffect(() => {
    dispatch(GetProducts())
  }, [])

  console.log(Products.products, 'Products')

  useEffect(() => {
    if (Products.products) {
      setItemProduct(Products.products)
    } else {
      setItemProduct([])
    }
  }, [Products])

  return (
    <div>
      {itemProduct.map((v, i) => {
        return <h3>{v.title}</h3>
      })}

      <h1>hello</h1>
    </div>
  )
}

export default TestingData
