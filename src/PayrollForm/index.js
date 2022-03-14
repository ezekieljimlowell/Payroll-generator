import React from "react";

const PayrollForm = () => {
    return (
        <>
            <h1>Apton works</h1>
            <div>No: 7, Kaliamman kovil street, Rathnapuri, Chennai-600107</div>
            <form>
                <label>Employee name: </label>
                <input type="text" name="employeeName"></input>
                <label>Employee code: </label>
                <input type="text" name="employeeCode"></input>
                <lable></lable>
                <input type="text" name="address"></input>
            </form>
        </>
    )
}

export default PayrollForm;