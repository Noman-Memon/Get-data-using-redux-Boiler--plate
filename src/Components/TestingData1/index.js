import React, { useEffect, useState } from 'react'
import { GetCarts } from '../../Store/Reducers/Cart'
import { useDispatch, useSelector } from 'react-redux'

function TestingData1() {
  const dispatch = useDispatch()

  const {
    carts: { Carts },
  } = useSelector((state) => state)

  const [itemCarts, setItemCarts] = useState([])
  console.log('🚀 ~ file: home.js ~ line 8 ~ Home ~ itemProduct', itemCarts)

  useEffect(() => {
    dispatch(GetCarts())
  }, [])
  console.log(Carts.carts, 'carts')
  useEffect(() => {
    if (Carts.carts) {
      setItemCarts(Carts.carts)
    } else {
      setItemCarts([])
    }
  }, [Carts])

  return (
    <div>
      {itemCarts.map((v, i) => {
        return <h3>{v.userId}</h3>
      })}

      <h1>hello</h1>
    </div>
  )
}

export default TestingData1
