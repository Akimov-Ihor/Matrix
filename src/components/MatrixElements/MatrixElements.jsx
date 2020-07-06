import React from 'react'
import MatrixRowSum from './MatrixRowSum/MatrixRowSum'
import MatrixColumSup from './MatrixColumSum/MatrixColumSum'
import MatrixTable from './MatrixTable/MatrixTable'
import  './MatrixElements.css'



const MatrixElements = (props) => {
    return (
        <div className="matrixElements">
            <div className="matrixTableAndSumRow">
                <MatrixTable
                    matrix={props.matrix}
                    setMatrix={props.setMatrix}
                    closestAmount={props.closestAmount}
                />
                
                <MatrixRowSum
                    matrix={props.matrix}
                    setMatrix={props.setMatrix}
                />
            </div>
        
            
                <MatrixColumSup
                    matrix={props.matrix}
                    setMatrix={props.setMatrix}
                    random={props.random}
                    addRowValue={props.addRowValue}
                />
            

        </div>
    )
}

export default MatrixElements