import React, { useState } from 'react'
import MatrixElements from './MatrixElements/MatrixElements'
import './Matrix.css'

let Matrix = () => {
    const [height, setHeight] = useState()
    const matrixHeigh = (event) => {
        setHeight(event.target.value)
    }

    const [width, setWidth] = useState()
    const matrixWidth = (event) => {
        setWidth(event.target.value)
        event.target.value = ""
    }
    
    const [addRowValue,setAddRowValue]=useState()

    const [closestAmount, setClosestAmount] = useState(1)
    const [closestAmountInput, setClosestAmountInput] = useState()
    const matrixClosetAmount = (event) => {
        setClosestAmount(event.target.value)
        setClosestAmountInput(event.target.value)
       
    }
    let [matrix, setMatrix] = useState([
        [{ amount: 220, id: Math.random() }, { amount: 380, id: Math.random() }],
        [{ amount: 520, id: Math.random() }, { amount: 120, id: Math.random() }]
    ])

    let random = () => Math.round((Math.random() * (999 - 0 + 1)) + 0)


    let createMatrix = (h, w) => {
        let result = new Array(h || 1).fill().map(() => {

            return new Array(w || 1).fill().map(() => {
                return {
                    amount: random(),
                    id: Math.random()

                }
            })
        })
        setMatrix(result)
        setAddRowValue(w)
        setWidth('')
        setHeight('')
        setClosestAmountInput('')
    }
     
    

    return (
        <div className='Matrix'>
            <div className="matrixOptions" >
                <form >   
                <input type="number" placeholder="M"name='m' value={height} onChange={matrixHeigh}  />
                <input type="number" placeholder='N' name='n' value={width} onChange={matrixWidth}   />
                <input type="number" placeholder='X' name='x' value={closestAmountInput} onChange={matrixClosetAmount}  />
                </form>
                <div className="createMatrix" onClick={() => createMatrix(parseInt(height), parseInt(width))}></div>
            </div>

            <MatrixElements
                height={height}
                width={width}
                matrix={matrix}
                setMatrix={setMatrix}
                random={random}
                closestAmount={closestAmount}
                addRowValue={addRowValue}
            />


        </div>
    )

}

export default Matrix