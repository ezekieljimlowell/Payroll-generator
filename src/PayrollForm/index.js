import React, { useEffect, useState } from "react";
import PaySlip from "../PaySlip";
import styles from './index.module.css';
import EmployeeTable from '../EmployeeTable/EmployeeTable';
import { v4 as uuid } from 'uuid';

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
    const [errors, setErrors] = useState({
        employeeNameError: "",
        employeeCodeError: "",
        addressError: "",
        aadharNumberError: "",
        monthError: "",
        departmentError: "",
        pfNumberError: "",
        paidDaysError: "",
        lopError: "",
        uanNumberError: "",
        designationError: "",
        accountNumberError: "",
        hraError: "",
        basicError: "",
        conveyanceAllowanceError: "",
        specialAllowanceError: "",
        bonusError: "",
        pfAmountError: "",
        esiError: "",
        professionalTaxError: ""
    })

    const [localStorageArray, setArray] = useState([]);
    const [showPaySlip, setPaySlip] = useState(false);
    const [employeeData, setEmployeeData] = useState([]);
    const [oldData, setOldData] = useState(JSON.parse(localStorage.getItem("empRow") || "[]"));

    useEffect(() => {
        let arrayOfObject = JSON.parse(localStorage.getItem("empRow") || "[]");
        setEmployeeData(arrayOfObject);
        //setOldData(arrayOfObject);
        //console.log(oldData);
    }, [])

    const validateInputs = () => {
        let employeeNameError = "";
        let employeeCodeError = "";
        let addressError = "";
        let aadharNumberError = "";
        let monthError = "";
        let departmentError = "";
        let pfNumberError = "";
        let paidDaysError = "";
        let lopError = "";
        let uanNumberError = "";
        let designationError = "";
        let accountNumberError = "";
        let hraError = "";
        let basicError = "";
        let conveyanceAllowanceError = "";
        let specialAllowanceError = "";
        let bonusError = "";
        let pfAmountError = "";
        let esiError = "";
        let professionalTaxError = ""

        if (basicData.employeeName === "" || (!/^[a-zA-Z ]*$/.test(basicData.employeeName))) {
            const nameInput = document.querySelector(`input[name = employeeName]`);
            nameInput.focus();
            employeeNameError = (basicData.employeeName === "" ? "Employee name should not be empty" : "Please give only alphabets");
        }
        else if (basicData.employeeCode === "") {
            const codeInput = document.querySelector(`input[name = employeeCode]`);
            codeInput.focus();
            employeeCodeError = "Employee code should not be empty";
        }
        else if (basicData.address === "") {
            const addressInput = document.querySelector("input[name = address]");
            addressInput.focus();
            addressError = "Address should not be empty";
        }
        else if(basicData.aadharNumber === "" || !/\d{12}/.test(parseInt(basicData.aadharNumber))) {
            const aadharInput = document.querySelector("input[name = aadharNumber]");
            aadharInput.focus();
            aadharNumberError = (basicData.aadharNumber === "" ? "Aadhar number should not be empty" : "Please give exactly 12 digit");
        }
        else if(basicData.month === "") {
            const monthInput = document.querySelector("input[name = month]");
            monthInput.focus();
            monthError = "Month should not be empty";
        }
        else if(basicData.department === "" || !/^[A-Za-z ]+$/.test(basicData.department)) {
            const departmentInput = document.querySelector("input[name = department]");
            departmentInput.focus();
            departmentError = (basicData.department === "" ? "Department should not be empty" : "Department should be in alphabets");
        }
        if (employeeNameError || employeeCodeError || addressError ||
            aadharNumberError || monthError || departmentError || pfNumberError ||
            paidDaysError || lopError || uanNumberError || designationError ||
            accountNumberError || hraError || basicError || conveyanceAllowanceError ||
            specialAllowanceError || bonusError || pfAmountError || esiError ||
            professionalTaxError) {
            setErrors({
                employeeNameError: employeeNameError,
                employeeCodeError: employeeCodeError,
                addressError: addressError,
                aadharNumberError: aadharNumberError,
                monthError: monthError,
                departmentError: departmentError,
                pfNumberError: pfNumberError,
                paidDaysError: paidDaysError,
                lopError: lopError,
                uanNumberError: uanNumberError,
                designationError: designationError,
                accountNumberError: accountNumberError,
                hraError: hraError,
                basicError: basicError,
                conveyanceAllowanceError: conveyanceAllowanceError,
                specialAllowanceError: specialAllowanceError,
                bonusError: bonusError,
                pfAmountError: pfAmountError,
                esiError: esiError,
                professionalTaxError: professionalTaxError
            })
            return false;
        }
        return true;
    }

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

    const generatePaySlip = (event) => {
        event.preventDefault();
        if (validateInputs()) {
            setPaySlip(true);
            const employeeObject = {
                id: uuid(),
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

            if (oldData.length === 0) {
                //localStorageArray.push(employeeObject)
                let concatenatedArray = localStorageArray.concat(...oldData, employeeObject);
                setArray(concatenatedArray);
                localStorage.setItem("empRow", JSON.stringify(concatenatedArray));
                //console.log(localStorageArray);
                let arrayOfObject = JSON.parse(localStorage.getItem("empRow") || "[]");
                setEmployeeData(arrayOfObject);
                //console.log("check");
            }
            else {
                //localStorageArray.push(...oldData, employeeObject)
                let refreshedData = localStorageArray.concat(...oldData, employeeObject);
                setArray(refreshedData);
                //console.log(refreshedData);
                localStorage.setItem("empRow", JSON.stringify(refreshedData));
                let arrayOfObject = JSON.parse(localStorage.getItem("empRow") || "[]");
                setEmployeeData(arrayOfObject);
                setOldData("");
                //console.log("passed");
            }
        }
    }

    const props = {
        ...basicData,
        ...salaryData
    }

    return (
        <div>
            <form onSubmit={generatePaySlip} className="form-group" id={styles.payRollForm}>
                <h1>Apton works payroll</h1>
                <h2>Basic Information</h2>
                <div className="form-row">
                    <label>Employee name </label>
                    <div className="col-6">
                        <input className="form-control" type="text" onChange={handleBasicData}
                            name="employeeName" value={basicData.employeeName}></input>
                        {errors.employeeNameError && <span style={{ color: "red" }}>{errors.employeeNameError}</span>}
                    </div>
                </div>
                <div className="form-row">
                    <label>Employee code </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData}
                            name="employeeCode" value={basicData.employeeCode}></input>
                        {errors.employeeCodeError && <span style={{ color: "red" }}>{errors.employeeCodeError}</span>}
                    </div>
                </div>
                <div className="form-row">
                    <label>Employee Address </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData}
                            name="address" value={basicData.address}></input>
                        {errors.addressError && <span>{errors.addressError}</span>}
                    </div>
                </div>
                <div className="form-row">
                    <label>Aadhar Number </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onInput={handleBasicData}
                            name="aadharNumber" value={basicData.aadharNumber}></input>
                        {errors.aadharNumberError && <span>{errors.aadharNumberError}</span>}
                    </div>
                </div>
                <div className="form-row">
                    <label>Month </label>
                    <div className="col-6">
                        <input type="month" className="form-control" onChange={handleBasicData}
                            name="month" value={basicData.month}></input>
                        {errors.monthError && <span>{errors.monthError}</span>}
                    </div>
                </div>
                <div className="form-row">
                    <label>Department </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData}
                            name="department" value={basicData.department}></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>PF account number </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData}
                            name="pfNumber" value={basicData.pfNumber}></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>Paid days </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData}
                            name="paidDays" value={basicData.paidDays}></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>LOP </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData}
                            name="lop" value={basicData.lop}></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>UAN number </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData}
                            name="uanNumber" value={basicData.uanNumber}></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>Designation </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData}
                            name="designation" value={basicData.designation}></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>Bank account number </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData}
                            name="accountNumber" value={basicData.accountNumber}></input>
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
                        <input type="text" className="form-control" onChange={handleSalaryDetails}
                            name="basic" value={salaryData.basic}></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>Conveyance allowance</label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleSalaryDetails}
                            name="conveyanceAllowance" value={salaryData.conveyanceAllowance}></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>Special allowance</label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleSalaryDetails}
                            name="specialAllowance" value={salaryData.specialAllowance}></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>Bonus</label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleSalaryDetails}
                            name="bonus" value={salaryData.bonus}></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>PF amount </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleSalaryDetails}
                            name="pfAmount" value={salaryData.pfAmount}></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>ESI </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleSalaryDetails}
                            name="esi" value={salaryData.esi}></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>Professional tax </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleSalaryDetails}
                            name="professionalTax" value={salaryData.professionalTax}></input>
                    </div>
                </div>
                <br></br>
                <button type="submit">Generate</button>
                <button type="button" onClick={() => setPaySlip(false)}>Reset</button>
            </form>
            <br></br>
            {employeeData.length > 0 && <>
                <EmployeeTable arrayOfObject={employeeData} />
            </>}
            <div>
                {showPaySlip && <PaySlip {...props} />}
            </div>
        </div>
    )
}

export default PayrollForm;