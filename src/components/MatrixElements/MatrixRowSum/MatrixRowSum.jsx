import React from 'react'
import './MatrixRowSum.css'


const MatrixRowESum=(props)=>{
    let sumRowAmount = (matrix) => {
        let sumResult = matrix.map(row => {
          return row.reduce((sum, { amount }) => parseInt(sum + amount), [])
        })
        return sumResult
      }
      let rowsSum = sumRowAmount(props.matrix)

      const handelDeleteLine = (elem, id) => {
        let cloneMatrix = props.matrix.filter((row, rowId) => id !== rowId);
        props.setMatrix(cloneMatrix)
      }
    return(
        <div >
          <table >
            <tbody>
            {rowsSum.map((p, id) => <tr>
              <td className="rowSum">{p}  </td> 
            <td className="handelDelete" onClick={() => handelDeleteLine(p, id)}></td>
              </tr>)}
            </tbody>
        </table>
      


        </div>
    )
}


export default MatrixRowESum 