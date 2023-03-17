import React, { useState, useEffect } from "react";
import "./GoogleSignUp.scss";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import Checkbox from '@mui/material/Checkbox';

export default function GoogleSignUp() {

  const [region, setRegion] = useState();
  const [country, setCountry] = useState();

  return (
    <>
      <div align="center" id="main_container" className="main ">
        <div className="inner-header">
          <div className="header_bg">
            <div className="bg_rectangle"></div>
            <div className="center_semi_circle"></div>
            <div className="small_circle"></div>
            <div className="right_circle"></div>
          </div>
          <div className="IDP_log_container">
            <div className="IDP_logo zoho_icon">
              <span className="idp_inner_logo"></span>
            </div>
            <div className="other_IDPs">
              <div className="IDP_logo logo_google">
                <span className="idp_inner_logo"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="inner-container">
          <div className="federated_signup_form">
            <form onsubmit="javascript:return false;" novalidate="">
              <div className="photo_permission_option">
                <div className="profile-img" id="profile-pic">
                  <div
                    className="pro_pic_blur"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/a/AEdFTp7SnXG4UcgiRjR--2xvbz59wAik5BBZ7x_LoG8R=s96-c')" }}
                  ></div>
                  <img
                    src="https://lh3.googleusercontent.com/a/AEdFTp7SnXG4UcgiRjR--2xvbz59wAik5BBZ7x_LoG8R=s96-c"
                    width="100%"
                    height="100%"
                    title=""
                    alt=""
                    onerror="handleProPicError()"
                    style={{ height: "100%", width: "auto" }}
                  />
                </div>

              </div>

              <div className="user_name_text">Welcome pattasu balu!</div>

              <div className="desc_text">
                A new Prezz account will be created for the email address{" "}
                <b>pattasubalu321@gmail.com</b>.
              </div>

              <div className="user_detail_form">
                <div className="detail_box">
                  <div className="user_header">First Name</div>
                  <input
                    type="text"
                    id="user_first_name"
                    maxlength="100"
                    className="user_detail_input"
                    placeholder="Enter your first name"
                    value="pattasu"
                  />
                </div>
                <div className="detail_box">
                  <div className="user_header">Last Name</div>
                  <input
                    type="text"
                    id="user_last_name"
                    maxlength="100"
                    className="user_detail_input"
                    placeholder="Enter your last name"
                    value="balu"
                  />
                </div>

                <div className="country_details">
                  <div
                    className="detail_box country_select_container"
                    style={{ width: "250px" }}
                  >
                    <div className="user_header">Country/Region</div>

                    <span
                      className="select2 select2-container select2-container--country_div"
                      dir="ltr"
                      style={{ width: "100%" }}
                    >
                      <CountryDropdown
                        className="user_detail_input "
                        placeholder="select country"

                        value={country}
                        onChange={(val) => setCountry(val)} />

                      <span className="dropdown-wrapper" aria-hidden="true"></span>
                    </span>
                  </div>
                  <div className="detail_box" id="state_container">
                    <div className="user_header">State</div>

                    <span
                      className="select2 select2-container select2-container--default"
                      dir="ltr"
                      style={{ width: "100%" }}
                    >
                      <RegionDropdown
                        className="user_detail_input "
                        country={country}
                        value={region}
                        placeholder="Select Region"
                        onChange={(val) => setRegion(val)} />
                      <span className="dropdown-wrapper" aria-hidden="true"></span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="tos-container check_container">
                <Checkbox className="agree_checkbox" defaultChecked size="small" />
                <label for="tog_agree">
                  I agree to the{" "}
                  <a
                    href="https://www.zoho.com/en-in/terms.html"
                    target="_blank"
                  >
                    Terms of service
                  </a>{" "}
                  and{" "}
                  <a href="http://www.zoho.com/privacy.html" target="_blank">
                    Privacy policies
                  </a>{" "}
                  of Prezz Corporation
                </label>
              </div>

              <div className="tos_error">
                Please read and accept the Terms of Service and Privacy Policy
              </div>
              <button
                id="createFormAddBtn"
                className="form_btn"
                onclick="createUser()"
              >
                Create Account
              </button>
            </form>
            <div className="link_account_option">
              <div className="or_tag">Or</div>
              <div className="flex_link_container">
                <div>
                  <div className="or_header">Link existing accounts</div>
                  <div className="or_description">
                    If you have a Prezz account, you can link your{" "}
                    <b>
                      <span style={{ textTransform: "capitalize" }}>google</span>{" "}
                      account
                    </b>{" "}
                    with it.
                  </div>
                </div>
                <div
                  className="or_button"
                  onclick="redirectLink('https://accounts.zoho.in/signin?servicename=ZohoChat&amp;serviceurl=https%3A%2F%2Faccounts.zoho.in%2Ffsregister%2Fassociate%3Fdigest%3D47fc73aabcec63e45bd06618dfb4526cf561280339123b265a7e5eb076caebd5a174529d3c32cfb14ef9b56fc1f97f4cf5f972cac20f4318ff1ab961ddaae1ea%26location%3Din&amp;hide_signup=true&amp;hiderightpanel=true&amp;hide_fs=true')"
                >
                  Link Accounts
                </div>
              </div>
            </div>
          </div>

          <form
            className="otp_container"
            id="otp_container"
            style={{ display: "none" }}
            onsubmit="return false;"
          >
            <div className="for_email">
              <div className="user_name_text">Verify your email address</div>
              <div className="desc_text">
                A one-time password will be sent to your email address {0} for
                verification.
              </div>
            </div>
            <div className="for_mobile">
              <div className="user_name_text">Verify your mobile number</div>
              <div className="desc_text">
                A one-time password will be sent to your mobile number {0} for
                verification.
              </div>
            </div>
            <div
              className="detail_box"
              style={{ marginTop: "30px", marginBottom: "10px" }}
            >
              <div className="user_header">Enter OTP</div>
              <div
                type="text"
                id="verification_otp"
                className="user_detail_input"
              ></div>
            </div>
            <div
              className="resend_text"
              id="otp_resend"
              onclick="resendVerificationOTP()"
            >
              Resend OTP
            </div>
            <div
              className="resend_text otp_sent"
              id="otp_sent"
              style={{ display: "none" }}
            >
              OTP sending
            </div>
            <div className="button_container">
              <button
                className="form_btn"
                id="otp_verify_btn"
                onclick="verifyOTP()"
              >
                Verify
              </button>
              <button className="form_btn gray_btn" onclick="cancelFederateFlow()">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <CountryDropdown
          value={country}
          onChange={(val) => setCountry(val)} />
        <RegionDropdown
          country={country}
          value={region}
          onChange={(val) => setRegion(val)} />
      </div>
      {/* <span className="select2-container select2-container--country_div select2-container--open" style={{ position: "absolute", top: "567.938px", left: "400.5px" }}>
        <span className="select2-dropdown select2-dropdown--below" dir="ltr" style={{ width: "228px" }}>
          <span className="select2-search select2-search--dropdown">
            <input className="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" placeholder="Search..." />
          </span>
          <span className="select2-results">
            <ul className="select2-results__options" role="tree" id="select2-user_country-results" aria-expanded="true" aria-hidden="false">
              <li className="select2-results__option" id="select2-user_country-result-8vqh-AF" role="treeitem" aria-selected="false">
                <div className="pic flag_AF"></div>
                <span className="cn">Afghanistan</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-o28q-AL" role="treeitem" aria-selected="false">
                <div className="pic flag_AL"></div>
                <span className="cn">Albania</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-ojhq-DZ" role="treeitem" aria-selected="false">
                <div className="pic flag_DZ"></div>
                <span className="cn">Algeria</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-xs65-AS" role="treeitem" aria-selected="false">
                <div className="pic flag_AS"></div>
                <span className="cn">American Samoa</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-dwch-AD" role="treeitem" aria-selected="false">
                <div className="pic flag_AD"></div>
                <span className="cn">Andorra</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-7gup-AO" role="treeitem" aria-selected="false">
                <div className="pic flag_AO"></div>
                <span className="cn">Angola</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-6fcw-AI" role="treeitem" aria-selected="false">
                <div className="pic flag_AI"></div>
                <span className="cn">Anguilla</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-9unj-AG" role="treeitem" aria-selected="false">
                <div className="pic flag_AG"></div>
                <span className="cn">Antigua and Barbuda</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-97ic-AR" role="treeitem" aria-selected="false">
                <div className="pic flag_AR"></div>
                <span className="cn">Argentina</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-hzjj-AM" role="treeitem" aria-selected="false">
                <div className="pic flag_AM"></div>
                <span className="cn">Armenia</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-4nc7-AW" role="treeitem" aria-selected="false">
                <div className="pic flag_AW"></div>
                <span className="cn">Aruba</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-6t9t-AC" role="treeitem" aria-selected="false">
                <div className="pic flag_AC"></div>
                <span className="cn">Ascension</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-zsj7-AU" role="treeitem" aria-selected="false">
                <div className="pic flag_AU"></div>
                <span className="cn">Australia</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-6veh-AX" role="treeitem" aria-selected="false">
                <div className="pic flag_AX"></div>
                <span className="cn">Australian External Territories</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-4b55-AT" role="treeitem" aria-selected="false">
                <div className="pic flag_AT"></div>
                <span className="cn">Austria</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-7ifq-AZ" role="treeitem" aria-selected="false">
                <div className="pic flag_AZ"></div>
                <span className="cn">Azerbaijan</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-fbd8-BS" role="treeitem" aria-selected="false">
                <div className="pic flag_BS"></div>
                <span className="cn">Bahamas</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-sro4-BH" role="treeitem" aria-selected="false">
                <div className="pic flag_BH"></div>
                <span className="cn">Bahrain</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-duks-BD" role="treeitem" aria-selected="false">
                <div className="pic flag_BD"></div>
                <span className="cn">Bangladesh</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-znev-BB" role="treeitem" aria-selected="false">
                <div className="pic flag_BB"></div>
                <span className="cn">Barbados</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-6rcx-BY" role="treeitem" aria-selected="false">
                <div className="pic flag_BY"></div>
                <span className="cn">Belarus</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-0378-BE" role="treeitem" aria-selected="false">
                <div className="pic flag_BE"></div>
                <span className="cn">Belgium</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-i10z-BZ" role="treeitem" aria-selected="false">
                <div className="pic flag_BZ"></div>
                <span className="cn">Belize</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-7cm7-BJ" role="treeitem" aria-selected="false">
                <div className="pic flag_BJ"></div>
                <span className="cn">Benin</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-ut5d-BM" role="treeitem" aria-selected="false">
                <div className="pic flag_BM"></div>
                <span className="cn">Bermuda</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-s86n-BT" role="treeitem" aria-selected="false">
                <div className="pic flag_BT"></div>
                <span className="cn">Bhutan</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-6hi2-BO" role="treeitem" aria-selected="false">
                <div className="pic flag_BO"></div>
                <span className="cn">Bolivia</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-rc3q-BA" role="treeitem" aria-selected="false">
                <div className="pic flag_BA"></div>
                <span className="cn">Bosnia and Herzegovina</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-xzhw-BW" role="treeitem" aria-selected="false">
                <div className="pic flag_BW"></div>
                <span className="cn">Botswana</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-nn0t-BR" role="treeitem" aria-selected="false">
                <div className="pic flag_BR"></div>
                <span className="cn">Brazil</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-wnk4-VG" role="treeitem" aria-selected="false">
                <div className="pic flag_VG"></div>
                <span className="cn">British Virgin Islands</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-e7p7-BN" role="treeitem" aria-selected="false">
                <div className="pic flag_BN"></div>
                <span className="cn">Brunei Darussalam</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-mgel-BG" role="treeitem" aria-selected="false">
                <div className="pic flag_BG"></div>
                <span className="cn">Bulgaria</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-ot8t-BF" role="treeitem" aria-selected="false">
                <div className="pic flag_BF"></div>
                <span className="cn">Burkina Faso</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-oj1t-BI" role="treeitem" aria-selected="false">
                <div className="pic flag_BI"></div>
                <span className="cn">Burundi</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-g2ab-KH" role="treeitem" aria-selected="false">
                <div className="pic flag_KH"></div>
                <span className="cn">Cambodia</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-h13v-CM" role="treeitem" aria-selected="false">
                <div className="pic flag_CM"></div>
                <span className="cn">Cameroon</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-83kh-CA" role="treeitem" aria-selected="false">
                <div className="pic flag_CA"></div>
                <span className="cn">Canada</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-hfmg-CV" role="treeitem" aria-selected="false">
                <div className="pic flag_CV"></div>
                <span className="cn">Cape Verde</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-9v7u-KY" role="treeitem" aria-selected="false">
                <div className="pic flag_KY"></div>
                <span className="cn">Cayman Islands</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-999d-CF" role="treeitem" aria-selected="false">
                <div className="pic flag_CF"></div>
                <span className="cn">Central African Republic</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-dhvj-TD" role="treeitem" aria-selected="false">
                <div className="pic flag_TD"></div>
                <span className="cn">Chad</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-gzfc-CL" role="treeitem" aria-selected="false">
                <div className="pic flag_CL"></div>
                <span className="cn">Chile</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-dp9u-CN" role="treeitem" aria-selected="false">
                <div className="pic flag_CN"></div>
                <span className="cn">China</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-xwjo-CX" role="treeitem" aria-selected="false">
                <div className="pic flag_CX"></div>
                <span className="cn">Christmas Island</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-fq10-CO" role="treeitem" aria-selected="false">
                <div className="pic flag_CO"></div>
                <span className="cn">Colombia</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-x1m0-KM" role="treeitem" aria-selected="false">
                <div className="pic flag_KM"></div>
                <span className="cn">Comoros</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-jrx7-CG" role="treeitem" aria-selected="false">
                <div className="pic flag_CG"></div>
                <span className="cn">Congo</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-mh3f-CK" role="treeitem" aria-selected="false">
                <div className="pic flag_CK"></div>
                <span className="cn">Cook Islands</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-ir5k-CR" role="treeitem" aria-selected="false">
                <div className="pic flag_CR"></div>
                <span className="cn">Costa Rica</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-ci1k-CI" role="treeitem" aria-selected="false">
                <div className="pic flag_CI"></div>
                <span className="cn">Cote d'Ivoire</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-jkkf-HR" role="treeitem" aria-selected="false">
                <div className="pic flag_HR"></div>
                <span className="cn">Croatia</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-lpmh-CU" role="treeitem" aria-selected="false">
                <div className="pic flag_CU"></div>
                <span className="cn">Cuba</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-kak2-CY" role="treeitem" aria-selected="false">
                <div className="pic flag_CY"></div>
                <span className="cn">Cyprus</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-6dde-CZ" role="treeitem" aria-selected="false">
                <div className="pic flag_CZ"></div>
                <span className="cn">Czech Republic</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-w2uv-CD" role="treeitem" aria-selected="false">
                <div className="pic flag_CD"></div>
                <span className="cn">Democratic Republic of the Congo</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-lwok-DK" role="treeitem" aria-selected="false">
                <div className="pic flag_DK"></div>
                <span className="cn">Denmark</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-ocsq-DG" role="treeitem" aria-selected="false">
                <div className="pic flag_DG"></div>
                <span className="cn">Diego Garcia</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-sfta-DJ" role="treeitem" aria-selected="false">
                <div className="pic flag_DJ"></div>
                <span className="cn">Djibouti</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-43mg-DM" role="treeitem" aria-selected="false">
                <div className="pic flag_DM"></div>
                <span className="cn">Dominica</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-gp4x-DO" role="treeitem" aria-selected="false">
                <div className="pic flag_DO"></div>
                <span className="cn">Dominican Republic</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-wzcn-TL" role="treeitem" aria-selected="false">
                <div className="pic flag_TL"></div>
                <span className="cn">East Timor</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-m5o6-EC" role="treeitem" aria-selected="false">
                <div className="pic flag_EC"></div>
                <span className="cn">Ecuador</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-lrox-EG" role="treeitem" aria-selected="false">
                <div className="pic flag_EG"></div>
                <span className="cn">Egypt</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-g82u-SV" role="treeitem" aria-selected="false">
                <div className="pic flag_SV"></div>
                <span className="cn">El Salvador</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-c7sm-GQ" role="treeitem" aria-selected="false">
                <div className="pic flag_GQ"></div>
                <span className="cn">Equatorial Guinea</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-xce4-ER" role="treeitem" aria-selected="false">
                <div className="pic flag_ER"></div>
                <span className="cn">Eritrea</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-pcbv-EE" role="treeitem" aria-selected="false">
                <div className="pic flag_EE"></div>
                <span className="cn">Estonia</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-n1em-ET" role="treeitem" aria-selected="false">
                <div className="pic flag_ET"></div>
                <span className="cn">Ethiopia</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-irsl-FK" role="treeitem" aria-selected="false">
                <div className="pic flag_FK"></div>
                <span className="cn">Falkland Islands</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-2a4c-FO" role="treeitem" aria-selected="false">
                <div className="pic flag_FO"></div>
                <span className="cn">Faroe Islands</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-r5pw-FJ" role="treeitem" aria-selected="false">
                <div className="pic flag_FJ"></div>
                <span className="cn">Fiji</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-ysb9-FI" role="treeitem" aria-selected="false">
                <div className="pic flag_FI"></div>
                <span className="cn">Finland</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-qcoa-FR" role="treeitem" aria-selected="false">
                <div className="pic flag_FR"></div>
                <span className="cn">France</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-9ggs-GF" role="treeitem" aria-selected="false">
                <div className="pic flag_GF"></div>
                <span className="cn">French Guiana</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-ybf0-PF" role="treeitem" aria-selected="false">
                <div className="pic flag_PF"></div>
                <span className="cn">French Polynesia</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-llw9-GA" role="treeitem" aria-selected="false">
                <div className="pic flag_GA"></div>
                <span className="cn">Gabon</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-krb5-GM" role="treeitem" aria-selected="false">
                <div className="pic flag_GM"></div>
                <span className="cn">Gambia</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-a5g0-GE" role="treeitem" aria-selected="false">
                <div className="pic flag_GE"></div>
                <span className="cn">Georgia</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-bd1w-DE" role="treeitem" aria-selected="false">
                <div className="pic flag_DE"></div>
                <span className="cn">Germany</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-v83z-GH" role="treeitem" aria-selected="false">
                <div className="pic flag_GH"></div>
                <span className="cn">Ghana</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-bc5v-GI" role="treeitem" aria-selected="false">
                <div className="pic flag_GI"></div>
                <span className="cn">Gibraltar</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-ibdj-GR" role="treeitem" aria-selected="false">
                <div className="pic flag_GR"></div>
                <span className="cn">Greece</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-a92b-GL" role="treeitem" aria-selected="false">
                <div className="pic flag_GL"></div>
                <span className="cn">Greenland</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-4gso-GD" role="treeitem" aria-selected="false">
                <div className="pic flag_GD"></div>
                <span className="cn">Grenada</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-2gjl-GP" role="treeitem" aria-selected="false">
                <div className="pic flag_GP"></div>
                <span className="cn">Guadeloupe</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-368k-GU" role="treeitem" aria-selected="false">
                <div className="pic flag_GU"></div>
                <span className="cn">Guam</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-4qc3-GT" role="treeitem" aria-selected="false">
                <div className="pic flag_GT"></div>
                <span className="cn">Guatemala</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-pcq0-GN" role="treeitem" aria-selected="false">
                <div className="pic flag_GN"></div>
                <span className="cn">Guinea</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-t2m7-GW" role="treeitem" aria-selected="false">
                <div className="pic flag_GW"></div>
                <span className="cn">Guinea-Bissau</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-dn43-GY" role="treeitem" aria-selected="false">
                <div className="pic flag_GY"></div>
                <span className="cn">Guyana</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-42f9-HT" role="treeitem" aria-selected="false">
                <div className="pic flag_HT"></div>
                <span className="cn">Haiti</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-fhi1-HN" role="treeitem" aria-selected="false">
                <div className="pic flag_HN"></div>
                <span className="cn">Honduras</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-3u7l-HK" role="treeitem" aria-selected="false">
                <div className="pic flag_HK"></div>
                <span className="cn">Hong Kong</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-1ct9-HU" role="treeitem" aria-selected="false">
                <div className="pic flag_HU"></div>
                <span className="cn">Hungary</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-4pmt-IS" role="treeitem" aria-selected="false">
                <div className="pic flag_IS"></div>
                <span className="cn">Iceland</span>
              </li>
              <li className="select2-results__option select2-results__option--highlighted" id="select2-user_country-result-i676-IN" role="treeitem" aria-selected="true">
                <div className="pic flag_IN"></div>
                <span className="cn">India</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-vioy-ID" role="treeitem" aria-selected="false">
                <div className="pic flag_ID"></div>
                <span className="cn">Indonesia</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-r0hs-IR" role="treeitem" aria-selected="false">
                <div className="pic flag_IR"></div>
                <span className="cn">Iran</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-bv4i-IQ" role="treeitem" aria-selected="false">
                <div className="pic flag_IQ"></div>
                <span className="cn">Iraq</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-zfau-IE" role="treeitem" aria-selected="false">
                <div className="pic flag_IE"></div>
                <span className="cn">Ireland</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-nqoj-IL" role="treeitem" aria-selected="false">
                <div className="pic flag_IL"></div>
                <span className="cn">Israel</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-br79-IT" role="treeitem" aria-selected="false">
                <div className="pic flag_IT"></div>
                <span className="cn">Italy</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-8iz5-JM" role="treeitem" aria-selected="false">
                <div className="pic flag_JM"></div>
                <span className="cn">Jamaica</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-on4i-JP" role="treeitem" aria-selected="false">
                <div className="pic flag_JP"></div>
                <span className="cn">Japan</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-kemp-JE" role="treeitem" aria-selected="false">
                <div className="pic flag_JE"></div>
                <span className="cn">Jersey</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-5fwm-JO" role="treeitem" aria-selected="false">
                <div className="pic flag_JO"></div>
                <span className="cn">Jordan</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-wryx-KZ" role="treeitem" aria-selected="false">
                <div className="pic flag_KZ"></div>
                <span className="cn">Kazakhstan</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-fak6-KE" role="treeitem" aria-selected="false">
                <div className="pic flag_KE"></div>
                <span className="cn">Kenya</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-gqds-KI" role="treeitem" aria-selected="false">
                <div className="pic flag_KI"></div>
                <span className="cn">Kiribati</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-haqh-XK" role="treeitem" aria-selected="false">
                <div className="pic flag_XK"></div>
                <span className="cn">Kosovo</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-nv7l-KW" role="treeitem" aria-selected="false">
                <div className="pic flag_KW"></div>
                <span className="cn">Kuwait</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-9dtn-KG" role="treeitem" aria-selected="false">
                <div className="pic flag_KG"></div>
                <span className="cn">Kyrgyzstan</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-eh6k-LA" role="treeitem" aria-selected="false">
                <div className="pic flag_LA"></div>
                <span className="cn">Laos</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-b6b6-LV" role="treeitem" aria-selected="false">
                <div className="pic flag_LV"></div>
                <span className="cn">Latvia</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-ttuq-LB" role="treeitem" aria-selected="false">
                <div className="pic flag_LB"></div>
                <span className="cn">Lebanon</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-4cgg-LS" role="treeitem" aria-selected="false">
                <div className="pic flag_LS"></div>
                <span className="cn">Lesotho</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-dzpw-LR" role="treeitem" aria-selected="false">
                <div className="pic flag_LR"></div>
                <span className="cn">Liberia</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-1xpa-LY" role="treeitem" aria-selected="false">
                <div className="pic flag_LY"></div>
                <span className="cn">Libya</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-1cji-LI" role="treeitem" aria-selected="false">
                <div className="pic flag_LI"></div>
                <span className="cn">Liechtenstein</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-t8ko-LT" role="treeitem" aria-selected="false">
                <div className="pic flag_LT"></div>
                <span className="cn">Lithuania</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-jlna-LU" role="treeitem" aria-selected="false">
                <div className="pic flag_LU"></div>
                <span className="cn">Luxembourg</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-2880-MO" role="treeitem" aria-selected="false">
                <div className="pic flag_MO"></div>
                <span className="cn">Macao</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-268o-MK" role="treeitem" aria-selected="false">
                <div className="pic flag_MK"></div>
                <span className="cn">Macedonia</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-knap-MG" role="treeitem" aria-selected="false">
                <div className="pic flag_MG"></div>
                <span className="cn">Madagascar</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-fd15-MW" role="treeitem" aria-selected="false">
                <div className="pic flag_MW"></div>
                <span className="cn">Malawi</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-nrp3-MY" role="treeitem" aria-selected="false">
                <div className="pic flag_MY"></div>
                <span className="cn">Malaysia</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-k7jz-MV" role="treeitem" aria-selected="false">
                <div className="pic flag_MV"></div>
                <span className="cn">Maldives</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-behp-ML" role="treeitem" aria-selected="false">
                <div className="pic flag_ML"></div>
                <span className="cn">Mali</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-ri9h-MT" role="treeitem" aria-selected="false">
                <div className="pic flag_MT"></div>
                <span className="cn">Malta</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-w8v6-MH" role="treeitem" aria-selected="false">
                <div className="pic flag_MH"></div>
                <span className="cn">Marshall Islands</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-gxyh-MQ" role="treeitem" aria-selected="false">
                <div className="pic flag_MQ"></div>
                <span className="cn">Martinique</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-g0w3-MR" role="treeitem" aria-selected="false">
                <div className="pic flag_MR"></div>
                <span className="cn">Mauritania</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-95d1-MU" role="treeitem" aria-selected="false">
                <div className="pic flag_MU"></div>
                <span className="cn">Mauritius</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-w968-MX" role="treeitem" aria-selected="false">
                <div className="pic flag_MX"></div>
                <span className="cn">Mexico</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-igid-FM" role="treeitem" aria-selected="false">
                <div className="pic flag_FM"></div>
                <span className="cn">Micronesia</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-ub6p-MD" role="treeitem" aria-selected="false">
                <div className="pic flag_MD"></div>
                <span className="cn">Moldova</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-oenv-MC" role="treeitem" aria-selected="false">
                <div className="pic flag_MC"></div>
                <span className="cn">Monaco</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-9mch-MN" role="treeitem" aria-selected="false">
                <div className="pic flag_MN"></div>
                <span className="cn">Mongolia</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-1idg-ME" role="treeitem" aria-selected="false">
                <div className="pic flag_ME"></div>
                <span className="cn">Montenegro</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-j8ef-MS" role="treeitem" aria-selected="false">
                <div className="pic flag_MS"></div>
                <span className="cn">Montserrat</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-kwuz-MA" role="treeitem" aria-selected="false">
                <div className="pic flag_MA"></div>
                <span className="cn">Morocco</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-067l-MZ" role="treeitem" aria-selected="false">
                <div className="pic flag_MZ"></div>
                <span className="cn">Mozambique</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-es16-MM" role="treeitem" aria-selected="false">
                <div className="pic flag_MM"></div>
                <span className="cn">Myanmar</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-1pdi-NA" role="treeitem" aria-selected="false">
                <div className="pic flag_NA"></div>
                <span className="cn">Namibia</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-xkup-NR" role="treeitem" aria-selected="false">
                <div className="pic flag_NR"></div>
                <span className="cn">Nauru</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-36u3-NP" role="treeitem" aria-selected="false">
                <div className="pic flag_NP"></div>
                <span className="cn">Nepal</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-1brt-NL" role="treeitem" aria-selected="false">
                <div className="pic flag_NL"></div>
                <span className="cn">Netherlands</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-37un-AN" role="treeitem" aria-selected="false">
                <div className="pic flag_AN"></div>
                <span className="cn">Netherlands Antilles</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-i4s4-NC" role="treeitem" aria-selected="false">
                <div className="pic flag_NC"></div>
                <span className="cn">New Caledonia</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-w5yz-NZ" role="treeitem" aria-selected="false">
                <div className="pic flag_NZ"></div>
                <span className="cn">New Zealand</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-cmjm-NI" role="treeitem" aria-selected="false">
                <div className="pic flag_NI"></div>
                <span className="cn">Nicaragua</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-6xfw-NE" role="treeitem" aria-selected="false">
                <div className="pic flag_NE"></div>
                <span className="cn">Niger</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-5kqo-NG" role="treeitem" aria-selected="false">
                <div className="pic flag_NG"></div>
                <span className="cn">Nigeria</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-j8kq-NU" role="treeitem" aria-selected="false">
                <div className="pic flag_NU"></div>
                <span className="cn">Niue</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-um2z-KP" role="treeitem" aria-selected="false">
                <div className="pic flag_KP"></div>
                <span className="cn">North Korea</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-rfp6-MP" role="treeitem" aria-selected="false">
                <div className="pic flag_MP"></div>
                <span className="cn">Northern Mariana Islands</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-7io9-NO" role="treeitem" aria-selected="false">
                <div className="pic flag_NO"></div>
                <span className="cn">Norway</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-cgrg-OM" role="treeitem" aria-selected="false">
                <div className="pic flag_OM"></div>
                <span className="cn">Oman</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-ih87-PK" role="treeitem" aria-selected="false">
                <div className="pic flag_PK"></div>
                <span className="cn">Pakistan</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-pmkb-PW" role="treeitem" aria-selected="false">
                <div className="pic flag_PW"></div>
                <span className="cn">Palau</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-wl2e-PS" role="treeitem" aria-selected="false">
                <div className="pic flag_PS"></div>
                <span className="cn">Palestine</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-gc98-PA" role="treeitem" aria-selected="false">
                <div className="pic flag_PA"></div>
                <span className="cn">Panama</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-p659-PG" role="treeitem" aria-selected="false">
                <div className="pic flag_PG"></div>
                <span className="cn">Papua New Guinea</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-5l1w-PY" role="treeitem" aria-selected="false">
                <div className="pic flag_PY"></div>
                <span className="cn">Paraguay</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-zx1o-PE" role="treeitem" aria-selected="false">
                <div className="pic flag_PE"></div>
                <span className="cn">Peru</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-9pkt-PH" role="treeitem" aria-selected="false">
                <div className="pic flag_PH"></div>
                <span className="cn">Philippines</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-xiwf-PL" role="treeitem" aria-selected="false">
                <div className="pic flag_PL"></div>
                <span className="cn">Poland</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-3397-PT" role="treeitem" aria-selected="false">
                <div className="pic flag_PT"></div>
                <span className="cn">Portugal</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-g92r-PR" role="treeitem" aria-selected="false">
                <div className="pic flag_PR"></div>
                <span className="cn">Puerto Rico</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-5eqg-QA" role="treeitem" aria-selected="false">
                <div className="pic flag_QA"></div>
                <span className="cn">Qatar</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-rezz-RE" role="treeitem" aria-selected="false">
                <div className="pic flag_RE"></div>
                <span className="cn">Reunion</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-8yot-RO" role="treeitem" aria-selected="false">
                <div className="pic flag_RO"></div>
                <span className="cn">Romania</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-tohp-RU" role="treeitem" aria-selected="false">
                <div className="pic flag_RU"></div>
                <span className="cn">Russia</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-ib33-RW" role="treeitem" aria-selected="false">
                <div className="pic flag_RW"></div>
                <span className="cn">Rwanda</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-4gcc-SH" role="treeitem" aria-selected="false">
                <div className="pic flag_SH"></div>
                <span className="cn">Saint Helena</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-niea-KN" role="treeitem" aria-selected="false">
                <div className="pic flag_KN"></div>
                <span className="cn">Saint Kitts and Nevis</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-hf82-LC" role="treeitem" aria-selected="false">
                <div className="pic flag_LC"></div>
                <span className="cn">Saint Lucia</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-sds5-PM" role="treeitem" aria-selected="false">
                <div className="pic flag_PM"></div>
                <span className="cn">Saint Pierre and Miquelon</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-zhu8-VC" role="treeitem" aria-selected="false">
                <div className="pic flag_VC"></div>
                <span className="cn">Saint Vincent and Grenadines</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-yz1q-WS" role="treeitem" aria-selected="false">
                <div className="pic flag_WS"></div>
                <span className="cn">Samoa</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-2t2t-SM" role="treeitem" aria-selected="false">
                <div className="pic flag_SM"></div>
                <span className="cn">San Marino</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-s1lb-ST" role="treeitem" aria-selected="false">
                <div className="pic flag_ST"></div>
                <span className="cn">Sao Tome and Principe</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-54ts-SA" role="treeitem" aria-selected="false">
                <div className="pic flag_SA"></div>
                <span className="cn">Saudi Arabia</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-s1ti-SN" role="treeitem" aria-selected="false">
                <div className="pic flag_SN"></div>
                <span className="cn">Senegal</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-j42d-RS" role="treeitem" aria-selected="false">
                <div className="pic flag_RS"></div>
                <span className="cn">Serbia</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-21n2-SC" role="treeitem" aria-selected="false">
                <div className="pic flag_SC"></div>
                <span className="cn">Seychelles</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-kvuw-SL" role="treeitem" aria-selected="false">
                <div className="pic flag_SL"></div>
                <span className="cn">Sierra Leone</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-i6f2-SG" role="treeitem" aria-selected="false">
                <div className="pic flag_SG"></div>
                <span className="cn">Singapore</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-jjgv-SX" role="treeitem" aria-selected="false">
                <div className="pic flag_SX"></div>
                <span className="cn">Sint Maarten</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-rrq2-SK" role="treeitem" aria-selected="false">
                <div className="pic flag_SK"></div>
                <span className="cn">Slovakia</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-askw-SI" role="treeitem" aria-selected="false">
                <div className="pic flag_SI"></div>
                <span className="cn">Slovenia</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-b1gd-SB" role="treeitem" aria-selected="false">
                <div className="pic flag_SB"></div>
                <span className="cn">Solomon Islands</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-m31a-SO" role="treeitem" aria-selected="false">
                <div className="pic flag_SO"></div>
                <span className="cn">Somalia</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-kzma-ZA" role="treeitem" aria-selected="false">
                <div className="pic flag_ZA"></div>
                <span className="cn">South Africa</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-rhfu-KR" role="treeitem" aria-selected="false">
                <div className="pic flag_KR"></div>
                <span className="cn">South Korea</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-4wj9-ES" role="treeitem" aria-selected="false">
                <div className="pic flag_ES"></div>
                <span className="cn">Spain</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-leg5-LK" role="treeitem" aria-selected="false">
                <div className="pic flag_LK"></div>
                <span className="cn">Sri Lanka</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-rxq6-SD" role="treeitem" aria-selected="false">
                <div className="pic flag_SD"></div>
                <span className="cn">Sudan</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-f8xy-SR" role="treeitem" aria-selected="false">
                <div className="pic flag_SR"></div>
                <span className="cn">Suriname</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-ni3b-SZ" role="treeitem" aria-selected="false">
                <div className="pic flag_SZ"></div>
                <span className="cn">Swaziland</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-ok73-SE" role="treeitem" aria-selected="false">
                <div className="pic flag_SE"></div>
                <span className="cn">Sweden</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-lah3-CH" role="treeitem" aria-selected="false">
                <div className="pic flag_CH"></div>
                <span className="cn">Switzerland</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-62uz-SY" role="treeitem" aria-selected="false">
                <div className="pic flag_SY"></div>
                <span className="cn">Syria</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-7h0a-TW" role="treeitem" aria-selected="false">
                <div className="pic flag_TW"></div>
                <span className="cn">Taiwan</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-bezj-TJ" role="treeitem" aria-selected="false">
                <div className="pic flag_TJ"></div>
                <span className="cn">Tajikistan</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-2h5i-TZ" role="treeitem" aria-selected="false">
                <div className="pic flag_TZ"></div>
                <span className="cn">Tanzania</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-rzg1-TH" role="treeitem" aria-selected="false">
                <div className="pic flag_TH"></div>
                <span className="cn">Thailand</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-o75e-TG" role="treeitem" aria-selected="false">
                <div className="pic flag_TG"></div>
                <span className="cn">Togo</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-w8c4-TK" role="treeitem" aria-selected="false">
                <div className="pic flag_TK"></div>
                <span className="cn">Tokelau</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-e1s6-TO" role="treeitem" aria-selected="false">
                <div className="pic flag_TO"></div>
                <span className="cn">Tonga</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-52pu-TT" role="treeitem" aria-selected="false">
                <div className="pic flag_TT"></div>
                <span className="cn">Trinidad and Tobago</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-3plz-TN" role="treeitem" aria-selected="false">
                <div className="pic flag_TN"></div>
                <span className="cn">Tunisia</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-m2jg-TR" role="treeitem" aria-selected="false">
                <div className="pic flag_TR"></div>
                <span className="cn">Turkey</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-nvoo-TM" role="treeitem" aria-selected="false">
                <div className="pic flag_TM"></div>
                <span className="cn">Turkmenistan</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-dvvy-TC" role="treeitem" aria-selected="false">
                <div className="pic flag_TC"></div>
                <span className="cn">Turks and Caicos Islands</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-sveh-TV" role="treeitem" aria-selected="false">
                <div className="pic flag_TV"></div>
                <span className="cn">Tuvalu</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-xeiq-UG" role="treeitem" aria-selected="false">
                <div className="pic flag_UG"></div>
                <span className="cn">Uganda</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-gcbu-UA" role="treeitem" aria-selected="false">
                <div className="pic flag_UA"></div>
                <span className="cn">Ukraine</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-re2h-AE" role="treeitem" aria-selected="false">
                <div className="pic flag_AE"></div>
                <span className="cn">United Arab Emirates</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-lczz-GB" role="treeitem" aria-selected="false">
                <div className="pic flag_GB"></div>
                <span className="cn">United Kingdom</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-imcw-US" role="treeitem" aria-selected="false">
                <div className="pic flag_US"></div>
                <span className="cn">United States</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-rkfw-UY" role="treeitem" aria-selected="false">
                <div className="pic flag_UY"></div>
                <span className="cn">Uruguay</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-pze0-VI" role="treeitem" aria-selected="false">
                <div className="pic flag_VI"></div>
                <span className="cn">US Virgin Islands</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-ksm6-UZ" role="treeitem" aria-selected="false">
                <div className="pic flag_UZ"></div>
                <span className="cn">Uzbekistan</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-23bx-VU" role="treeitem" aria-selected="false">
                <div className="pic flag_VU"></div>
                <span className="cn">Vanuatu</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-h1se-VA" role="treeitem" aria-selected="false">
                <div className="pic flag_VA"></div>
                <span className="cn">Vatican City</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-glhp-VE" role="treeitem" aria-selected="false">
                <div className="pic flag_VE"></div>
                <span className="cn">Venezuela</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-3awl-VN" role="treeitem" aria-selected="false">
                <div className="pic flag_VN"></div>
                <span className="cn">Vietnam</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-232f-WF" role="treeitem" aria-selected="false">
                <div className="pic flag_WF"></div>
                <span className="cn">Wallis and Futuna</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-mxhk-YE" role="treeitem" aria-selected="false">
                <div className="pic flag_YE"></div>
                <span className="cn">Yemen</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-f99w-ZM" role="treeitem" aria-selected="false">
                <div className="pic flag_ZM"></div>
                <span className="cn">Zambia</span>
              </li>
              <li className="select2-results__option" id="select2-user_country-result-pdcl-ZW" role="treeitem" aria-selected="false">
                <div className="pic flag_ZW"></div>
                <span className="cn">Zimbabwe</span>
              </li>
            </ul>
          </span>
        </span>
      </span> */}

      {/* <span className="select2-container select2-container--default select2-container--open" style={{ position: "absolute", top: "567.938px", left: "678.5px" }}>
        <span className="select2-dropdown select2-dropdown--below" dir="ltr" style={{ width: "228px" }}>
          <span className="select2-search select2-search--dropdown">
            <input className="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" placeholder="Search..." />
          </span>
          <span className="select2-results">
            <ul className="select2-results__options" role="tree" id="select2-state_list-results" aria-expanded="true" aria-hidden="false">
              <li className="select2-results__option" role="treeitem" aria-disabled="true">Select State</li>
              <li className="select2-results__option select2-results__option--highlighted" id="select2-state_list-result-ecv1-Andaman and Nicobar Islands" role="treeitem" aria-selected="false">Andaman and Nicobar Islands</li>
              <li className="select2-results__option" id="select2-state_list-result-n9b2-Andhra Pradesh" role="treeitem" aria-selected="false">Andhra Pradesh</li>
              <li className="select2-results__option" id="select2-state_list-result-9255-Arunachal Pradesh" role="treeitem" aria-selected="false">Arunachal Pradesh</li>
              <li className="select2-results__option" id="select2-state_list-result-nj7z-Assam" role="treeitem" aria-selected="false">Assam</li>
              <li className="select2-results__option" id="select2-state_list-result-n8mr-Bihar" role="treeitem" aria-selected="false">Bihar</li>
              <li className="select2-results__option" id="select2-state_list-result-hklv-Chandigarh" role="treeitem" aria-selected="false">Chandigarh</li>
              <li className="select2-results__option" id="select2-state_list-result-8rf0-Chhattisgarh" role="treeitem" aria-selected="false">Chhattisgarh</li>
              <li className="select2-results__option" id="select2-state_list-result-q8uw-Dadra and Nagar Haveli" role="treeitem" aria-selected="false">Dadra and Nagar Haveli</li>
              <li className="select2-results__option" id="select2-state_list-result-q7ht-Daman and Diu" role="treeitem" aria-selected="false">Daman and Diu</li>
              <li className="select2-results__option" id="select2-state_list-result-8nti-Delhi" role="treeitem" aria-selected="false">Delhi</li>
              <li className="select2-results__option" id="select2-state_list-result-mmm4-Goa" role="treeitem" aria-selected="false">Goa</li>
              <li className="select2-results__option" id="select2-state_list-result-bv6g-Gujarat" role="treeitem" aria-selected="false">Gujarat</li>
              <li className="select2-results__option" id="select2-state_list-result-crqi-Haryana" role="treeitem" aria-selected="false">Haryana</li>
              <li className="select2-results__option" id="select2-state_list-result-p0yb-Himachal Pradesh" role="treeitem" aria-selected="false">Himachal Pradesh</li>
              <li className="select2-results__option" id="select2-state_list-result-umze-Jammu and Kashmir" role="treeitem" aria-selected="false">Jammu and Kashmir</li>
              <li className="select2-results__option" id="select2-state_list-result-ybsa-Jharkhand" role="treeitem" aria-selected="false">Jharkhand</li>
              <li className="select2-results__option" id="select2-state_list-result-7x3k-Karnataka" role="treeitem" aria-selected="false">Karnataka</li>
              <li className="select2-results__option" id="select2-state_list-result-cjtv-Kerala" role="treeitem" aria-selected="false">Kerala</li>
              <li className="select2-results__option" id="select2-state_list-result-q5lk-Lakshadweep" role="treeitem" aria-selected="false">Lakshadweep</li>
              <li className="select2-results__option" id="select2-state_list-result-demj-Madhya Pradesh" role="treeitem" aria-selected="false">Madhya Pradesh</li>
              <li className="select2-results__option" id="select2-state_list-result-7tfv-Maharashtra" role="treeitem" aria-selected="false">Maharashtra</li>
              <li className="select2-results__option" id="select2-state_list-result-9ndd-Manipur" role="treeitem" aria-selected="false">Manipur</li>
              <li className="select2-results__option" id="select2-state_list-result-enjw-Meghalaya" role="treeitem" aria-selected="false">Meghalaya</li>
              <li className="select2-results__option" id="select2-state_list-result-ytuv-Mizoram" role="treeitem" aria-selected="false">Mizoram</li>
              <li className="select2-results__option" id="select2-state_list-result-mk7x-Nagaland" role="treeitem" aria-selected="false">Nagaland</li>
              <li className="select2-results__option" id="select2-state_list-result-um9t-Odisha" role="treeitem" aria-selected="false">Odisha</li>
              <li className="select2-results__option" id="select2-state_list-result-wkj2-Puducherry" role="treeitem" aria-selected="false">Puducherry</li>
              <li className="select2-results__option" id="select2-state_list-result-styb-Punjab" role="treeitem" aria-selected="false">Punjab</li>
              <li className="select2-results__option" id="select2-state_list-result-8lec-Rajasthan" role="treeitem" aria-selected="false">Rajasthan</li>
              <li className="select2-results__option" id="select2-state_list-result-3opz-Sikkim" role="treeitem" aria-selected="false">Sikkim</li>
              <li className="select2-results__option" id="select2-state_list-result-p2d0-Tamil Nadu" role="treeitem" aria-selected="false">Tamil Nadu</li>
              <li className="select2-results__option" id="select2-state_list-result-2f6q-Telangana" role="treeitem" aria-selected="false">Telangana</li>
              <li className="select2-results__option" id="select2-state_list-result-3nll-Tripura" role="treeitem" aria-selected="false">Tripura</li>
              <li className="select2-results__option" id="select2-state_list-result-c5yc-Uttar Pradesh" role="treeitem" aria-selected="false">Uttar Pradesh</li>
              <li className="select2-results__option" id="select2-state_list-result-tv61-Uttarakhand" role="treeitem" aria-selected="false">Uttarakhand</li>
              <li className="select2-results__option" id="select2-state_list-result-r4z5-West Bengal" role="treeitem" aria-selected="false">West Bengal</li>
            </ul>
          </span>
        </span>
      </span> */}

    </>
  );
}
