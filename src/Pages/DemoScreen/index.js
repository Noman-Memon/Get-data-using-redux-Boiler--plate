import React from 'react'
import { removeuserDataFromLocalStorage } from '../../Store/Reducers/AuthReducer'
import { useDispatch, useSelector } from 'react-redux'

// import TestingData from '../../Components/TestingData'
import TestingData1 from '../../Components/TestingData1'

const DemoScreen = () => {
  const dispatch = useDispatch()

  const removeToken = async () => {
    try {
      await localStorage.removeItem('token')
      dispatch(removeuserDataFromLocalStorage())
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <div>This is demo screen</div>
      <div className="App">
        {/* <TestingData /> */}
        <TestingData1 />
        <p>Running</p>
        <button onClick={removeToken}>Logout</button>
      </div>
    </>
  )
}

export default DemoScreen
