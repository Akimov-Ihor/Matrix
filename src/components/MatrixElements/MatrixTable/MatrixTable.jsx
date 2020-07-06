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
    let makeOneArray = [].concat.apply([], props.matrix)
    let sortMatrix=makeOneArray.sort((a,b) => a.amount - b.amount);
   
    // let makeOneArray = [].concat(...props.matrix);
    // let sortMatrix=makeOneArray.sort((a, b) => a.amount - b.amount)
   

//    let getClosest = (num, arr) => {
//         //find closest values
//         console.log(arr[0].amount)
//         if (arr.length) {
//           if (num < arr[0].amount) {
//             return arr[0];
//           } else if (num > arr[arr.length - 1].amount) {
//             return arr[arr.length - 1];
//           } else {
//             return arr
//               .sort((a, b) => Math.abs(a.amount - num) - Math.abs(b.amount - num))
//               .slice(0, props.closestAmount + 1)
//               .map(elem => elem.id);
//           }
//         }
//       };
    
    // let  handleHighlightClosest = (index, value) => {
    //     // get closest values and highlight
    //     let closestID = getClosest(value, sortMatrix);
    //     console.log(closestID)
    //     if (closestID.length) {
    //       closestID.forEach(id => {
    //         if ( id !== index) {
    //            console.log(closestID)
    //          closestID[id].classList.add("hightlight");
           
    //         }
    //       });
    //     }
    //   };


   
    
    return (
        <table >
            <tbody>
                {props.matrix.map(row =>
                    <tr className="row" key={Math.random()}>
                        {
                            row.map(cell =>
                                <td
                                 className="row" key={cell.id} 
                                 onClick={() => handleIncrementCell(cell)} 
                                //  onMouseOver={()=>{handleHighlightClosest(cell.id,cell.amount)}}
                                 >
                                <span>
                                 {/* className={arrayWithIds.includes(cell.id)
                                  ? "hightlight"
                                 : " "}> */}
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