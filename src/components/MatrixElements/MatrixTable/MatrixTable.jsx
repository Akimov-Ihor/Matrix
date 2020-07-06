import React from "react"
import "./MatrixTable.css"

const MatrixTable = (props) => {
    const handleIncrementCell = (cell) => {
        return props.matrix.forEach((array, index) => {
            return array.find((o, idx) => {
                if (o.id === cell.id) {
                    let clone = [...props.matrix];
                    clone[index][idx].amount++;
                    props.setMatrix(clone)
                }
            })
        })

    }

    return (
        <table >
            <tbody>
                {props.matrix.map(row =>
                    <tr className="row" key={Math.random()}>
                        {
                            row.map(cell =>
                                <td
                                 className="row" key={cell.id} 
                                 onClick={() => handleIncrementCell(cell)} >
                                <span>
                                 {cell.amount}
                                 </span>
                                </td>)

                        }
                    </tr>)
                }
            </tbody>
        </table>
    )
}

export default MatrixTable