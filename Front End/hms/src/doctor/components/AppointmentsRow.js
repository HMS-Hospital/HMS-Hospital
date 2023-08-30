function AppointmentsRow(props)
{
    return <tr key={props.appointment.id}>
    <td>
        {props.appointment.id}
    </td>
    <td>
        {props.appointment.patientname}
    </td>
    <td>
        {props.appointment.appoint.substring(0, 10) + ' ' + props.appointment.appoint.substring(11, 16)}
    </td>
    <td>
        {props.appointment.status}
    </td>
    <td>
        {
            props.appointment.status=="ATTENDED" || props.appointment.status=="CANCELLED"|| props.appointment.status=="ATTENDED_AND_PRESCRIP"|| props.appointment.status=="ATTENDED_AND_BILL_GENERATED"?"-" :<input type={"button"} value={"Cancel"} className='btn btn-danger' onClick={()=>{
                props.cancel(props.appointment.id)
            }}></input>
        }
    </td>
    <td>
        {
            props.appointment.status=="ATTENDED" || props.appointment.status=="CANCELLED"|| props.appointment.status=="ATTENDED_AND_BILL_GENERATED"?
            
            
            
            
            
            "-" 
            
            
            
            
            
            
            
            :
            
            props.appointment.status=="CONFIRMED"?<input type={"button"} value={"Attend"} className='btn btn-info' onClick={()=>{
                props.attend(props.appointment.id)
            }}></input>
            
            
            :

            props.appointment.status=="ATTENDED_AND_PRESCRIP"?<input type={"button"} value={"BIll"} className='btn btn-success' onClick={()=>{
                props.Bill(props.appointment.id)
            }}></input>:
            
            <input type={"button"} value={"Confirm"} className='btn btn-success' onClick={()=>{
                props.confirm(props.appointment.id)
            }}></input>
        }
    </td>
</tr>
}
export default AppointmentsRow;