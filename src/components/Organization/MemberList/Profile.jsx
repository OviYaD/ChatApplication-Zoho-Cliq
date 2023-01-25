import React, { useState, useEffect } from 'react';

export default function Profile(params) {
    return <>
        <div className="prfinfo" prof-header="">
            <div className="bold font14 mrgT15" header="">Contact</div>
            <div className="posrel pair">
                <div className="prf-adinfo" prof-val="">Oviya D</div>
                <div className="ellips">Display Name</div>
            </div>
            <div className="posrel pair">
                <div className="prf-adinfo" prof-val="">oviya.d@codingmart.com</div>
                <div className="ellips">Email</div>
            </div>
            <div className="posrel pair">
                <div className="prf-adinfo" prof-val="">-</div>
                <div className="ellips">Work Phone</div>
            </div>
            <div className="posrel pair">
                <div className="prf-adinfo" prof-val="">-</div>
                <div className="ellips">Personal Mobile</div>
            </div>
            <div className="posrel pair">
                <div className="prf-adinfo" prof-val="">-</div>
                <div className="ellips">Extension</div>
            </div>
        </div>
        <div className="prfinfo" prof-header="">
            <div className="bold font14 mrgT15" header="">Work</div>
            <div className="posrel pair">
                <div className="prf-adinfo" prof-val="">-</div>
                <div className="ellips">Designation</div>
            </div>
            <div className="posrel pair">
                <div className="prf-adinfo" prof-val="">-</div>
                <div className="ellips">Department</div>
            </div>
            <div className="posrel pair">
                <div className="prf-adinfo" prof-val="">-</div>
                <div className="ellips">Reporting To</div>
            </div>
            <div className="posrel pair">
                <div className="prf-adinfo" prof-val="">-</div>
                <div className="ellips">Seating Location</div>
            </div>
            <div className="posrel pair">
                <div className="prf-adinfo" prof-val="">-</div>
                <div className="ellips">Employee ID</div>
            </div>
            <div className="posrel pair">
                <div className="prf-adinfo" prof-val=""><div id="statusmsg" className="zchvrsts line-clamp" operation="" uid="60016689751">Invited</div></div>
                <div className="ellips">Status</div>
            </div>
        </div>
        <div className="prfinfo" prof-header="">
            <div className="bold font14 mrgT15" header="">Geo Location</div>
            <div className="posrel pair">
                <div className="prf-adinfo" prof-val="">India</div>
                <div className="ellips">Country</div>
            </div>
            <div className="posrel pair">
                <div className="prf-adinfo" prof-val="">12:33 PM ( Asia/Kolkata )</div>
                <div className="ellips">Local Time</div>
            </div>
        </div>
        <div id="custom-fields-section"></div>
        <div className="flexC contact-dlt font15">
            <span uid="60016689751" operation="hdelete" className="zcl-hyperlink-neg flexC"><em className="zcf-delete mR8">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                </svg>
            </em>Delete Contact</span>
        </div>
    </>
};
