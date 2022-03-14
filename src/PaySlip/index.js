import React from "react";
import classes from './index.module.css';
import Apton_logo from '../PayrollForm/Apton_logo.jpg';

const PaySlip = (props) => {
    const { employeeName, employeeCode, address, aadharNumber, month,
        department, pfNumber, paidDays, lop, uanNumber, designation,
        accountNumber, hra, basic, conveyanceAllowance, specialAllowance,
        bonus, pfAmount, esi, professionalTax } = props;

    return (
        <div className={classes.container}>
            <div className={classes.header}>
            <img src={Apton_logo} alt="Apton logo"></img>
                <div>No: 7, Kaliamman kovil street, Rathnapuri, Chennai-600107</div>
                <b><div>Payslip for the month: {month}</div></b>
            </div>
            <div className={classes.line}></div>
            <div className={classes.firstRow}>
                <div className={classes.firstColumn}>
                    <div>Employee name: {employeeName}</div>
                    <div>Employee code: {employeeCode}</div>
                    <div>Employee address: {address}</div>
                    <div>Designation: {designation}</div>
                    <div>Department: {department}</div>

                </div>
                <div className={classes.secondColumn}>
                    <div>Aadhar number: {aadharNumber}</div>
                    <div>PF number: {pfNumber}</div>
                    <div>UAN: {uanNumber}</div>
                    <div>Bank account number: {accountNumber}</div>
                    <div>Paid days: {paidDays}</div>
                    <div>Loss of Pay: {lop}</div>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Earnings</th>
                        <th>Amount monthly</th>
                        <th>Amount yearly</th>
                        <th>Deductions</th>
                        <th>Amount monthly</th>
                        <th>Amount yearly</th>
                    </tr>
                </thead>
            </table>
            <div>{hra}</div>
            <div>{basic}</div>
            <div>{conveyanceAllowance}</div>
            <div>{specialAllowance}</div>
            <div>{bonus}</div>
            <div>{pfAmount}</div>
            <div>{esi}</div>
            <div>{professionalTax}</div>
        </div>
    )
}

export default PaySlip;