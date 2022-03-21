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
        accountNumber: "",
        hra: "",
        basic: "",
        conveyanceAllowance: "",
        specialAllowance: "",
        bonus: "",
        pfAmount: "",
        esi: "",
        professionalTax: ""
    });

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

    const [isDuplicatePresent, setDuplicate] = useState({
        duplicateEmployeeCode: false,
        duplicateAddress: false,
        duplicateAadhar: false,
        duplicatePfNumber: false,
        duplicateUanNumber: false,
        duplicateAccountNumber: false
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
        let professionalTaxError = "";

        switch (true) {
            //Basic details
            case (basicData.employeeName === "" || !/^[A-Z-a-z ]*$/.test(basicData.employeeName)):
                const nameInput = document.querySelector(`input[name = employeeName]`);
                nameInput.focus();
                employeeNameError = (basicData.employeeName === "" ? "Employee name should not be empty" : "Please give only alphabets");
                break;
            case (basicData.employeeCode === ""):
                const codeInput = document.querySelector(`input[name = employeeCode]`);
                codeInput.focus();
                employeeCodeError = "Employee code should not be empty";
                break;
            case (basicData.address === ""):
                const addressInput = document.querySelector("input[name = address]");
                addressInput.focus();
                addressError = "Address should not be empty";
                break;
            case (basicData.aadharNumber === "" || !/\d{12}/.test(basicData.aadharNumber)):
                const aadharInput = document.querySelector("input[name = aadharNumber]");
                aadharInput.focus();
                aadharNumberError = (basicData.aadharNumber === "" ? "Aadhar number should not be empty" : "Please give exactly 12 digit");
                break;
            case (basicData.month === ""):
                const monthInput = document.querySelector("input[name = month]");
                monthInput.focus();
                monthError = "Month should not be empty";
                break;
            case (basicData.department === "" || !/^[A-Z-a-z ]*$/.test(basicData.department)):
                const departmentInput = document.querySelector("input[name = department]");
                departmentInput.focus();
                departmentError = (basicData.department === "" ? "Department should not be empty" : "Department should be in alphabets");
                break;
            case (basicData.pfNumber === "" || !/^[A-Z-a-z-0-9\-]{22}/):
                const pfNumberInput = document.querySelector("input[name = pfNumber]");
                pfNumberInput.focus();
                pfNumberError = (basicData.pfNumber === "" ? "PF number should not be empty" : "Please give only numbers and characters with length 22 only");
                break;
            case (basicData.paidDays === "" || !/^\d{1,2}$/.test(basicData.paidDays)):
                const paidDaysInput = document.querySelector("input[name = paidDays]");
                paidDaysInput.focus();
                paidDaysError = (basicData.paidDays === "" ? "Paid days should not be empty" : "Please give only digits of length one or two");
                break;
            case (basicData.lop === "" || !/^\d{1,2}$/.test(basicData.lop)):
                const lopInput = document.querySelector("input[name = lop]");
                lopInput.focus();
                lopError = (basicData.lop === "" ? "LOP should not be empty" : "Please give LOP in digits of length one or two");
                break
            case (basicData.uanNumber === "" || !/\d{12}/.test(basicData.uanNumber)):
                const uanInput = document.querySelector("input[name = uanNumber]");
                uanInput.focus();
                uanNumberError = (basicData.uanNumber === "" ? "UAN number should not be empty" : "UAN number must be exactly 12 digits");
                break;
            case (basicData.designation === "" || !/^[a-zA-Z ]*$/.test(basicData.designation)):
                const designationInput = document.querySelector("input[name = designation]");
                designationInput.focus();
                designationError = (basicData.designation === "" ? "Designation should not be empty" : "Designation should be in alphabets");
                break;
            case (basicData.accountNumber === "" || !/^[0-9]/.test(basicData.accountNumber)):
                const accountInput = document.querySelector("input[name = accountNumber]");
                accountInput.focus();
                accountNumberError = (basicData.accountNumber === "" ? "Account number should not be empty" : "Please give numbers only for account number");
                break;
            case (basicData.hra === "" || !/^[0-9]/.test(basicData.hra)):
                const hraInput = document.querySelector("input[name = hra]");
                hraInput.focus();
                hraError = (basicData.hra === "" ? "HRA should be filled" : "HRA should be number");
                break;
            case (basicData.basic === "" || !/^[0-9]/.test(basicData.basic)):
                const basicInput = document.querySelector("input[name = basic]");
                basicInput.focus();
                basicError = (basicData.basic === "" ? "Basic should not be empty" : "Basic must be in numbers");
                break;
            case (basicData.conveyanceAllowance === "" || !/^[0-9]/.test(basicData.conveyanceAllowance)):
                const conveyanceInput = document.querySelector("input[name = conveyanceAllowance]");
                conveyanceInput.focus();
                conveyanceAllowanceError = (basicData.conveyanceAllowance === "" ? "Conveyance should not be empty" : "Conveyance should be in numbers");
                break;
            case (basicData.specialAllowance === "" || !/^[0-9]/.test(basicData.specialAllowance)):
                const specialAllowanceInput = document.querySelector("input[name = specialAllowance]");
                specialAllowanceInput.focus();
                specialAllowanceError = (basicData.specialAllowance === "" ? "Special allowance should not be empty" : "Speacial allowance must be in numbers");
                break;
            case (basicData.bonus === "" || !/^[0-9]/.test(basicData.bonus)):
                const bonusInput = document.querySelector("input[name = bonus]");
                bonusInput.focus();
                bonusError = (basicData.bonus === "" ? "Bonus should be filled" : "Bonus should be number");
                break;
            case (basicData.pfAmount === "" || !/^[0-9]/.test(basicData.pfAmount)):
                const pfAmountInput = document.querySelector("input[name = pfAmount]");
                pfAmountInput.focus();
                pfAmountError = (basicData.pfAmount === "" ? "PF amount should be filled" : "PF amount should be number");
                break;
            case (basicData.esi === "" || !/^[0-9]/.test(basicData.esi)):
                const esiInput = document.querySelector("input[name = esi]");
                esiInput.focus();
                esiError = (basicData.esi === "" ? "ESI should be filled" : "ESI should be number");
                break;
            case (basicData.professionalTax === "" || !/^[0-9]/.test(basicData.professionalTax)):
                const professionalInput = document.querySelector("input[name = professionalTax]");
                professionalInput.focus();
                professionalTaxError = (basicData.professionalTax === "" ? "Professional tax should be filled" : "Professional tax should be number");
                break;
            default:
                setErrors({
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
                });
                break;

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

    const duplicateValidation = () => {
        const duplicateEmployeeCode = employeeData.length > 0 && employeeData.some()
    }

    const handleBasicData = (event) => {
        const value = event.target.value;
        setBasicData({
            ...basicData,
            [event.target.name]: value
        });

        if (basicData.employeeName !== "" || basicData.employeeCode !== "" || basicData.address !== "" || basicData.aadharNumber !== "" ||
            basicData.month !== "" || basicData.department !== "" || basicData.pfNumber !== "" || basicData.paidDays !== "" ||
            basicData.lop !== "" || basicData.uanNumber !== "" || basicData.designation !== "" || basicData.accountNumber !== "" ||
            basicData.hra !== "" || basicData.basic !== "" || basicData.conveyanceAllowance !== "" || basicData.specialAllowance !== "" ||
            basicData.bonus !== "" || basicData.pfAmount !== "" || basicData.esi !== "" || basicData.professionalTax !== ""
        ) {
            setErrors({
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
        }

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
                hra: basicData.hra,
                basic: basicData.basic,
                conveyanceAllowance: basicData.conveyanceAllowance,
                specialAllowance: basicData.specialAllowance,
                bonus: basicData.bonus,
                pfAmount: basicData.pfAmount,
                esi: basicData.esi,
                professionalTax: basicData.professionalTax
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
        ...basicData
        //...salaryData
    }

    return (
        <div>
            <form onSubmit={generatePaySlip} className={`form-group ${styles.formHeader}`} id={styles.payRollForm}>
                <h1>Apton works payroll</h1>
                <h2>Basic Information</h2>
                <div className="form-row">
                    <label>Employee name </label>
                    <div className="col-6">
                        <input className="form-control" type="text" onChange={handleBasicData}
                            name="employeeName" value={basicData.employeeName}></input>
                        {errors.employeeNameError && <span>{errors.employeeNameError}</span>}
                    </div>
                </div>
                <div className="form-row">
                    <label>Employee code </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData}
                            name="employeeCode" value={basicData.employeeCode}></input>
                        {errors.employeeCodeError && <span>{errors.employeeCodeError}</span>}
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
                        {errors.departmentError && <span>{errors.departmentError}</span>}
                    </div>
                </div>
                <div className="form-row">
                    <label>PF account number </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData}
                            name="pfNumber" value={basicData.pfNumber}></input>
                        {errors.pfNumberError && <span>{errors.pfNumberError}</span>}
                    </div>
                </div>
                <div className="form-row">
                    <label>Paid days </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData}
                            name="paidDays" value={basicData.paidDays}></input>
                        {errors.paidDaysError && <span>{errors.paidDaysError}</span>}
                    </div>
                </div>
                <div className="form-row">
                    <label>LOP </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData}
                            name="lop" value={basicData.lop}></input>
                        {errors.lopError && <span>{errors.lopError}</span>}
                    </div>
                </div>
                <div className="form-row">
                    <label>UAN number </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData}
                            name="uanNumber" value={basicData.uanNumber}></input>
                        {errors.uanNumberError && <span>{errors.uanNumberError}</span>}
                    </div>
                </div>
                <div className="form-row">
                    <label>Designation </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData}
                            name="designation" value={basicData.designation}></input>
                        {errors.designationError && <span>{errors.designationError}</span>}
                    </div>
                </div>
                <div className="form-row">
                    <label>Bank account number </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData}
                            name="accountNumber" value={basicData.accountNumber}></input>
                        {errors.accountNumberError && <span>{errors.accountNumberError}</span>}
                    </div>
                </div>

                <br></br>
                <h2>Salary Information</h2>
                <div className="form-row">
                    <label>HRA</label>
                    <div className="col-6">
                        <input type="text" className="form-control" name="hra" onChange={handleBasicData} value={basicData.hra}></input>
                        {errors.hraError && <span>{errors.hraError}</span>}
                    </div>
                </div>
                <div className="form-row">
                    <label>Basic</label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData}
                            name="basic" value={basicData.basic}></input>
                        {errors.basicError && <span>{errors.basicError}</span>}
                    </div>
                </div>
                <div className="form-row">
                    <label>Conveyance allowance</label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData}
                            name="conveyanceAllowance" value={basicData.conveyanceAllowance}></input>
                        {errors.conveyanceAllowanceError && <span>{errors.conveyanceAllowanceError}</span>}
                    </div>
                </div>
                <div className="form-row">
                    <label>Special allowance</label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData}
                            name="specialAllowance" value={basicData.specialAllowance}></input>
                        {errors.specialAllowanceError && <span>{errors.specialAllowanceError}</span>}
                    </div>
                </div>
                <div className="form-row">
                    <label>Bonus</label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData}
                            name="bonus" value={basicData.bonus}></input>
                        {errors.bonusError && <span>{errors.bonusError}</span>}
                    </div>
                </div>
                <div className="form-row">
                    <label>PF amount </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData}
                            name="pfAmount" value={basicData.pfAmount}></input>
                        {errors.pfAmountError && <span>{errors.pfAmountError}</span>}
                    </div>
                </div>
                <div className="form-row">
                    <label>ESI </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData}
                            name="esi" value={basicData.esi}></input>
                        {errors.esiError && <span>{errors.esiError}</span>}
                    </div>
                </div>
                <div className="form-row">
                    <label>Professional tax </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData}
                            name="professionalTax" value={basicData.professionalTax}></input>
                        {errors.professionalTaxError && <span>{errors.professionalTaxError}</span>}
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