import React, { useState, useEffect } from 'react'
import axios from 'axios'
import InputAnswer from '../InputAnswer'
import { useDispatch, useSelector } from 'react-redux'
import { dataActions } from '../../slices/dataSlice'



// LIST OF DIFFERENT MODES
const baseURL = 'https://x-math.herokuapp.com/api/'
const random = 'random/'
const addition = 'add/'
const subtraction = 'sub/'
const multiplication = 'mul/'
const division = 'div/'
const easyMode = '?max=99&min=1'
const mediumMode = '?max=999&min=100'
const hardMode = '?max=9999&min=1000'
const veryHardMode = '?max=99999&min=10000'
const insaneMode = '?max=9999999&min=1000000'

const randomEasyMode = `${baseURL}${random}${easyMode}`
const randomMediumMode = `${baseURL}${random}${mediumMode}`
const randomHardMode = `${baseURL}${random}${hardMode}`
const randomVeryHardMode = `${baseURL}${random}${veryHardMode}`
const randomInsaneMode = `${baseURL}${random}${insaneMode}`

// const addEasyMode = `${baseURL}${addition}${easyMode}`
// const addMediumMode = `${baseURL}${addition}${mediumMode}`
// const addHardMode = `${baseURL}${addition}${hardMode}`
// const addVeryHardMode = `${baseURL}${addition}${veryHardMode}`
// const addInsaneMode = `${baseURL}${addition}${insaneMode}`

// const subEasyMode = `${baseURL}${subtraction}${easyMode}`
// const subMediumMode = `${baseURL}${subtraction}${mediumMode}`
// const subHardMode = `${baseURL}${subtraction}${hardMode}`
// const subVeryHardMode = `${baseURL}${subtraction}${veryHardMode}`
// const subInsaneMode = `${baseURL}${subtraction}${insaneMode}`

// const mulEasyMode = `${baseURL}${multiplication}${easyMode}`
// const mulMediumMode = `${baseURL}${multiplication}${mediumMode}`
// const mulHardMode = `${baseURL}${multiplication}${hardMode}`
// const mulVeryHardMode = `${baseURL}${multiplication}${veryHardMode}`
// const mulInsaneMode = `${baseURL}${multiplication}${insaneMode}`

// const divEasyMode = `${baseURL}${division}${easyMode}`
// const divMediumMode = `${baseURL}${division}${mediumMode}`
// const divHardMode = `${baseURL}${division}${hardMode}`
// const divVeryHardMode = `${baseURL}${division}${veryHardMode}`
// const divInsaneMode = `${baseURL}${division}${insaneMode}`

// Load xMath API and store the data into store
function Xmath() {

  const firstNum = useSelector(state => state.firstNum)
  const secondNum = useSelector(state => state.secondNum)
  const operator = useSelector(state => state.operator)
  const answer = useSelector(state => state.answer)

const dispatch = useDispatch();

  // The useEffect() hook fires any time that the component is rendered.
  // An empty array is passed as the second argument so that the effect only fires once.
  useEffect(() => {
    axios
      .get(randomEasyMode)
      .then((response) => {
        console.log(response.data)
        dispatch(dataActions.addFirstNum(response.data.first))
        dispatch(dataActions.addSecondNum(response.data.second))
        dispatch(dataActions.addOperator(response.data.operation))
        dispatch(dataActions.addAnswer(response.data.answer))
      }
      
      );
  }, []);
  

  return (
    <>
      <div id="expressionHorizonital">
        <div id="firstNum">{firstNum}{operator}{secondNum}={answer}</div>
        </div>
        {/* <InputAnswer/> */}
      </>
  )
}



export default Xmath