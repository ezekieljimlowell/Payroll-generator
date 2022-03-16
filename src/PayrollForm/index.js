import React, { useEffect, useState } from "react";
import PaySlip from "../PaySlip";
import styles from './index.module.css';
import EmployeeTable from '../EmployeeTable/EmployeeTable';

const PayrollForm = () => {
    const [basicData, setBasicData] = useState({
        employeeName: "",
        employeeCode: "",
        address: "",
        aadharNumber: "",
        month: "",
        department: "",
        pfNumber: "",
        paidDays: "",
        lop: "",
        uanNumber: "",
        designation: "",
        accountNumber: ""
    });
    const [salaryData, setSalaryData] = useState({
        hra: "",
        basic: "",
        conveyanceAllowance: "",
        specialAllowance: "",
        bonus: "",
        pfAmount: "",
        esi: "",
        professionalTax: ""
    })
    const [localStorageArray, setArray] = useState([]);
    const [showPaySlip, setPaySlip] = useState(false);
    const [employeeData, setEmployeeData] = useState([]);
    let [number, setNumber] = useState(-1);

    useEffect(() => {
        let arrayOfObject = JSON.parse(localStorage.getItem("empRow") || "[]");
        setEmployeeData(arrayOfObject);
        console.log(arrayOfObject);
    }, [])

    const handleBasicData = (event) => {
        const value = event.target.value;
        setBasicData({
            ...basicData,
            [event.target.name]: value
        });
    }

    const handleSalaryDetails = (event) => {
        const value = event.target.value;
        setSalaryData({
            ...salaryData,
            [event.target.name]: value
        });
    }

    //let arrayOfObject = JSON.parse(localStorage.getItem("empRow") || "[]");

    const generatePaySlip = (event) => {
        event.preventDefault();
        setPaySlip(true);
        setNumber(++number);
        const employeeObject = {
            id: number,
            empName: basicData.employeeName,
            empCode: basicData.employeeCode,
            address: basicData.address,
            month: basicData.month,
            accountNumber: basicData.accountNumber,
            department: basicData.department,
            designation: basicData.designation,
            paidDays: basicData.paidDays,
            lop: basicData.lop,
            uanNumber: basicData.uanNumber,
            aadharNumber: basicData.aadharNumber,
            hra: salaryData.hra,
            basic: salaryData.basic,
            conveyanceAllowance: salaryData.conveyanceAllowance,
            specialAllowance: salaryData.specialAllowance,
            bonus: salaryData.bonus,
            pfAmount: salaryData.pfAmount,
            esi: salaryData.esi,
            professionalTax: salaryData.professionalTax
        };

        localStorageArray.push(employeeObject)
        localStorage.setItem("empRow", JSON.stringify(localStorageArray));
        let arrayOfObject = JSON.parse(localStorage.getItem("empRow") || "[]");
        setEmployeeData(arrayOfObject);
        //setEmployeeData(arrayOfObject);
    }

    const props = {
        ...basicData,
        ...salaryData
    }

    const employeeProp = {
        ...employeeData
    }

    return (
        <div>
            <form onSubmit={generatePaySlip} className="form-group" id={styles.payRollForm}>
                <h1>Apton works payroll</h1>
                <h2>Basic Information</h2>
                <div className="form-row">
                    <label>Employee name </label>
                    <div className="col-6">
                        <input className="form-control" type="text" onChange={handleBasicData} name="employeeName" value={basicData.employeeName}></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>Employee code </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData} name="employeeCode" value={basicData.employeeCode}></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>Employee Address </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData} name="address" value={basicData.address}></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>Aadhar Number </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData} name="aadharNumber" value={basicData.aadharNumber}></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>Month </label>
                    <div className="col-6">
                        <input type="month" className="form-control" onChange={handleBasicData} name="month" value={basicData.month}></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>Department </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData} name="department" value={basicData.department}></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>PF account number </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData} name="pfNumber" value={basicData.pfNumber}></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>Paid days </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData} name="paidDays" value={basicData.paidDays}></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>LOP </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData} name="lop" value={basicData.lop}></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>UAN number </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData} name="uanNumber" value={basicData.uanNumber}></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>Designation </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData} name="designation" value={basicData.designation}></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>Bank account number </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData} name="accountNumber" value={basicData.accountNumber}></input>
                    </div>
                </div>

                <br></br>
                <h2>Salary Information</h2>
                <div className="form-row">
                    <label>HRA</label>
                    <div className="col-6">
                        <input type="text" className="form-control" name="hra" onChange={handleSalaryDetails}></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>Basic</label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleSalaryDetails} name="basic" value={salaryData.basic}></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>Conveyance allowance</label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleSalaryDetails} name="conveyanceAllowance" value={salaryData.conveyanceAllowance}></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>Special allowance</label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleSalaryDetails} name="specialAllowance" value={salaryData.specialAllowance}></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>Bonus</label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleSalaryDetails} name="bonus" value={salaryData.bonus}></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>PF amount </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleSalaryDetails} name="pfAmount" value={salaryData.pfAmount}></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>ESI </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleSalaryDetails} name="esi" value={salaryData.esi}></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>Professional tax </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleSalaryDetails} name="professionalTax" value={salaryData.professionalTax}></input>
                    </div>
                </div>
                <br></br>
                <button type="submit">Generate</button>
                <button type="button" onClick={() => setPaySlip(false)}>Reset</button>
            </form>
            <br></br>
            {employeeData.length > 0 && <>
                <EmployeeTable
                    arrayOfObject={employeeData}
                    //employeeProp={employeeProp}
                    setEmployeeData={setEmployeeData}
                    employeeData={employeeData}
                />
            </>}
            <div>
                {showPaySlip && <PaySlip {...props} />}
            </div>
        </div>
    )
}

export default PayrollForm;