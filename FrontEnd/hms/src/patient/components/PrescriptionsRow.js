function PrescriptionsRow(props)
{
   return <tr key={props.prescription.id}>
                                        <td>
                                            {props.prescription.id}
                                        </td>
                                        <td>
                                            {props.prescription.d_name}
                                        </td>
                                        <td>
                                            {props.prescription.date.substring(0, 10) + ' ' + props.prescription.date.substring(11, 16)}
                                        </td>
                                        <td>
                                            {
                                              <input type={"button"} value={"Details"} className='btn btn-info' onClick={()=>{
                                                props.details(props.prescription.id)
                                                }}></input>
                                            }
                                        </td>
                                    </tr>
}
export default PrescriptionsRow;