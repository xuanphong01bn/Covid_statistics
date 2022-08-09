import React, { useState, useEffect } from "react";
import axios from 'axios';
import moment from "moment";
import $ from "jquery";
const Covid = () => {
    // Component Didmount
    const [fromdate, setFromDate] = useState('');
    const [todate, setToDate] = useState('');


    const handleSubmit = () => {
        let date_tmp1 = $('#fromdate').val().split('/');
        let fromdate1 = date_tmp1[0];

        // console.log(day);
        // console.log(typeof (day))
        let date_tmp2 = $('#todate').val().split('/');
        let todate1 = date_tmp2[0];
        setFromDate(fromdate1);
        setToDate(todate1);
    }
    const [dataCovid, setDataCovid] = useState([])
    useEffect(() => {
        async function fetchAPI() {

            let date1 = fromdate;
            let date2 = todate;
            console.log('date 1 la; ', date1)
            let res = await axios.get(`https://api.covid19api.com/country/vietnam?from=${date1}T00%3A00%3A00Z&to=${date2}T00%3A00%3A00Z`);
            let data = res && res.data ? res.data : [];
            setDataCovid(data)
        }

        fetchAPI();
    }, [fromdate, todate])
    return (

        <>
            <div className="input-date">
                <form>
                    <label style={{ fontSize: '20px' }}>From Date </label>
                    <input type="date" id="fromdate"

                    />
                </form>
                <form>
                    <label style={{ fontSize: '20px' }}>To Date </label>
                    <input type="date" id="todate" />
                </form>
                <button onClick={() => handleSubmit()} style={{ cursor: 'pointer' }}>Submit</button>
            </div>
            <h2>Covid Data In Vietnam</h2>
            <table>
                <thead>
                    <tr>
                        <th>Index</th>

                        <th>Date</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Death</th>
                        <th>Recovered</th>

                    </tr>

                </thead>
                <tbody>
                    {dataCovid && dataCovid.length > 0 && dataCovid.map((item, index) => {
                        return (<tr key={item.ID}>
                            <td>{index + 1}</td>

                            <td>{moment(item.Date).format('DD/MM/YYYY')}</td>
                            <td>{item.Confirmed}</td>
                            <td>{item.Active}</td>
                            <td>{item.Deaths}</td>
                            <td>{item.Recovered}</td>

                        </tr>)
                    })}


                </tbody>

            </table>
        </>
    )
}
export default Covid;