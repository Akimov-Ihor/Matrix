import React from "react"
import './MatrixColumSum.css'

const MatrixColumSup = (props) => {
    let colSummaryFunc = (matrix) => {
        let result = matrix.reduce((acc, row) => {
            row.forEach((b, i) => {
                return acc[i] = (acc[i] || 0) + b.amount;
            });
            return acc;
        }, []).map(x => x / matrix.length)
        return result
    }
    let columSum = colSummaryFunc(props.matrix)


    let addItem = (w) => {
        let add = new Array(w || 1).fill().map(() => {
            return {
                amount: props.random(),
                id: Math.random()
            }
        })
        props.setMatrix((previos) => [...previos, add])
    }

    return (
        <div className="MatrixColumSumWrapper">
            <table  className="MatrixColumSumTable">
                <tbody className="MatrixColumSumTbody">
                    {columSum.map((p, id) => <tr>
                        <td>{Math.ceil(p)}</td>
                        
                    </tr>)}
                    <td className="AddColum" onClick={() => { addItem(parseInt(props.addRowValue)) }}></td>
                </tbody>
            </table>
            
        </div>
    )
}

export default MatrixColumSup

