import React, { useState, useEffect } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import "./PersonalizeModal.scss"
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from '../../api/authentication/user';
import { setUser } from '../../redux/slices/userSlice';
import { toast } from 'react-toastify';

export default function PersonalizeModal({ setOpenPersonalizeStatus }) {
    const [uplaodPic, setuploadPic] = useState(true);
    const [isEdit, setIsEdit] = useState(false);
    const user = useSelector((state) => state.user);
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [personalNum, setPersonalNum] = useState();
    const [wrkNum, setWrkNum] = useState();
    const [designation, setDesignation] = useState();
    const [department, setDepartment] = useState();
    const [reportTo, setReportTo] = useState();
    const [seatingLocation, setSeatingLocation] = useState();
    const [employeeId, setEmployeeId] = useState();
    const dispatch = useDispatch();
    const [fileData, setFileData] = useState();


    useEffect(() => {
        console.log(user);
        setFirstName(user.first_name);
        setLastName(user.last_name);
        setEmail(user.email);
        setPersonalNum(user.phone_personal);
        setWrkNum(user.phone_work);
        setDesignation(user.designation);
        setDepartment(user.department);
        setReportTo(user.reporting_to);
        setSeatingLocation(user.seating_location);
        setEmployeeId(user.employee_id);
    }, [])

    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.type === "file") {
            console.log("form data.......", e.target.files)
            saveProfile(e, e.target.files[0]);
        }
        if (e.target.name === "firstName") {
            setFirstName(e.target.value);
        }
        else if (e.target.name === "lastName") {
            setLastName(e.target.value);
        }
        else if (e.target.name === "phone-personal") {
            setPersonalNum(e.target.value);
        }
        else if (e.target.name === "phone-work") {
            setWrkNum(e.target.value);
        }
        else if (e.target.name === "designation") {
            setDesignation(e.target.value);
        }
        else if (e.target.name === 'department') {
            setDepartment(e.target.value);
        }
        else if (e.target.name === "reporting_to") {
            setReportTo(e.target.value);
        }
        else if (e.target.name === "seating_location") {
            setSeatingLocation(e.target.value);
        }
        else if (e.target.name === "employee_id") {
            setEmployeeId(e.target.value);
        }
        // else if ()
    }

    const saveProfile = async (e, files) => {
        console.log("filess.......", files)
        setuploadPic(true)
        if (files) {
            console.log("file uploads...........")
            const formData = new FormData();
            formData.append("file", files);
            const updatedProfile = await updateProfile(formData);
            dispatch(setUser(updatedProfile));

        }
        else {
            console.log("data uploads...........")
            const formData = new FormData();
            formData.append("data", JSON.stringify({ first_name: firstName, last_name: lastName, phone_work: wrkNum, phone_personal: personalNum, designation: designation, department: department, reporting_to: reportTo, seating_location: seatingLocation, employee_id: employeeId }));
            const updatedProfile = await updateProfile(formData);
            dispatch(setUser(updatedProfile));


        }

        setIsEdit(false)
        toast.success("Profile updated successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })

    }

    const removeProfile = async () => {
        setuploadPic(true)

        const formData = new FormData();
        formData.append("data", JSON.stringify({ remove_profile_image: true }));
        const updatedProfile = await updateProfile(formData);
        dispatch(setUser(updatedProfile));
        toast.success("Profile updated successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
    }

    return <>
        <div className='personalizaModal modalwindow zcoverlay flex fdirC'>
            <div id="zcwindows" className="zcoverlay" style={{ zIndex: "1000" }}>
                <div id="personalizewin" type="popup" className="modalwindow personalizewin zcbg_mask">
                    <div>
                        <div id="winhead" className="mheader drag"><span id="winclose" title="Close [Esc]" className="zchat-close cclose"></span></div>
                        <div className="wh100 flex fdirC">
                            <div className="settings-hdr fshrink justifySB flexC drag">
                                <div className="flexC">
                                    <div className="zcf-personalise-settng mR12 font22 clr-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                                            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                                        </svg>
                                    </div>
                                    <div className="font18 line20 clr-M fontB">Personalize</div>
                                </div>
                                <div>
                                    <span id="winclose" className="zcf-closeB zcl-icon-xl zcl-icon--filled2 zcl-round close-btn" onClick={() => setOpenPersonalizeStatus(false)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="personal-content flexC flexG">
                                <div className="zcsetng_lft zcmodal-left flex-col">
                                    <div className="fshrink m10 posrel">
                                        <div className="zcl-search2 zcl-search2-sm active w100">
                                            <span className="zcl-seach-icon zcf-search2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                </svg>
                                            </span>
                                            <span className="zcl-search-input flexC">
                                                <input id="setting_search_input" className="w100" type="text" placeholder="Search" autocomplete="off" />
                                                <span purpose="setting_search_input_clear" className="zcl-search-clear zcl-search-clear-icon zcf-close mR6">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                    </svg>
                                                </span>
                                            </span>
                                        </div>
                                        <div id="settingSearchMenu" className="zcl-menu-wrap zcsetting-search-menu no-pointer dN lineN"></div>
                                    </div>
                                    <div className="zcmodal-list pT0">
                                        <div className="zcitllst-item sel" id="ps_profilesec" option="personalinfo" purpose="category" title="Personal Information">
                                            <span className="zciticcnt"><span className="zcf-event-organiser"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                            </svg></span></span><span>Personal Information</span>
                                        </div>
                                        <div className="zcitllst-item" option="general" purpose="category">
                                            <span className="zciticcnt"><span className="zcf-setting"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear-wide" viewBox="0 0 16 16">
                                                <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z" />
                                            </svg></span></span><span>General</span>
                                        </div>
                                        <div className="zcitllst-item" option="notification" purpose="category">
                                            <span className="zciticcnt"><span className="zcf-unmute">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
                                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                                                </svg>
                                            </span></span><span>Notifications</span>
                                        </div>
                                        <div className="zcitllst-item" option="display" purpose="category">
                                            <span className="zciticcnt"><span className="zcf-system">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-display" viewBox="0 0 16 16">
                                                    <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z" />
                                                </svg>
                                            </span></span><span>Display</span>
                                        </div>
                                        <div className="zcitllst-item" option="privacy" purpose="category">
                                            <span className="zciticcnt"><span className="zcf-lock">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                                                </svg>
                                            </span></span><span>Privacy</span>
                                        </div>
                                        <div className="zcitllst-item" option="customemojisticker" purpose="category">
                                            <span className="zciticcnt"><span className="zcf-customemoji">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-emoji-smile" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                    <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                                                </svg>
                                            </span></span><span>Emojis &amp; Stickers</span>
                                        </div>
                                        <div className="zcitllst-item" option="calls" purpose="category">
                                            <span className="zciticcnt"><span className="zcf-video-conf">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-forward" viewBox="0 0 16 16">
                                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                            </span></span><span>Calls &amp; Meetings</span>
                                        </div>
                                        <div className="zcitllst-item" option="status" purpose="category">
                                            <span className="zciticcnt"><span className="zcf-status-setting">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                                </svg>
                                            </span></span><span>Status</span>
                                        </div>
                                    </div>
                                </div>

                                <div id="settingsright" className="zcsetng_rht zcmodal-right ovrflwH">
                                    <div id="personalizecontent" className="flex-col wh100 posl zcsetting2_main ps-container ps-theme-default ps-active-y" data-ps-id="96c5f091-4596-ca24-a586-17e9c30286b1">
                                        <div id="myprofile" className="personalinfo-contx flex-col zcl-card" purpose="card" type="profile">
                                            <div className="zcl-card-head">
                                                <div className="w75 font16"><div className="">Profile</div></div>
                                            </div>
                                            <div id="profmaincont" className="personalinfo-mainx zcl-card-body no-padding">
                                                <div id="userprofview" className="zcprofilesec pLR36 flexC">
                                                    <div className="userprofinfo flexG flexC">
                                                        <div className="zcprofpiccover bdrR100 flex">
                                                            <div id="profpreview" className="bdrR100 posl zcpiccontainer curP" operation="viewprofilepic">
                                                                <img
                                                                    id="usrimgview"
                                                                    className="zcprofpic objFitCover"
                                                                    src={process.env.REACT_APP_BUCKET_END_POINT + user.image_url}
                                                                />
                                                                <div id="profpicoverlay" className="profpicsel curP posl" onClick={() => setuploadPic(false)}><span id="profilepicmenu" className="zcf-camera">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" style={{ color: "white" }} fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
                                                                        <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                                                                        <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                                                                    </svg>
                                                                </span></div>
                                                            </div>
                                                            <OutsideClickHandler onOutsideClick={() => setuploadPic(true)}>
                                                                <div className={`zcl-menu-wrap profmenubox ${uplaodPic && "dN"}`} id="popup-view" align="right">
                                                                    <div className="zcl-menu-item ellips posl cur">
                                                                        <input type="file" id="profilepicupdate" className="wh100 curP posabs changeprofpic" onChange={handleChange} />
                                                                        <em className="zcl-menu-item-icn zcf-upload"></em>
                                                                        <span className="ellips">Upload photo</span>
                                                                    </div>
                                                                    <div className="zcl-menu-item ellips zcl-neg-menu-item cur"><em className="zcl-menu-item-icn zcf-delete2"></em><span className="ellips" onClick={removeProfile}>Remove photo</span></div>
                                                                </div>
                                                            </OutsideClickHandler>
                                                        </div>

                                                        <div className="mL20">
                                                            <div className="ellips bold font18">{user.first_name + "  " + user.last_name ?? ""}</div>
                                                            <div className="ellips mT10 clr-lp1 font14">{user.email}</div>
                                                            <div className="ellips font13 mT10">
                                                                <span><a className="zcl-hyperlink" href="https://accounts.zoho.in" target="_blank">Manage Prezz Profile </a></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="editprofbtn" className="zcprofbtn zcl-btn zcl-btn--primary prof-btn" onClick={() => setIsEdit(true)}><span className="zcl-btn-icn zcf-edit2 mR10">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                        </svg>
                                                    </span><span className="ellips font14">Edit Profile</span></div>
                                                </div>

                                                {!isEdit && <div className="editinfosec">
                                                    <div className="pT25"><div className="zcmodal-right-title">Contact</div></div>
                                                    <div className="zceditseccont flex flexW pLR36">
                                                        <div id="userprofile_first_name" className="zceditelem pT30 flexC mR40 posrel">
                                                            <div className="zcedittitle posl clr-lp1 font15 flexC text-transC fshrink pR5">First Name</div>
                                                            <div className="posrel mL20 w100" style={{ minWidth: "295px" }}>
                                                                <input id="first_name" type="text" data-name="First Name" style={{ width: "100%" }} className="zcl-input font15 zcl-input-info" value={user.first_name} placeholder="" editvalue="true" />
                                                                <div invalidtxt="" className="posa field_error font13"></div>
                                                            </div>
                                                        </div>
                                                        <div id="userprofile_last_name" className="zceditelem pT30 flexC mR40 posrel">
                                                            <div className="zcedittitle posl clr-lp1 font15 flexC text-transC fshrink pR5">Last Name</div>
                                                            <div className="posrel mL20 w100" style={{ minWidth: "295px" }}>
                                                                <input id="last_name" type="text" data-name="Last Name" style={{ width: "100%" }} className="zcl-input font15 zcl-input-info" value={user.last_name === "" ? "-" : user.last_name} placeholder="" editvalue="false" />
                                                                <div invalidtxt="" className="posa field_error font13"></div>
                                                            </div>
                                                        </div>
                                                        <div id="userprofile_email_id" className="zceditelem pT30 flexC mR40 posrel">
                                                            <div className="zcedittitle posl clr-lp1 font15 flexC text-transC fshrink pR5">Email</div>
                                                            <div className="posrel mL20 w100" style={{ minWidth: "295px" }}>
                                                                <input id="email_id" type="text" data-name="Email" style={{ width: "100%" }} className="zcl-input font15 zcl-input-info" value={user.email} placeholder="" editvalue="false" />
                                                                <div invalidtxt="" className="posa field_error font13"></div>
                                                            </div>
                                                        </div>
                                                        <div id="userprofile_phone" className="zceditelem pT30 flexC mR40 posrel">
                                                            <div className="zcedittitle posl clr-lp1 font15 flexC text-transC fshrink pR5">Work Phone</div>
                                                            <div className="posrel mL20 w100" style={{ minWidth: "295px" }}>
                                                                <input id="phone" type="text" data-name="Work Phone" style={{ width: "100%" }} className="zcl-input font15 zcl-input-info" value="-" placeholder="" editvalue="false" />
                                                                <div invalidtxt="" className="posa field_error font13"></div>
                                                            </div>
                                                        </div>
                                                        <div id="userprofile_mobile" className="zceditelem pT30 flexC mR40 posrel">
                                                            <div className="zcedittitle posl clr-lp1 font15 flexC text-transC fshrink pR5">Personal Mobile</div>
                                                            <div className="posrel mL20 w100" style={{ minWidth: "295px" }}>
                                                                <input id="mobile" type="text" data-name="Personal Mobile" style={{ width: "100%" }} className="zcl-input font15 zcl-input-info" value="-" placeholder="" editvalue="true" />
                                                                <div invalidtxt="" className="posa field_error font13"></div>
                                                            </div>
                                                        </div>
                                                        <div id="userprofile_extension" className="zceditelem pT30 flexC mR40 posrel">
                                                            <div className="zcedittitle posl clr-lp1 font15 flexC text-transC fshrink pR5">Extension</div>
                                                            <div className="posrel mL20 w100" style={{ minWidth: "295px" }}>
                                                                <input id="extension" type="text" data-name="Extension" style={{ width: "100%" }} className="zcl-input font15 zcl-input-info" value="-" placeholder="" editvalue="true" />
                                                                <div invalidtxt="" className="posa field_error font13"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pT25"><div className="zcmodal-right-title">Work</div></div>
                                                    <div className="zceditseccont flex flexW pLR36">
                                                        <div id="userprofile_designation" className="zceditelem pT30 flexC mR40 posrel">
                                                            <div className="zcedittitle posl clr-lp1 font15 flexC text-transC fshrink pR5">Designation</div>
                                                            <div className="posrel mL20 w100" style={{ minWidth: "295px" }}>
                                                                <input id="designation" type="text" data-name="Designation" style={{ width: "100%" }} className="zcl-input font15 zcl-input-info" value="-" placeholder="" editvalue="false" />
                                                                <div invalidtxt="" className="posa field_error font13"></div>
                                                            </div>
                                                        </div>
                                                        <div id="userprofile_department" className="zceditelem pT30 flexC mR40 posrel">
                                                            <div className="zcedittitle posl clr-lp1 font15 flexC text-transC fshrink pR5">Department</div>
                                                            <div className="posrel mL20 w100" style={{ minWidth: "295px" }}>
                                                                <input id="department" type="text" data-name="Department" style={{ width: "100%" }} className="zcl-input font15 zcl-input-info" value="-" placeholder="" editvalue="false" />
                                                                <div invalidtxt="" className="posa field_error font13"></div>
                                                            </div>
                                                        </div>
                                                        <div id="userprofile_reportingto" className="zceditelem pT30 flexC mR40 posrel">
                                                            <div className="zcedittitle posl clr-lp1 font15 flexC text-transC fshrink pR5">Reporting To</div>
                                                            <div className="posrel mL20 w100" style={{ minWidth: "295px" }}>
                                                                <input id="reportingto" type="text" data-name="Reporting To" style={{ width: "100%" }} className="zcl-input font15 zcl-input-info" value="-" placeholder="" editvalue="false" />
                                                                <div invalidtxt="" className="posa field_error font13"></div>
                                                            </div>
                                                        </div>
                                                        <div id="userprofile_work_location" className="zceditelem pT30 flexC mR40 posrel">
                                                            <div className="zcedittitle posl clr-lp1 font15 flexC text-transC fshrink pR5">Seating Location</div>
                                                            <div className="posrel mL20 w100" style={{ minWidth: "295px" }}>
                                                                <input id="work_location" type="text" data-name="Seating Location" style={{ width: "100%" }} className="zcl-input font15 zcl-input-info" value="-" placeholder="" editvalue="true" />
                                                                <div invalidtxt="" className="posa field_error font13"></div>
                                                            </div>
                                                        </div>
                                                        <div id="userprofile_employee_id" className="zceditelem pT30 flexC mR40 posrel">
                                                            <div className="zcedittitle posl clr-lp1 font15 flexC text-transC fshrink pR5">Employee ID</div>
                                                            <div className="posrel mL20 w100" style={{ minWidth: "295px" }}>
                                                                <input id="employee_id" type="text" data-name="Employee ID" style={{ width: "100%" }} className="zcl-input font15 zcl-input-info" value="-" placeholder="" editvalue="false" />
                                                                <div invalidtxt="" className="posa field_error font13"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pT25"><div className="zcmodal-right-title">Geo Location</div></div>
                                                    <div className="zceditseccont flex flexW pLR36">
                                                        <div id="userprofile_country" className="zceditelem pT30 flexC mR40">
                                                            <div className="zcedittitle posl clr-lp1 font15 flexC text-transC fshrink pR5">Country</div>
                                                            <div className="posrel mL20 w100" style={{ minWidth: "295px" }}>
                                                                <div id="selcountry" data-key="India" data-name="Country" style={{ width: "100%" }} purpose="dropdown" className="country zcl-dropdown-wrp prof-drpdwn unedited">{user.country}</div>
                                                                <div invalidtxt="" className="posa field_error font13"></div>
                                                            </div>
                                                        </div>
                                                        <div id="userprofile_timezone" className="zceditelem pT30 flexC mR40">
                                                            <div className="zcedittitle posl clr-lp1 font15 flexC text-transC fshrink pR5">Time zone</div>
                                                            <div className="posrel mL20 w100" style={{ minWidth: "295px" }}>
                                                                <div id="seltimezone" data-key="Asia/Kolkata" data-name="Time zone" style={{ width: "100%" }} purpose="dropdown" className="timezone zcl-dropdown-wrp prof-drpdwn unedited">{user.timezone}</div>
                                                                <div invalidtxt="" className="posa field_error font13"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pT25"><div className="zcmodal-right-title">Additional Info</div></div>
                                                    <div className="zceditseccont flex flexW pLR36">
                                                        <div id="userprofile_language" className="zceditelem pT30 flexC mR40">
                                                            <div className="zcedittitle posl clr-lp1 font15 flexC text-transC fshrink pR5">Language</div>
                                                            <div className="posrel mL20 w100" style={{ minWidth: "295px" }}>
                                                                <div id="sellanguage" data-key="English" data-name="Language" style={{ width: "100%" }} purpose="dropdown" className="language zcl-dropdown-wrp prof-drpdwn unedited">{user.langage ?? "English"}</div>
                                                                <div invalidtxt="" className="posa field_error font13"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>}


                                                {isEdit && <>
                                                    <div className="zceditsec" id="profeditsec">
                                                        <div id="zinfosec" className="default-info">
                                                            <div className="acc-logo flex vsbH" id="logoholder">
                                                                <img src="https://static.zohocdn.com/chat/source/officechat/images/zoho_logo.png" /><span className="clr-H fontB font15" style={{ marginRight: "5px" }}>Accounts</span>
                                                                <span className="ellips font12 clr-lp1 mL5">Changes made here will be reflected in your <a href="https://accounts.zoho.in" target="_blank" className="zcl-hyperlink">Prezz Accounts</a> and thereby across all Prezz services.</span>
                                                            </div>
                                                            <div className="editinfosec">
                                                                <div className="pT25"><div className="zcmodal-right-title">Contact</div></div>
                                                                <div className="zceditseccont flex flexW pLR36">
                                                                    <div id="userprofile_first_name" className="zceditelem pT30 flexC mR40 posrel">
                                                                        <div className="zcedittitle posl clr-lp1 font15 flexC text-transC fshrink pR5">First Name</div>
                                                                        <div className="posrel mL20 w100" style={{ minWidth: "295px" }}>
                                                                            <input id="first_name" type="text" data-name="First Name" style={{ width: "100%" }} className="zcl-ico zcl-input font15 zcl-input-info" value={firstName} onChange={handleChange} name="firstName" placeholder="" />
                                                                            <div invalidtxt="" className="posa field_error font13"></div>
                                                                        </div>
                                                                    </div>
                                                                    <div id="userprofile_last_name" className="zceditelem pT30 flexC mR40 posrel">
                                                                        <div className="zcedittitle posl clr-lp1 font15 flexC text-transC fshrink pR5">Last Name</div>
                                                                        <div className="posrel mL20 w100" style={{ minWidth: "295px" }}>
                                                                            <input id="last_name" type="text" data-name="Last Name" style={{ width: "100%" }} className="zcl-ico zcl-input font15 zcl-input-info" value={lastName ?? "-"} onChange={handleChange} name="lastName" placeholder="" editvalue="true" />
                                                                            <div invalidtxt="" className="posa field_error font13"></div>
                                                                        </div>
                                                                    </div>
                                                                    <div id="userprofile_email_id" className="zceditelem pT30 flexC mR40 posrel" >
                                                                        <div className="zcedittitle posl clr-lp1 font15 flexC text-transC fshrink pR5">Email</div>
                                                                        <div className="posrel mL20 w100" style={{ minWidth: "295px", color: "gray", fontSize: "14px" }}>
                                                                            {user.email}
                                                                            <div invalidtxt="" className="posa field_error font13"></div>
                                                                        </div>
                                                                    </div>
                                                                    <div id="userprofile_phone" className="zceditelem pT30 flexC mR40 posrel">
                                                                        <div className="zcedittitle posl clr-lp1 font15 flexC text-transC fshrink pR5">Work Phone</div>
                                                                        <div className="posrel mL20 w100" style={{ minWidth: "295px" }}>
                                                                            <input id="phone" type="text" data-name="Work Phone" style={{ width: "100%" }} className="zcl-ico zcl-input font15 zcl-input-info" value={personalNum ?? "-"} onChange={handleChange} name="phone-personal" placeholder="" editvalue="false" />
                                                                            <div invalidtxt="" className="posa field_error font13"></div>
                                                                        </div>
                                                                    </div>
                                                                    <div id="userprofile_mobile" className="zceditelem pT30 flexC mR40 posrel">
                                                                        <div className="zcedittitle posl clr-lp1 font15 flexC text-transC fshrink pR5">Personal Mobile</div>
                                                                        <div className="posrel mL20 w100" style={{ minWidth: "295px" }}>
                                                                            <input id="mobile" type="text" data-name="Personal Mobile" style={{ width: "100%" }} className="zcl-ico zcl-input font15 zcl-input-info" value={wrkNum ?? "-"} onChange={handleChange} name="phone-work" placeholder="" editvalue="true" />
                                                                            <div invalidtxt="" className="posa field_error font13"></div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                <div className="pT25"><div className="zcmodal-right-title">Work</div></div>
                                                                <div className="zceditseccont flex flexW pLR36">
                                                                    <div id="userprofile_designation" className="zceditelem pT30 flexC mR40 posrel">
                                                                        <div className="zcedittitle posl clr-lp1 font15 flexC text-transC fshrink pR5">Designation</div>
                                                                        <div className="posrel mL20 w100" style={{ minWidth: "295px" }}>
                                                                            <input id="designation" type="text" data-name="Designation" style={{ width: "100%" }} className="zcl-ico zcl-input font15 zcl-input-info" value={designation ?? "-"} onChange={handleChange} name="designation" placeholder="" editvalue="false" />
                                                                            <div invalidtxt="" className="posa field_error font13"></div>
                                                                        </div>
                                                                    </div>
                                                                    <div id="userprofile_department" className="zceditelem pT30 flexC mR40 posrel">
                                                                        <div className="zcedittitle posl clr-lp1 font15 flexC text-transC fshrink pR5">Department</div>
                                                                        <div className="posrel mL20 w100" style={{ minWidth: "295px" }}>
                                                                            <input id="department" type="text" data-name="Department" style={{ width: "100%" }} className="zcl-ico zcl-input font15 zcl-input-info" value={department ?? "-"} onChange={handleChange} name="department" placeholder="" editvalue="false" />
                                                                            <div invalidtxt="" className="posa field_error font13"></div>
                                                                        </div>
                                                                    </div>
                                                                    <div id="userprofile_reportingto" className="zceditelem pT30 flexC mR40 posrel">
                                                                        <div className="zcedittitle posl clr-lp1 font15 flexC text-transC fshrink pR5">Reporting To</div>
                                                                        <div className="posrel mL20 w100" style={{ minWidth: "295px" }}>
                                                                            <input id="reportingto" type="text" data-name="Reporting To" style={{ width: "100%" }} className="zcl-ico zcl-input font15 zcl-input-info" value={reportTo ?? "-"} onChange={handleChange} name="reporting_to" placeholder="" editvalue="false" />
                                                                            <div invalidtxt="" className="posa field_error font13"></div>
                                                                        </div>
                                                                    </div>
                                                                    <div id="userprofile_work_location" className="zceditelem pT30 flexC mR40 posrel">
                                                                        <div className="zcedittitle posl clr-lp1 font15 flexC text-transC fshrink pR5">Seating Location</div>
                                                                        <div className="posrel mL20 w100" style={{ minWidth: "295px" }}>
                                                                            <input id="work_location" type="text" data-name="Seating Location" style={{ width: "100%" }} className=" zcl-ico zcl-input font15 zcl-input-info" value={seatingLocation ?? "-"} onChange={handleChange} name="seating_location" placeholder="" editvalue="true" />
                                                                            <div invalidtxt="" className="posa field_error font13"></div>
                                                                        </div>
                                                                    </div>
                                                                    <div id="userprofile_employee_id" className="zceditelem pT30 flexC mR40 posrel">
                                                                        <div className="zcedittitle posl clr-lp1 font15 flexC text-transC fshrink pR5">Employee ID</div>
                                                                        <div className="posrel mL20 w100" style={{ minWidth: "295px" }}>
                                                                            <input id="employee_id" type="text" data-name="Employee ID" style={{ width: "100%" }} className="zcl-ico zcl-input font15 zcl-input-info" value={employeeId ?? "-"} onChange={handleChange} name="employee_id" placeholder="" editvalue="false" />
                                                                            <div invalidtxt="" className="posa field_error font13"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="pT25"><div className="zcmodal-right-title">Geo Location</div></div>
                                                                <div className="zceditseccont flex flexW pLR36">
                                                                    <div id="userprofile_country" className="zceditelem pT30 flexC mR40">
                                                                        <div className="zcedittitle posl clr-lp1 font15 flexC text-transC fshrink pR5">Country</div>
                                                                        <div className="posrel mL20 w100" style={{ minWidth: "295px" }}>
                                                                            <div id="selcountry" data-key="India" data-name="Country" style={{ width: "100%" }} purpose="dropdown" className="country zcl-dropdown-wrp prof-drpdwn unedited">India</div>
                                                                            <div invalidtxt="" className="posa field_error font13"></div>
                                                                        </div>
                                                                    </div>
                                                                    <div id="userprofile_timezone" className="zceditelem pT30 flexC mR40">
                                                                        <div className="zcedittitle posl clr-lp1 font15 flexC text-transC fshrink pR5">Time zone</div>
                                                                        <div className="posrel mL20 w100" style={{ minWidth: "295px" }}>
                                                                            <div id="seltimezone" data-key="Asia/Kolkata" data-name="Time zone" style={{ width: "100%" }} purpose="dropdown" className="timezone zcl-dropdown-wrp prof-drpdwn unedited">Asia/Kolkata</div>
                                                                            <div invalidtxt="" className="posa field_error font13"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="pT25"><div className="zcmodal-right-title">Additional Info</div></div>
                                                                <div className="zceditseccont flex flexW pLR36">
                                                                    <div id="userprofile_language" className="zceditelem pT30 flexC mR40">
                                                                        <div className="zcedittitle posl clr-lp1 font15 flexC text-transC fshrink pR5">Language</div>
                                                                        <div className="posrel mL20 w100" style={{ minWidth: "295px" }}>
                                                                            <div id="sellanguage" data-key="English" data-name="Language" style={{ width: "100%" }} purpose="dropdown" className="language zcl-dropdown-wrp prof-drpdwn unedited">English</div>
                                                                            <div invalidtxt="" className="posa field_error font13"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="editsec-btns" className="personalinfo-ftr">
                                                        <button className="zcl-btn zcl-btn--secondary mR20" operation="cancel" onClick={() => setIsEdit(false)}>Cancel</button>
                                                        <button id="saveprof-btn" className="zcl-btn zcl-btn--primary" operation="saveprofile" onClick={saveProfile}>Save Changes</button>
                                                    </div>
                                                </>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
};
