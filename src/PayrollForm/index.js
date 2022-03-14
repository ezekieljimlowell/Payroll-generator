import React, { useState } from "react";
import PaySlip from "../PaySlip";

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
    const [showPaySlip, setPaySlip] = useState(false);

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
        setPaySlip(true);
    }

    const props = {
        ...basicData,
        ...salaryData
    }

    return (
        <>
            <form onSubmit={generatePaySlip} className="form-group">
                <h2>Basic Information</h2>
                <div className="form-row">
                    <label>Employee name </label>
                    <div className="col-6">
                        <input className="form-control" type="text" onChange={handleBasicData} name="employeeName" value={basicData.employeeName} required></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>Employee code </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData} name="employeeCode" value={basicData.employeeCode} required></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>Employee Address </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData} name="address" value={basicData.address} required></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>Aadhar Number </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData} name="aadharNumber" value={basicData.aadharNumber} required></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>Month </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData} name="month" value={basicData.month} required></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>Department </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData} name="department" value={basicData.department} required></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>PF account number </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData} name="pfNumber" value={basicData.pfNumber} required></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>Paid days </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData} name="paidDays" value={basicData.paidDays} required></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>LOP </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData} name="lop" value={basicData.lop} required></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>UAN number </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData} name="uanNumber" value={basicData.uanNumber} required></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>Designation </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData} name="designation" value={basicData.designation} required></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>Bank account number </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleBasicData} name="accountNumber" value={basicData.accountNumber} required></input>
                    </div>
                </div>

                <br></br>
                <h2>Salary Information</h2>
                <div className="form-row">
                    <label>HRA</label>
                    <div className="col-6">
                        <input type="text" className="form-control" name="hra" onChange={handleSalaryDetails} required></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>Basic</label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleSalaryDetails} name="basic" value={salaryData.basic} required></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>Conveyance allowance</label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleSalaryDetails} name="conveyanceAllowance" value={salaryData.conveyanceAllowance} required></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>Special allowance</label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleSalaryDetails} name="specialAllowance" value={salaryData.specialAllowance} required></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>Bonus</label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleSalaryDetails} name="bonus" value={salaryData.bonus} required></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>PF amount </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleSalaryDetails} name="pfAmount" value={salaryData.pfAmount} required></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>ESI </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleSalaryDetails} name="esi" value={salaryData.esi} required></input>
                    </div>
                </div>
                <div className="form-row">
                    <label>Professional tax </label>
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={handleSalaryDetails} name="professionalTax" value={salaryData.professionalTax} required></input>
                    </div>
                </div>
                <br></br>
                <button type="submit">Generate</button>
                <button type="button" onClick={() => setPaySlip(false)}>Reset</button>
            </form>
            <div>
                {showPaySlip && <PaySlip {...props} />}
            </div>
        </>
    )
}

export default PayrollForm;