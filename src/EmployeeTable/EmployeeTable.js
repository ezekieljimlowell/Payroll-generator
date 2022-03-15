import React, { useState } from "react";
import PaySlip from "../PaySlip";

const EmployeeTable = (props) => {
    const { id, employeeName, employeeCode, department,
        designation, paidDays, lop, uanNumber,
        aadharNumber, address, month, accountNumber,
        hra, basic, conveyanceAllowance, specialAllowance,
        bonus, pfAmount, esi, professionalTax } = props;
    const [showPaySlip, setShowPaySlip] = useState(false);

    console.log(id);
    let paySlipProperties = {};
    
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Employee name</th>
                        <th>Employee code</th>
                        <th>Department</th>
                        <th>Designation</th>
                        <th>Paid days</th>
                        <th>Loss of pay</th>
                        <th>UAN number</th>
                        <th>Aadhar number</th>
                        <th>Delete</th>
                        <th>Expand pay slip</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{employeeName}</td>
                        <td>{employeeCode}</td>
                        <td>{department}</td>
                        <td>{designation}</td>
                        <td>{paidDays}</td>
                        <td>{lop}</td>
                        <td>{uanNumber}</td>
                        <td>{aadharNumber}</td>
                        <td><button type="button">Delete</button></td>
                        <td><button type="button" onClick={() => setShowPaySlip(true)}>Show</button></td>
                        <td><button type="button" onClick={() => setShowPaySlip(false)}>Hide</button></td>
                    </tr>
                </tbody>
            </table>
            {showPaySlip ? <PaySlip {...props}/> : null}
        </>
    )
}

export default EmployeeTable;