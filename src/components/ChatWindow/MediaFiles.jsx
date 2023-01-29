import React, { useState, useEffect } from 'react';

export default function MediaFiles(params) {
    return <>
        <div className="media-files">
            <div className="flexC cwin fjustifySA">
                <div id="type_filters" className="flexC fjustifySA flexM cwin-mediatab">
                    <div data-type="image" data-action="selectCategory" className="cwin-mediatab-item font14 fontB curP">Images</div>
                    <div data-type="video" data-action="selectCategory" className="cwin-mediatab-item font14 fontB curP sel" data-selected="">Videos</div>
                    <div data-type="audio" data-action="selectCategory" className="cwin-mediatab-item font14 fontB curP">Audio</div>
                    <div data-type="file" data-action="selectCategory" className="cwin-mediatab-item font14 fontB curP">Files</div>
                    <div data-type="link" data-action="selectCategory" className="cwin-mediatab-item font14 fontB curP">Links</div>
                    <div data-type="recording" data-action="selectCategory" className="cwin-mediatab-item font14 fontB curP">Recordings</div>
                </div>
            </div>
            <div className='media-info flexC justifySB'>
                <div className='rep-month'>January, 2023</div>
                <div className="media-search flexC justifyE mL20">
                    <div id="ml_search" class="zcl-search ml-search">
                        <div id="ml_search_icon" class="zcl-seach-icon zcf-search2 zcl-icon--default" data-action="showSearchInput">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                            </svg>
                        </div>
                        <div class="zcl-search-input flexC"><input id="ml_search_input" type="text" placeholder="Search by file name" /><span data-action="clearSearch" class="zcl-search-clear">Clear</span></div>
                        <div data-action="hideSearch" class="zcl-seach-close zcf-close clr-icon font10 zcl-dropdown-divider">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"></path>
                            </svg>

                        </div>
                    </div>

                    <div id="sharedByDrpdwn" data-action="show_drpdwn_options" class=" drpdwn-input fshrink drpdwn-wrp mLR20 mlsharedby flexC posrel ">
                        <div class="flexC">
                            <div id="ml_sharedby_txt" class="clr-lp1 font13 clr6">Shared By:</div>
                            <div class="mL8 flexC">
                                <div id="filter_txt" class="selectedusers clr-H font13">All</div>
                                <em class="mL8 clr-icon zcf-downArrow font10"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                </svg></em>
                                <div id="sharedByOptns" class="zcl-menu-wrap posa no-pointer " >
                                    <div class="zcl-menu-item justifySB" data-chid="CT_1280427390976451600_60016673028" data-uid="{{uid}}" data-action="removeUserFilter">All <em id="allsel" class="clrG msi-tick p5"></em></div>
                                    <div class="zcl-menu-item justifySB" data-chid="CT_1280427390976451600_60016673028" data-uid="60016689094" data-action="filterMediaByUserId">You <em id="byCurrUsersel" class="clrG msi-tick dN p5"></em></div>
                                    <div id="channelFilter" class="zcl-menu-item jsutifySB" data-chid="CT_1280427390976451600_60016673028" data-action="channelUserIdFilter">
                                        Specific User <em class="zcf-rightArrow mL20"></em>
                                        <div id="addparticipants" class="ml-filter"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="drpdwn-wrp zcl-icon zcl-icon--default posrel ml-date" style={{ marginRight: "20px", marginLeft: "0px" }}>
                        <em class="zcf-calendar p10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                            </svg>
                        </em>
                    </div>

                    <div class="drpdwn-wrp zcl-icon zcl-icon--default posrel ml-date" style={{ marginRight: "20px", marginLeft: "0px" }}>
                        <em class="zcf-calendar p10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-ui-checks-grid" viewBox="0 0 16 16">
                                <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-3zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2z" />
                            </svg>
                        </em>
                    </div>
                </div>
            </div>

            <div id="ml-data-container" zc_sticky_title_list="" data-uid="CT_1280427390976451600_60016673028" class="flexW ovrflwA ml-data-container">
                <div class="fshrink medialisting-sticky-title"><div id="date_seperater_1674791112627" zc_running_title="2" class="mT20 fontB w100 ml-datesep line24 vsbH" style={{ display: "none" }}>January, 2023</div></div>
                <div id="grid_layout1" class="gridlay">
                    <div id="grid_item_60016688891_1674791112627" data-action="open_attachment" class="ml-grid-item curP posrel">
                        <div
                            data-name="item_cont"
                            class="h100 w100 posrel zhshare-src"
                            data-zhshare-src-meta='{"id":"ad4ea84b256b25fcb1777ef77fb61e624f79d64ff66c7997c48cf127c9b37cab39e91178a779b6be93f2552eeaddbf9967d94eb390bd4b59d26748e178824d86","size":"487577"}'
                            data-zhshare-src-fname="Copy_of_Well_Done-__6_.png"
                            chid="CT_1280427390976451600_60016673028"
                            mtype="20"
                            uid="60016688891_1674791112627"
                            fname="Copy_of_Well_Done-__6_.png"
                            fsize="476 KB"
                            msguid="1674791112655%202022683459917"
                            fsender="60016688891"
                            msgtime="1674791112627"
                            senttime="1674791112627"
                            bytefilesize="{{file_size}}"
                            fsendername="Karthikeyan Velumani"
                            fcomment="@Thamizharasan R Codingmart Wishing you the best on your birthday 🎂 and everything good in the year ahead.
May your birthday be sprinkled with fun and laughter. Have a great day!

Happy birthday!!!🎂🎂🥳🥳🥳"
                            isv1="true"
                            hasthumbnail="true"
                            contenttype="image/png"
                            url="ad4ea84b256b25fcb1777ef77fb61e624f79d64ff66c7997c48cf127c9b37cab39e91178a779b6be93f2552eeaddbf9967d94eb390bd4b59d26748e178824d86"
                            preview_url="ad4ea84b256b25fcb1777ef77fb61e624f79d64ff66c7997c48cf127c9b37cab39e91178a779b6be93f2552eeaddbf9967d94eb390bd4b59d26748e178824d86"
                        >
                            <div id="grid_options" data-name="grid_options" msguid="1674791112655%202022683459917" class="grid_options posabs h100 flex dN flexS justifySB p10">
                                <div id="user_image" data-uid="60016688891_1674791112627" data-chid="CT_1280427390976451600_60016673028" title="Karthikeyan Velumani" data-action="user_details" class="ml-list-img flexM">
                                    <div msguid="undefined" purpose="sender" sender="60016688891" nname="Karthikeyan Velumani" class="sender ellips floatl">
                                        <div class="chtimg floatl posrel"><img elemtype="user" hover="true" uid="60016688891" src="https://contacts.zoho.in/file?ID=60016688891&amp;exp=6000&amp;t=user&amp;fs=thumb" class="cur" /></div>
                                        <span elemtype="user" hover="true" uid="60016688891" class="zctxtseln cur">Karthikeyan Velumani</span>
                                    </div>
                                </div>
                                <div id="att_actions" class="flexC ml-icon_dom" msguid="1674791112655%202022683459917" uid="60016688891_1674791112627" data-chid="CT_1280427390976451600_60016673028">
                                    <div
                                        id="download_icon"
                                        documentclick="attdownload"
                                        data-action="download_attachment"
                                        title="Download"
                                        data-chid="CT_1280427390976451600_60016673028"
                                        data-uid="60016688891_1674791112627"
                                        class="zcimg-actn-btn p5 mL8 curP"
                                    >
                                        <em class="zcf-download"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                        </svg></em>
                                    </div>
                                    <div
                                        id="dropdown_icon_60016688891_1674791112627"
                                        data-type="grid"
                                        data-action="show_drpdwn_options"
                                        msguid="1674791112655%202022683459917"
                                        data-chid="CT_1280427390976451600_60016673028"
                                        data-uid="60016688891_1674791112627"
                                        class="zcimg-actn-btn p5 mL8 curP textC ml-drpdwm_menu"
                                        title="More"
                                    >
                                        <em class="zcf-more"></em>
                                    </div>
                                </div>
                            </div>
                            <div data-name="forward_selection" data-uid="60016688891_1674791112627" msguid="1674791112655%202022683459917" class="dN posa h100 w100 mT5" data-action="selFrwdItem">
                                <label id="selItem" uid="60016688891_1674791112627" class="w100 flexIC curP">
                                    <div class="zcl-checkbox w100"><input id="frwdmsginfo_60016688891_1674791112627" data-name="frwrd_input" type="checkbox" data-uid="60016688891_1674791112627" /><span class="zcf-tick flexM"></span></div>
                                </label>
                            </div>
                            <div id="img_dom">
                                <img
                                    previewelem=""
                                    data-action="open_attachment"
                                    id="imgpreview"
                                    data-uid="60016688891_1674791112627"
                                    msguid="1674791112655%202022683459917"
                                    sender="Karthikeyan Velumani"
                                    hasthumbnail="true"
                                    previewfilesrc="https://download-accl.zoho.in/webdownload?x-service=CLIQ&amp;event-id=ad4ea84b256b25fcb1777ef77fb61e624f79d64ff66c7997c48cf127c9b37cab39e91178a779b6be93f2552eeaddbf9967d94eb390bd4b59d26748e178824d86"
                                    filetype="png"
                                    filesrc="https://download-accl.zoho.in/webdownload?x-service=CLIQ&amp;event-id=ad4ea84b256b25fcb1777ef77fb61e624f79d64ff66c7997c48cf127c9b37cab39e91178a779b6be93f2552eeaddbf9967d94eb390bd4b59d26748e178824d86"
                                    isv1="true"
                                    chid="CT_1280427390976451600_60016673028"
                                    contenttype="image/png"
                                    fname="Copy_of_Well_Done-__6_.png"
                                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHYAvgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EAEAQAAICAQIDBAYHBgQHAQAAAAECAAMRBCESMUEFEyJRBjJhcYGRFEJTkrHR4SNSgqHB8DNDVIMVFzRicnOTB//EABoBAAMBAQEBAAAAAAAAAAAAAAACAwEEBQb/xAAiEQACAgICAwEAAwAAAAAAAAAAAQIRAxIhMQQTUUEUIjL/2gAMAwEAAhEDEQA/APkBrtr8LcoSkcBOVyGGDGDfRqRllRD5gECKsSjeEH/xzmWReSUXadhq6qySLG4T025iFZk2DZB/7t4ujjh3A25Ag7Q2XdBxAe/zhTY0ZKuDp0i2pxIV946RVqbKjuwI98cpFo8Vb8LDmJ1rCx/bAeeyY/CCTNlGLV9MVpHCQRg55wtS08QFoI8uGVVMk8AGIfS6Z7rMY+c1oWCd0D1A41HMEchnpE0Vg4267TTtL1+A4YZO56QbIrgFclh0xBI2cLZ26g11pepyGB+BHMRcFrQzEbjeFXvWPdjOG6e2MnT/AEZV49w4wcEbYgDjtyuiqoLNOQeY3EBYvdh0dTuRg55TU0ddT1XF9htw7fOJ317jG46jymLui08f9FISqODvJeuNhLtVwsR0PL2wwAchR0EY59b4M7GDD8P7PPWctXDYlrDgAeyOiNVYKUxsYfhwoPnBkbwMZyqvHibn5SMpdt9h0jIapa8cIL+flBouSXOwG+YBQy7CikIPrFc49kz+HiYljGKwXUFs4GcSrUFtywWJ0UdyoDwcBBzlZdAyYIx85EYYx0hi+awuORyDAxJMutRaviztnlOqCu2PD1EGljYA3AjdOHrJPrA7e2HReFS6CqipgnrBCut2YHIPQ+U5Y5HKHQgKjLz8opdVJ0Vr0/dZYbiFQF+JQMA7k+ULTeGBVl2YdOkvVUUJYDIO2RFsssS41JVVRwh3wQPWEWso/ak07/VI8xGhR3jELkjG4AhdJYtRBAHeD1eLrNv9Qzgm0mLpVXUWDqeNfLoYGvjuvIv2BxkDpHnoxYWT1WOd/bAWaVheeEgDqIKRk8LXQTU0rTqMJnuVACkfW9sDrql27vrzM0dJXW9S0u3iGQp8xK2jNq18AUsvI9RFvktLGnG/pmdytlCLyZSct5bwKqEbJwR5zUv0zVPZ3ZBQgcSDrEFVSr5HXb3x0zmyY6aM/UITbnHKBINjY6TS1ALJ6uD19sNodGDodReRkMOFfftG2SVnL6HknSMqwZx7BBFcRll6zuprWsgDyyY9nPKAkOcMP8PA65/pIleTnpC11n6viY7BfODFiioThA4Rk8XSD1aCtguc9QY4+KtKmU8R5zOtbiIGMAcpPlsvPWMTorPOWEqoK8jiEDnkVBj0STOoucE7CN1093kPkERdQhbI8PvjFbeAK26g7Zg0VhSL36W0ILFUug2JA5QVJOMjzjD6qxeE2AEbZx9b3zliU2r3yArvuomV9KvW7iFW5cAqAMdJoaCxx648B34tvnMQu6HHMH++cep1SKgVtsdPOJLHwdGDyEpcjVdh0+ptUkMvMfpHVrpuRbApVsfW5/ymW57zFm5HQ8sSt+suAHjyOhzMcG+i8fIjC9uUaVN+LO5tXClcZB/nJju+0eFkwpGQw3xO9m62p6wtmxU7NtsPKMarSMy1ajTsDWNuPO2JP/L5Opf3x7RdlPoSXsXqsDPxHPDzi/aKFRXYykcJ3PLMdGrqoKIvdZbHiA2z7ZTXWqVZdRwuLPVffEI7KXQZVjeN12CU2XaYuzI6scqBjiz75kWEpxqN+Leem0tFlumr2rsVs+JAAVPwiF/ZNhsc1guABsvOG6TdiZPHlOEXEybKHNRsOfCOpmhpPD6Psh2ZXP8AMwBKqOBlwPrAjcRnThfo99ODlsEfObN2kTwQUZtr40ZSp3KGx1yANhnrEGJtbiJyTzm9rKEWrIIIB4SJkFAjZxzMtGR52fE01Er3Q4RB8CowcnkeUI9mTBOpJmbWI4JdA9RY1rZPyi5XMZZfKCKEmM2qISjKTCd2fKdFZ8prLpM9J0aI9BM3R0ehmUKznlCKjDkZpfQzLDRmbug9MkZvAT0nVrI6TVXSHyl10RPSb7EN6JMylU45Sd0c8psfQz5Tj6TgUs2AAMk+UPYgeB1yZYDryJhmXvEUc26zO1faqkFdKhz+8w/CIvrNSy73Ny6HH4RXkRHdLg2hamnsBZgoz6rMDia9PbejoqZE1FRa0bjOwHl5CeFC5hO5YSM8m34UxZskP8m/brNNcxZbU9waXW83V8Au4uH1QGziec7khegkGUKsG4W5gg7xlmJucrPZ6DUmioi23I6KMwn/ABjVrqO+TAPntPIV67U17JYTnoRmbfZfaen1jpp7Ku7uOwOcq35QuL5aOnF5MuIp0epNdPaVItTh70D6owSfbAvpRpNJbY2c4wB7en9YCumzTWcSkg+yaORraWTUYVAPFj+k553Hro9nFOE+Jqmef1A7vTZyTxnYeyZV/qgCek7X0ddfCUsPCFwMHOwnn+FmfKoXA64wBGjktHN5OHV0itWmxU1jnA/GU4A3qjYx5QHGXQYHJQZy7j4cKoA9k2MuSU8SpGfYvBsIIjzxGjpyWJcnboZV1rXYA/KUs5JQZ6ZaJcUrDjEsAD1xOfZnpRjACKBLrpxDD3S44epxBtlFGAJdMMw6aYQtYz0jVSZ6Sbmx1GIBdGp+riYnphYmi7MNI4zbqPAgVc55ZzPVFCq9YtZRXqMC6pbApyAy5wZkZvsXNj3g4x4Z8m0+l48VIj2XHmnl8YytVLs9VtPdEMVLknwnqJ7HtP0POp1r6ivUFUsI4q+72UAY2A+HOK1+hl60uBclgVDwJwFd+Y8yce3Mv7Iv9PE/h5YvowB2SOLiU+HPz2J2+XKaek7GH7NrCoDcQDPuBgb8v73lqexO0dM9S36WxVbJXxcQPPJHl57ifTfRPsPS6xnq7UrOnbhXw5AyAOk5cuVp0j0MOGEMe8z5RqeyCqBgMB+S59uMZ9/4RM9l1pU1trYUqDxFcZ/rz6ifSPSfsqxbdQug04spDj9pw7Ejlj9J5Or0R7W1hQ2UCmsDAbUWbjl9Xc+flGxZU1yJ5HjJpOCPLsvfuy1aVQQM7tjA236QL4096208avWw4l2yDPdf8vb3NfedoAhSf8oEnb3/AI5jNH/51pqit2u1Fl52JUeFSesr74L9OReDnk+g/ZoTXaOvVICeMZAYYImlpuzDqFNtj4UdANzGq9GKlULgKowByAlhxUj18L1Ei83xnsrF0pKzL1Y0FSlFUuTtuecx9TUMCuqrgr54wMCb9mppUeFUz8v6RK28ZxxYHkG/Sc3sbfJ60YxjDVIw07PtduLBGeXlGl7FNn+JdvHQ9TklnJ/iP6Sd7pQMYPzlfcyD8dPsTfsfR1A8Vik+yZuop0lTbAfKbFt2l3HBxe9pm3W6Ut/hVj3mUhlkcubx4VwePGp1H+pv/wDo0sNTqPt7j/uN+cBylwZ6TR8rGTDC+/7e375/OXF9329v3zAAiWDQodSGVuu+2t++YZLLT/nW/fMUVhCrYP7MakMpDlTWMcd+/wAzHqFc87nz8Zmo48iR5xum3h3GB8P0iuKOnFl1NSunztYj3xqqvh5OcTOr1K4wTg+/P5Q/0pEQs7hRzGT+slKJ6OLNE2dG+GyG/nC+k3aduj7Bsem5kYOm6ty3nk29JNPRYeEtYQeg2iXbHpIe09E+l7jgRiPFxeRzOSePZ8ork8zFo0nyfTtVe1gwHIA22PSZV5tGcXuB7DPLVemnDWBZpSSOoYflGqvSjQ6kAOxpY/vDYfGGPHr+Fv5mFriQ/c+pz/1l33jE7bNUBtrbx/uH85SzV12ANXYG90Ws1Qxtn5zqjBHHl8hA779V01t3wsMSs1GqJwdXeR/7CZe6zPPPxij2CWUV8PPyZm32R7r/APUW/fME11329v3zONYCekEz7zdV8Od5JP8ASx1F/wBvb98yjX3dbrT/ABmVZhKkjEXVCvJL6Q3W/a2feMqbHPOxz/EZxpybqibnL6czOiCNqjY85U3n6o+MHJCDI5bzjW1qPE0TLFuZzODaI5m2N/S1X1VJ95k+mkckHxMUkmbMLY0NfYOSoD7oRO1L1/d+R/OIyQ2YKTRoHtXV9GA9oETssewkuxYnzMrmSL2Ps32TineMzmJNpjA7xkzm8mJIBZaux6jmtip9kOe0tYOdxPvA/KK5nCczTHJoaPaGoPMr90Tn0208wh+EWkm7MXZjH0x/3V+c6NUD6yfIxaSbswscW9GHMCdO+4iXvnVZl5GaphY2ZUmBFx6gCW71TzMfZGAZJJJECSSSQAkkkkAJJJJACTo5TskDV2SdnJIDnDtOSSQEZJJJIGEkkkgBJJJIASSSSAEkkkgB/9k="
                                    rel="preload"
                                    class="ml-image-item"
                                    style={{ animation: "1s ease 0s 1 normal none running fadein" }}
                                />
                            </div>
                            <span id="empty_thumb" data-name="empty_dom" class="dN ml-emptygrid-item flexM p12"><span class="dN ml-file-default ellips">png</span></span>
                            <div id="details_footer_60016688891_1674791112627" class="fshrink pT12 pB10 pR12 pL12 curP dN">
                                <div class="flexC mB5 font14">
                                    <em class="zcf-default-img ml-filename mR8 font13"></em>
                                    <div class="ellips">Copy_of_Well_Done-__6_.png</div>
                                </div>
                                <div class="font12 ml-filesize">476 KB</div>
                            </div>
                        </div>
                    </div>
                    <div id="grid_item_60016800367_1674189961835" data-action="open_attachment" class="ml-grid-item curP posrel">
                        <div
                            data-name="item_cont"
                            class="h100 w100 posrel zhshare-src"
                            data-zhshare-src-meta='{"id":"ad4ea84b256b25fcb1777ef77fb61e62fb74b4fa8a67cd89c35d7d396a5a63e5b6953acb0d298dc2eefc8f20003d046767d94eb390bd4b59d26748e178824d86","size":"305144"}'
                            data-zhshare-src-fname="Yellow_Happy_Party_Birthday_Poster__2_.jpg"
                            chid="CT_1280427390976451600_60016673028"
                            mtype="20"
                            uid="60016800367_1674189961835"
                            fname="Yellow_Happy_Party_Birthday_Poster__2_.jpg"
                            fsize="298 KB"
                            msguid="1674189961862%201992017539178"
                            fsender="60016800367"
                            msgtime="1674189961835"
                            senttime="1674189961835"
                            bytefilesize="{{file_size}}"
                            fsendername="Sofia D Shyam"
                            fcomment="@Sachin S"
                            isv1="true"
                            hasthumbnail="true"
                            contenttype="image/jpeg"
                            url="ad4ea84b256b25fcb1777ef77fb61e62fb74b4fa8a67cd89c35d7d396a5a63e5b6953acb0d298dc2eefc8f20003d046767d94eb390bd4b59d26748e178824d86"
                            preview_url="ad4ea84b256b25fcb1777ef77fb61e62fb74b4fa8a67cd89c35d7d396a5a63e5b6953acb0d298dc2eefc8f20003d046767d94eb390bd4b59d26748e178824d86"
                        >
                            <div id="grid_options" data-name="grid_options" msguid="1674189961862%201992017539178" class="grid_options posabs h100 flex dN flexS justifySB p10">
                                <div id="user_image" data-uid="60016800367_1674189961835" data-chid="CT_1280427390976451600_60016673028" title="Sofia D Shyam" data-action="user_details" class="ml-list-img flexM">
                                    <div msguid="undefined" purpose="sender" sender="60016800367" nname="undefined" class="sender ellips floatl">
                                        <div class="chtimg floatl posrel"><img elemtype="user" hover="true" uid="60016800367" src="https://contacts.zoho.in/file?ID=60016800367&amp;exp=6000&amp;t=user&amp;fs=thumb" class="cur" /></div>
                                        <span elemtype="user" hover="true" uid="60016800367" class="zctxtseln cur">undefined</span>
                                    </div>
                                </div>
                                <div id="att_actions" class="flexC ml-icon_dom" msguid="1674189961862%201992017539178" uid="60016800367_1674189961835" data-chid="CT_1280427390976451600_60016673028">
                                    <div
                                        id="download_icon"
                                        documentclick="attdownload"
                                        data-action="download_attachment"
                                        title="Download"
                                        data-chid="CT_1280427390976451600_60016673028"
                                        data-uid="60016800367_1674189961835"
                                        class="zcimg-actn-btn p5 mL8 curP"
                                    >
                                        <em class="zcf-download">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                            </svg>
                                        </em>
                                    </div>
                                    <div
                                        id="dropdown_icon_60016800367_1674189961835"
                                        data-type="grid"
                                        data-action="show_drpdwn_options"
                                        msguid="1674189961862%201992017539178"
                                        data-chid="CT_1280427390976451600_60016673028"
                                        data-uid="60016800367_1674189961835"
                                        class="zcimg-actn-btn p5 mL8 curP textC ml-drpdwm_menu"
                                        title="More"
                                    >
                                        <em class="zcf-more"></em>
                                    </div>
                                </div>
                            </div>
                            <div data-name="forward_selection" data-uid="60016800367_1674189961835" msguid="1674189961862%201992017539178" class="dN posa h100 w100 mT5" data-action="selFrwdItem">
                                <label id="selItem" uid="60016800367_1674189961835" class="w100 flexIC curP">
                                    <div class="zcl-checkbox w100"><input id="frwdmsginfo_60016800367_1674189961835" data-name="frwrd_input" type="checkbox" data-uid="60016800367_1674189961835" /><span class="zcf-tick flexM"></span></div>
                                </label>
                            </div>
                            <div id="img_dom">
                                <img
                                    previewelem=""
                                    data-action="open_attachment"
                                    id="imgpreview"
                                    data-uid="60016800367_1674189961835"
                                    msguid="1674189961862%201992017539178"
                                    sender="Sofia D Shyam"
                                    hasthumbnail="true"
                                    previewfilesrc="https://download-accl.zoho.in/webdownload?x-service=CLIQ&amp;event-id=ad4ea84b256b25fcb1777ef77fb61e62fb74b4fa8a67cd89c35d7d396a5a63e5b6953acb0d298dc2eefc8f20003d046767d94eb390bd4b59d26748e178824d86"
                                    filetype="jpg"
                                    filesrc="https://download-accl.zoho.in/webdownload?x-service=CLIQ&amp;event-id=ad4ea84b256b25fcb1777ef77fb61e62fb74b4fa8a67cd89c35d7d396a5a63e5b6953acb0d298dc2eefc8f20003d046767d94eb390bd4b59d26748e178824d86"
                                    isv1="true"
                                    chid="CT_1280427390976451600_60016673028"
                                    contenttype="image/jpeg"
                                    fname="Yellow_Happy_Party_Birthday_Poster__2_.jpg"
                                    src="https://download-accl.zoho.in/webdownload?x-service=CLIQ&amp;event-id=ad4ea84b256b25fcb1777ef77fb61e62fb74b4fa8a67cd89c35d7d396a5a63e5b6953acb0d298dc2eefc8f20003d046767d94eb390bd4b59d26748e178824d86&amp;x-cli-msg=%7B%22thumbnail%22%3Atrue%7D"
                                    rel="preload"
                                    class="ml-image-item"
                                    style={{ animation: "1s ease 0s 1 normal none running fadein" }}
                                />
                            </div>
                            <span id="empty_thumb" data-name="empty_dom" class="dN ml-emptygrid-item flexM p12"><span class="dN ml-file-default ellips">jpg</span></span>
                            <div id="details_footer_60016800367_1674189961835" class="fshrink pT12 pB10 pR12 pL12 curP dN">
                                <div class="flexC mB5 font14">
                                    <em class="zcf-default-img ml-filename mR8 font13"></em>
                                    <div class="ellips">Yellow_Happy_Party_Birthday_Poster__2_.jpg</div>
                                </div>
                                <div class="font12 ml-filesize">298 KB</div>
                            </div>
                        </div>
                    </div>
                    <div id="grid_item_60016800367_1673932856466" data-action="open_attachment" class="ml-grid-item curP posrel">
                        <div
                            data-name="item_cont"
                            class="h100 w100 posrel zhshare-src"
                            data-zhshare-src-meta='{"id":"ad4ea84b256b25fcb1777ef77fb61e62ac749973d4171caea0112794653e2bc24cb8a8f8e66309110e040a2bdcffc1c267d94eb390bd4b59d26748e178824d86","size":"255819"}'
                            data-zhshare-src-fname="Yellow_Happy_Party_Birthday_Poster__1_.jpg"
                            chid="CT_1280427390976451600_60016673028"
                            mtype="20"
                            uid="60016800367_1673932856466"
                            fname="Yellow_Happy_Party_Birthday_Poster__1_.jpg"
                            fsize="250 KB"
                            msguid="1673932856506%201987465465818"
                            fsender="60016800367"
                            msgtime="1673932856466"
                            senttime="1673932856466"
                            bytefilesize="{{file_size}}"
                            fsendername="Sofia D Shyam"
                            fcomment="Belated Wishes @Jayalakshmi J"
                            isv1="true"
                            hasthumbnail="true"
                            contenttype="image/jpeg"
                            url="ad4ea84b256b25fcb1777ef77fb61e62ac749973d4171caea0112794653e2bc24cb8a8f8e66309110e040a2bdcffc1c267d94eb390bd4b59d26748e178824d86"
                            preview_url="ad4ea84b256b25fcb1777ef77fb61e62ac749973d4171caea0112794653e2bc24cb8a8f8e66309110e040a2bdcffc1c267d94eb390bd4b59d26748e178824d86"
                        >
                            <div id="grid_options" data-name="grid_options" msguid="1673932856506%201987465465818" class="grid_options posabs h100 flex dN flexS justifySB p10">
                                <div id="user_image" data-uid="60016800367_1673932856466" data-chid="CT_1280427390976451600_60016673028" data-action="user_details" class="ml-list-img flexM" title="Sofia D Shyam">
                                    <div msguid="undefined" purpose="sender" sender="60016800367" nname="undefined" class="sender ellips floatl">
                                        <div class="chtimg floatl posrel"><img elemtype="user" hover="true" uid="60016800367" src="https://contacts.zoho.in/file?ID=60016800367&amp;exp=6000&amp;t=user&amp;fs=thumb" class="cur" /></div>
                                        <span elemtype="user" hover="true" uid="60016800367" class="zctxtseln cur">undefined</span>
                                    </div>
                                </div>
                                <div id="att_actions" class="flexC ml-icon_dom" msguid="1673932856506%201987465465818" uid="60016800367_1673932856466" data-chid="CT_1280427390976451600_60016673028">
                                    <div
                                        id="download_icon"
                                        documentclick="attdownload"
                                        data-action="download_attachment"
                                        title="Download"
                                        data-chid="CT_1280427390976451600_60016673028"
                                        data-uid="60016800367_1673932856466"
                                        class="zcimg-actn-btn p5 mL8 curP"
                                    >
                                        <em class="zcf-download">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                            </svg>
                                        </em>
                                    </div>
                                    <div
                                        id="dropdown_icon_60016800367_1673932856466"
                                        data-type="grid"
                                        data-action="show_drpdwn_options"
                                        title="More"
                                        msguid="1673932856506%201987465465818"
                                        data-chid="CT_1280427390976451600_60016673028"
                                        data-uid="60016800367_1673932856466"
                                        class="zcimg-actn-btn p5 mL8 curP textC ml-drpdwm_menu"
                                    >
                                        <em class="zcf-more">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                            </svg>
                                        </em>
                                    </div>
                                </div>
                            </div>
                            <div data-name="forward_selection" data-uid="60016800367_1673932856466" msguid="1673932856506%201987465465818" class="dN posa h100 w100 mT5" data-action="selFrwdItem">
                                <label id="selItem" uid="60016800367_1673932856466" class="w100 flexIC curP">
                                    <div class="zcl-checkbox w100"><input id="frwdmsginfo_60016800367_1673932856466" data-name="frwrd_input" type="checkbox" data-uid="60016800367_1673932856466" /><span class="zcf-tick flexM"></span></div>
                                </label>
                            </div>
                            <div id="img_dom">
                                <img
                                    previewelem=""
                                    data-action="open_attachment"
                                    id="imgpreview"
                                    data-uid="60016800367_1673932856466"
                                    msguid="1673932856506%201987465465818"
                                    sender="Sofia D Shyam"
                                    hasthumbnail="true"
                                    previewfilesrc="https://download-accl.zoho.in/webdownload?x-service=CLIQ&amp;event-id=ad4ea84b256b25fcb1777ef77fb61e62ac749973d4171caea0112794653e2bc24cb8a8f8e66309110e040a2bdcffc1c267d94eb390bd4b59d26748e178824d86"
                                    filetype="jpg"
                                    filesrc="https://download-accl.zoho.in/webdownload?x-service=CLIQ&amp;event-id=ad4ea84b256b25fcb1777ef77fb61e62ac749973d4171caea0112794653e2bc24cb8a8f8e66309110e040a2bdcffc1c267d94eb390bd4b59d26748e178824d86"
                                    isv1="true"
                                    chid="CT_1280427390976451600_60016673028"
                                    contenttype="image/jpeg"
                                    fname="Yellow_Happy_Party_Birthday_Poster__1_.jpg"
                                    src="https://download-accl.zoho.in/webdownload?x-service=CLIQ&amp;event-id=ad4ea84b256b25fcb1777ef77fb61e62ac749973d4171caea0112794653e2bc24cb8a8f8e66309110e040a2bdcffc1c267d94eb390bd4b59d26748e178824d86&amp;x-cli-msg=%7B%22thumbnail%22%3Atrue%7D"
                                    rel="preload"
                                    class="ml-image-item"
                                    style={{ animation: "1s ease 0s 1 normal none running fadein" }}
                                />
                            </div>
                            <span id="empty_thumb" data-name="empty_dom" class="dN ml-emptygrid-item flexM p12"><span class="dN ml-file-default ellips">jpg</span></span>
                            <div id="details_footer_60016800367_1673932856466" class="fshrink pT12 pB10 pR12 pL12 curP dN">
                                <div class="flexC mB5 font14">
                                    <em class="zcf-default-img ml-filename mR8 font13"></em>
                                    <div class="ellips">Yellow_Happy_Party_Birthday_Poster__1_.jpg</div>
                                </div>
                                <div class="font12 ml-filesize">250 KB</div>
                            </div>
                        </div>
                    </div>
                    <div id="grid_item_60016681512_1673756219551" data-action="open_attachment" class="ml-grid-item curP posrel">
                        <div
                            data-name="item_cont"
                            class="h100 w100 posrel zhshare-src"
                            data-zhshare-src-meta='{"id":"ad4ea84b256b25fcb1777ef77fb61e62489ffa6da8c6f654bdbfd1a7dca4b056d5e800c1d1a0ef1f52c460e7c580a48e67d94eb390bd4b59d26748e178824d86","size":"329604"}'
                            data-zhshare-src-fname="image15-01-2023_09_46_55_78.PNG"
                            chid="CT_1280427390976451600_60016673028"
                            mtype="20"
                            uid="60016681512_1673756219551"
                            fname="image15-01-2023_09_46_55_78.PNG"
                            fsize="322 KB"
                            msguid="1673756219577%201974403926545"
                            fsender="60016681512"
                            msgtime="1673756219551"
                            senttime="1673756219551"
                            bytefilesize="{{file_size}}"
                            fsendername="Mahalakshmi C"
                            fcomment=""
                            isv1="true"
                            hasthumbnail="true"
                            contenttype="image/jpeg"
                            url="ad4ea84b256b25fcb1777ef77fb61e62489ffa6da8c6f654bdbfd1a7dca4b056d5e800c1d1a0ef1f52c460e7c580a48e67d94eb390bd4b59d26748e178824d86"
                            preview_url="ad4ea84b256b25fcb1777ef77fb61e62489ffa6da8c6f654bdbfd1a7dca4b056d5e800c1d1a0ef1f52c460e7c580a48e67d94eb390bd4b59d26748e178824d86"
                        >
                            <div id="grid_options" data-name="grid_options" msguid="1673756219577%201974403926545" class="grid_options posabs h100 flex dN flexS justifySB p10">
                                <div id="user_image" data-uid="60016681512_1673756219551" data-chid="CT_1280427390976451600_60016673028" title="Mahalakshmi C" data-action="user_details" class="ml-list-img flexM">
                                    <div msguid="undefined" purpose="sender" sender="60016681512" nname="Mahalakshmi C" class="sender ellips floatl">
                                        <div class="chtimg floatl posrel"><img elemtype="user" hover="true" uid="60016681512" src="https://contacts.zoho.in/file?ID=60016681512&amp;exp=6000&amp;t=user&amp;fs=thumb" class="cur" /></div>
                                        <span elemtype="user" hover="true" uid="60016681512" class="zctxtseln cur">Mahalakshmi C</span>
                                    </div>
                                </div>
                                <div id="att_actions" class="flexC ml-icon_dom" msguid="1673756219577%201974403926545" uid="60016681512_1673756219551" data-chid="CT_1280427390976451600_60016673028">
                                    <div
                                        id="download_icon"
                                        documentclick="attdownload"
                                        data-action="download_attachment"
                                        title="Download"
                                        data-chid="CT_1280427390976451600_60016673028"
                                        data-uid="60016681512_1673756219551"
                                        class="zcimg-actn-btn p5 mL8 curP"
                                    >
                                        <em class="zcf-download"></em>
                                    </div>
                                    <div
                                        id="dropdown_icon_60016681512_1673756219551"
                                        data-type="grid"
                                        data-action="show_drpdwn_options"
                                        title="More"
                                        msguid="1673756219577%201974403926545"
                                        data-chid="CT_1280427390976451600_60016673028"
                                        data-uid="60016681512_1673756219551"
                                        class="zcimg-actn-btn p5 mL8 curP textC ml-drpdwm_menu"
                                    >
                                        <em class="zcf-more"></em>
                                    </div>
                                </div>
                            </div>
                            <div data-name="forward_selection" data-uid="60016681512_1673756219551" msguid="1673756219577%201974403926545" class="dN posa h100 w100 mT5" data-action="selFrwdItem">
                                <label id="selItem" uid="60016681512_1673756219551" class="w100 flexIC curP">
                                    <div class="zcl-checkbox w100"><input id="frwdmsginfo_60016681512_1673756219551" data-name="frwrd_input" type="checkbox" data-uid="60016681512_1673756219551" /><span class="zcf-tick flexM"></span></div>
                                </label>
                            </div>
                            <div id="img_dom">
                                <img
                                    previewelem=""
                                    data-action="open_attachment"
                                    id="imgpreview"
                                    data-uid="60016681512_1673756219551"
                                    msguid="1673756219577%201974403926545"
                                    sender="Mahalakshmi C"
                                    hasthumbnail="true"
                                    previewfilesrc="https://download-accl.zoho.in/webdownload?x-service=CLIQ&amp;event-id=ad4ea84b256b25fcb1777ef77fb61e62489ffa6da8c6f654bdbfd1a7dca4b056d5e800c1d1a0ef1f52c460e7c580a48e67d94eb390bd4b59d26748e178824d86"
                                    filetype="PNG"
                                    filesrc="https://download-accl.zoho.in/webdownload?x-service=CLIQ&amp;event-id=ad4ea84b256b25fcb1777ef77fb61e62489ffa6da8c6f654bdbfd1a7dca4b056d5e800c1d1a0ef1f52c460e7c580a48e67d94eb390bd4b59d26748e178824d86"
                                    isv1="true"
                                    chid="CT_1280427390976451600_60016673028"
                                    contenttype="image/jpeg"
                                    fname="image15-01-2023_09_46_55_78.PNG"
                                    src="https://download-accl.zoho.in/webdownload?x-service=CLIQ&amp;event-id=ad4ea84b256b25fcb1777ef77fb61e62489ffa6da8c6f654bdbfd1a7dca4b056d5e800c1d1a0ef1f52c460e7c580a48e67d94eb390bd4b59d26748e178824d86&amp;x-cli-msg=%7B%22thumbnail%22%3Atrue%7D"
                                    rel="preload"
                                    class="ml-image-item"
                                    style={{ animation: "1s ease 0s 1 normal none running fadein" }}
                                />
                            </div>
                            <span id="empty_thumb" data-name="empty_dom" class="dN ml-emptygrid-item flexM p12"><span class="dN ml-file-default ellips">PNG</span></span>
                            <div id="details_footer_60016681512_1673756219551" class="fshrink pT12 pB10 pR12 pL12 curP dN">
                                <div class="flexC mB5 font14">
                                    <em class="zcf-default-img ml-filename mR8 font13"></em>
                                    <div class="ellips">image15-01-2023_09_46_55_78.PNG</div>
                                </div>
                                <div class="font12 ml-filesize">322 KB</div>
                            </div>
                        </div>
                    </div>
                    <div id="grid_item_60016688891_1673753808432" data-action="open_attachment" class="ml-grid-item curP posrel">
                        <div
                            data-name="item_cont"
                            class="h100 w100 posrel zhshare-src"
                            data-zhshare-src-meta='{"id":"ad4ea84b256b25fcb1777ef77fb61e62117d0c0a640a48f1096b8eeb7047afe73b32d9b05ebcdfbca2740527fde8730367d94eb390bd4b59d26748e178824d86","size":"819750"}'
                            data-zhshare-src-fname="Copy_of_Well_Done-__5_.png"
                            chid="CT_1280427390976451600_60016673028"
                            mtype="20"
                            uid="60016688891_1673753808432"
                            fname="Copy_of_Well_Done-__5_.png"
                            fsize="801 KB"
                            msguid="1673753808450%201970106549371"
                            fsender="60016688891"
                            msgtime="1673753808432"
                            senttime="1673753808432"
                            bytefilesize="{{file_size}}"
                            fsendername="Karthikeyan Velumani"
                            fcomment="“As the Sun starts its journey towards the north, it makes all joyous moments of this year come to life. *Codingmart* wishing you and your family a very *Happy Pongal* .”"
                            isv1="true"
                            hasthumbnail="true"
                            contenttype="image/png"
                            url="ad4ea84b256b25fcb1777ef77fb61e62117d0c0a640a48f1096b8eeb7047afe73b32d9b05ebcdfbca2740527fde8730367d94eb390bd4b59d26748e178824d86"
                            preview_url="ad4ea84b256b25fcb1777ef77fb61e62117d0c0a640a48f1096b8eeb7047afe73b32d9b05ebcdfbca2740527fde8730367d94eb390bd4b59d26748e178824d86"
                        >
                            <div id="grid_options" data-name="grid_options" msguid="1673753808450%201970106549371" class="grid_options posabs h100 flex dN flexS justifySB p10">
                                <div id="user_image" data-uid="60016688891_1673753808432" data-chid="CT_1280427390976451600_60016673028" title="Karthikeyan Velumani" data-action="user_details" class="ml-list-img flexM">
                                    <div msguid="undefined" purpose="sender" sender="60016688891" nname="Karthikeyan Velumani" class="sender ellips floatl">
                                        <div class="chtimg floatl posrel"><img elemtype="user" hover="true" uid="60016688891" src="https://contacts.zoho.in/file?ID=60016688891&amp;exp=6000&amp;t=user&amp;fs=thumb" class="cur" /></div>
                                        <span elemtype="user" hover="true" uid="60016688891" class="zctxtseln cur">Karthikeyan Velumani</span>
                                    </div>
                                </div>
                                <div id="att_actions" class="flexC ml-icon_dom" msguid="1673753808450%201970106549371" uid="60016688891_1673753808432" data-chid="CT_1280427390976451600_60016673028">
                                    <div
                                        id="download_icon"
                                        documentclick="attdownload"
                                        data-action="download_attachment"
                                        title="Download"
                                        data-chid="CT_1280427390976451600_60016673028"
                                        data-uid="60016688891_1673753808432"
                                        class="zcimg-actn-btn p5 mL8 curP"
                                    >
                                        <em class="zcf-download"></em>
                                    </div>
                                    <div
                                        id="dropdown_icon_60016688891_1673753808432"
                                        data-type="grid"
                                        data-action="show_drpdwn_options"
                                        title="More"
                                        msguid="1673753808450%201970106549371"
                                        data-chid="CT_1280427390976451600_60016673028"
                                        data-uid="60016688891_1673753808432"
                                        class="zcimg-actn-btn p5 mL8 curP textC ml-drpdwm_menu"
                                    >
                                        <em class="zcf-more"></em>
                                    </div>
                                </div>
                            </div>
                            <div data-name="forward_selection" data-uid="60016688891_1673753808432" msguid="1673753808450%201970106549371" class="dN posa h100 w100 mT5" data-action="selFrwdItem">
                                <label id="selItem" uid="60016688891_1673753808432" class="w100 flexIC curP">
                                    <div class="zcl-checkbox w100"><input id="frwdmsginfo_60016688891_1673753808432" data-name="frwrd_input" type="checkbox" data-uid="60016688891_1673753808432" /><span class="zcf-tick flexM"></span></div>
                                </label>
                            </div>
                            <div id="img_dom">
                                <img
                                    previewelem=""
                                    data-action="open_attachment"
                                    id="imgpreview"
                                    data-uid="60016688891_1673753808432"
                                    msguid="1673753808450%201970106549371"
                                    sender="Karthikeyan Velumani"
                                    hasthumbnail="true"
                                    previewfilesrc="https://download-accl.zoho.in/webdownload?x-service=CLIQ&amp;event-id=ad4ea84b256b25fcb1777ef77fb61e62117d0c0a640a48f1096b8eeb7047afe73b32d9b05ebcdfbca2740527fde8730367d94eb390bd4b59d26748e178824d86"
                                    filetype="png"
                                    filesrc="https://download-accl.zoho.in/webdownload?x-service=CLIQ&amp;event-id=ad4ea84b256b25fcb1777ef77fb61e62117d0c0a640a48f1096b8eeb7047afe73b32d9b05ebcdfbca2740527fde8730367d94eb390bd4b59d26748e178824d86"
                                    isv1="true"
                                    chid="CT_1280427390976451600_60016673028"
                                    contenttype="image/png"
                                    fname="Copy_of_Well_Done-__5_.png"
                                    src="https://download-accl.zoho.in/webdownload?x-service=CLIQ&amp;event-id=ad4ea84b256b25fcb1777ef77fb61e62117d0c0a640a48f1096b8eeb7047afe73b32d9b05ebcdfbca2740527fde8730367d94eb390bd4b59d26748e178824d86&amp;x-cli-msg=%7B%22thumbnail%22%3Atrue%7D"
                                    rel="preload"
                                    class="ml-image-item"
                                    style={{ animation: "1s ease 0s 1 normal none running fadein" }}
                                />
                            </div>
                            <span id="empty_thumb" data-name="empty_dom" class="dN ml-emptygrid-item flexM p12"><span class="dN ml-file-default ellips">png</span></span>
                            <div id="details_footer_60016688891_1673753808432" class="fshrink pT12 pB10 pR12 pL12 curP dN">
                                <div class="flexC mB5 font14">
                                    <em class="zcf-default-img ml-filename mR8 font13"></em>
                                    <div class="ellips">Copy_of_Well_Done-__5_.png</div>
                                </div>
                                <div class="font12 ml-filesize">801 KB</div>
                            </div>
                        </div>
                    </div>
                    <div id="grid_item_60016681512_1673266833710" data-action="open_attachment" class="ml-grid-item curP posrel">
                        <div
                            data-name="item_cont"
                            class="h100 w100 posrel zhshare-src"
                            data-zhshare-src-meta='{"id":"ad4ea84b256b25fcb1777ef77fb61e6238c33411176832ea83ddd21fe95184e92e0c34b784c61b0b40b7f34436e28ec267d94eb390bd4b59d26748e178824d86","size":"350975"}'
                            data-zhshare-src-fname="image.png"
                            chid="CT_1280427390976451600_60016673028"
                            mtype="20"
                            uid="60016681512_1673266833710"
                            fname="image.png"
                            fsize="343 KB"
                            msguid="1673266833741%201939554801244"
                            fsender="60016681512"
                            msgtime="1673266833710"
                            senttime="1673266833710"
                            bytefilesize="{{file_size}}"
                            fsendername="Mahalakshmi C"
                            fcomment=""
                            isv1="true"
                            hasthumbnail="true"
                            contenttype="image/png"
                            url="ad4ea84b256b25fcb1777ef77fb61e6238c33411176832ea83ddd21fe95184e92e0c34b784c61b0b40b7f34436e28ec267d94eb390bd4b59d26748e178824d86"
                            preview_url="ad4ea84b256b25fcb1777ef77fb61e6238c33411176832ea83ddd21fe95184e92e0c34b784c61b0b40b7f34436e28ec267d94eb390bd4b59d26748e178824d86"
                        >
                            <div id="grid_options" data-name="grid_options" msguid="1673266833741%201939554801244" class="grid_options posabs h100 flex dN flexS justifySB p10">
                                <div id="user_image" data-uid="60016681512_1673266833710" data-chid="CT_1280427390976451600_60016673028" title="Mahalakshmi C" data-action="user_details" class="ml-list-img flexM">
                                    <div msguid="undefined" purpose="sender" sender="60016681512" nname="Mahalakshmi C" class="sender ellips floatl">
                                        <div class="chtimg floatl posrel"><img elemtype="user" hover="true" uid="60016681512" src="https://contacts.zoho.in/file?ID=60016681512&amp;exp=6000&amp;t=user&amp;fs=thumb" class="cur" /></div>
                                        <span elemtype="user" hover="true" uid="60016681512" class="zctxtseln cur">Mahalakshmi C</span>
                                    </div>
                                </div>
                                <div id="att_actions" class="flexC ml-icon_dom" msguid="1673266833741%201939554801244" uid="60016681512_1673266833710" data-chid="CT_1280427390976451600_60016673028">
                                    <div
                                        id="download_icon"
                                        documentclick="attdownload"
                                        data-action="download_attachment"
                                        title="Download"
                                        data-chid="CT_1280427390976451600_60016673028"
                                        data-uid="60016681512_1673266833710"
                                        class="zcimg-actn-btn p5 mL8 curP"
                                    >
                                        <em class="zcf-download"></em>
                                    </div>
                                    <div
                                        id="dropdown_icon_60016681512_1673266833710"
                                        data-type="grid"
                                        data-action="show_drpdwn_options"
                                        title="More"
                                        msguid="1673266833741%201939554801244"
                                        data-chid="CT_1280427390976451600_60016673028"
                                        data-uid="60016681512_1673266833710"
                                        class="zcimg-actn-btn p5 mL8 curP textC ml-drpdwm_menu"
                                    >
                                        <em class="zcf-more"></em>
                                    </div>
                                </div>
                            </div>
                            <div data-name="forward_selection" data-uid="60016681512_1673266833710" msguid="1673266833741%201939554801244" class="dN posa h100 w100 mT5" data-action="selFrwdItem">
                                <label id="selItem" uid="60016681512_1673266833710" class="w100 flexIC curP">
                                    <div class="zcl-checkbox w100"><input id="frwdmsginfo_60016681512_1673266833710" data-name="frwrd_input" type="checkbox" data-uid="60016681512_1673266833710" /><span class="zcf-tick flexM"></span></div>
                                </label>
                            </div>
                            <div id="img_dom">
                                <img
                                    previewelem=""
                                    data-action="open_attachment"
                                    id="imgpreview"
                                    data-uid="60016681512_1673266833710"
                                    msguid="1673266833741%201939554801244"
                                    sender="Mahalakshmi C"
                                    hasthumbnail="true"
                                    previewfilesrc="https://download-accl.zoho.in/webdownload?x-service=CLIQ&amp;event-id=ad4ea84b256b25fcb1777ef77fb61e6238c33411176832ea83ddd21fe95184e92e0c34b784c61b0b40b7f34436e28ec267d94eb390bd4b59d26748e178824d86"
                                    filetype="png"
                                    filesrc="https://download-accl.zoho.in/webdownload?x-service=CLIQ&amp;event-id=ad4ea84b256b25fcb1777ef77fb61e6238c33411176832ea83ddd21fe95184e92e0c34b784c61b0b40b7f34436e28ec267d94eb390bd4b59d26748e178824d86"
                                    isv1="true"
                                    chid="CT_1280427390976451600_60016673028"
                                    contenttype="image/png"
                                    fname="image.png"
                                    src="https://download-accl.zoho.in/webdownload?x-service=CLIQ&amp;event-id=ad4ea84b256b25fcb1777ef77fb61e6238c33411176832ea83ddd21fe95184e92e0c34b784c61b0b40b7f34436e28ec267d94eb390bd4b59d26748e178824d86&amp;x-cli-msg=%7B%22thumbnail%22%3Atrue%7D"
                                    rel="preload"
                                    class="ml-image-item"
                                    style={{ animation: "1s ease 0s 1 normal none running fadein" }}
                                />
                            </div>
                            <span id="empty_thumb" data-name="empty_dom" class="dN ml-emptygrid-item flexM p12"><span class="dN ml-file-default ellips">png</span></span>
                            <div id="details_footer_60016681512_1673266833710" class="fshrink pT12 pB10 pR12 pL12 curP dN">
                                <div class="flexC mB5 font14">
                                    <em class="zcf-default-img ml-filename mR8 font13"></em>
                                    <div class="ellips">image.png</div>
                                </div>
                                <div class="font12 ml-filesize">343 KB</div>
                            </div>
                        </div>
                    </div>
                    <div id="grid_item_60016800367_1672983083697" data-action="open_attachment" class="ml-grid-item curP posrel">
                        <div
                            data-name="item_cont"
                            class="h100 w100 posrel zhshare-src"
                            data-zhshare-src-meta='{"id":"ad4ea84b256b25fcb1777ef77fb61e623952d562df1e86aec63366a6dd6981d7c20403cbb0b8cc9e70afce165d54e92a67d94eb390bd4b59d26748e178824d86","size":"337431"}'
                            data-zhshare-src-fname="Yellow_Happy_Party_Birthday_Poster.jpg"
                            chid="CT_1280427390976451600_60016673028"
                            mtype="20"
                            uid="60016800367_1672983083697"
                            fname="Yellow_Happy_Party_Birthday_Poster.jpg"
                            fsize="330 KB"
                            msguid="1672983083722%201926386151781"
                            fsender="60016800367"
                            msgtime="1672983083697"
                            senttime="1672983083697"
                            bytefilesize="{{file_size}}"
                            fsendername="Sofia D Shyam"
                            fcomment="@Subramanian N"
                            isv1="true"
                            hasthumbnail="true"
                            contenttype="image/jpeg"
                            url="ad4ea84b256b25fcb1777ef77fb61e623952d562df1e86aec63366a6dd6981d7c20403cbb0b8cc9e70afce165d54e92a67d94eb390bd4b59d26748e178824d86"
                            preview_url="ad4ea84b256b25fcb1777ef77fb61e623952d562df1e86aec63366a6dd6981d7c20403cbb0b8cc9e70afce165d54e92a67d94eb390bd4b59d26748e178824d86"
                        >
                            <div id="grid_options" data-name="grid_options" msguid="1672983083722%201926386151781" class="grid_options posabs h100 flex dN flexS justifySB p10">
                                <div id="user_image" data-uid="60016800367_1672983083697" data-chid="CT_1280427390976451600_60016673028" title="Sofia D Shyam" data-action="user_details" class="ml-list-img flexM">
                                    <div msguid="undefined" purpose="sender" sender="60016800367" nname="undefined" class="sender ellips floatl">
                                        <div class="chtimg floatl posrel"><img elemtype="user" hover="true" uid="60016800367" src="https://contacts.zoho.in/file?ID=60016800367&amp;exp=6000&amp;t=user&amp;fs=thumb" class="cur" /></div>
                                        <span elemtype="user" hover="true" uid="60016800367" class="zctxtseln cur">undefined</span>
                                    </div>
                                </div>
                                <div id="att_actions" class="flexC ml-icon_dom" msguid="1672983083722%201926386151781" uid="60016800367_1672983083697" data-chid="CT_1280427390976451600_60016673028">
                                    <div
                                        id="download_icon"
                                        documentclick="attdownload"
                                        data-action="download_attachment"
                                        title="Download"
                                        data-chid="CT_1280427390976451600_60016673028"
                                        data-uid="60016800367_1672983083697"
                                        class="zcimg-actn-btn p5 mL8 curP"
                                    >
                                        <em class="zcf-download"></em>
                                    </div>
                                    <div
                                        id="dropdown_icon_60016800367_1672983083697"
                                        data-type="grid"
                                        data-action="show_drpdwn_options"
                                        title="More"
                                        msguid="1672983083722%201926386151781"
                                        data-chid="CT_1280427390976451600_60016673028"
                                        data-uid="60016800367_1672983083697"
                                        class="zcimg-actn-btn p5 mL8 curP textC ml-drpdwm_menu"
                                    >
                                        <em class="zcf-more"></em>
                                    </div>
                                </div>
                            </div>
                            <div data-name="forward_selection" data-uid="60016800367_1672983083697" msguid="1672983083722%201926386151781" class="dN posa h100 w100 mT5" data-action="selFrwdItem">
                                <label id="selItem" uid="60016800367_1672983083697" class="w100 flexIC curP">
                                    <div class="zcl-checkbox w100"><input id="frwdmsginfo_60016800367_1672983083697" data-name="frwrd_input" type="checkbox" data-uid="60016800367_1672983083697" /><span class="zcf-tick flexM"></span></div>
                                </label>
                            </div>
                            <div id="img_dom">
                                <img
                                    previewelem=""
                                    data-action="open_attachment"
                                    id="imgpreview"
                                    data-uid="60016800367_1672983083697"
                                    msguid="1672983083722%201926386151781"
                                    sender="Sofia D Shyam"
                                    hasthumbnail="true"
                                    previewfilesrc="https://download-accl.zoho.in/webdownload?x-service=CLIQ&amp;event-id=ad4ea84b256b25fcb1777ef77fb61e623952d562df1e86aec63366a6dd6981d7c20403cbb0b8cc9e70afce165d54e92a67d94eb390bd4b59d26748e178824d86"
                                    filetype="jpg"
                                    filesrc="https://download-accl.zoho.in/webdownload?x-service=CLIQ&amp;event-id=ad4ea84b256b25fcb1777ef77fb61e623952d562df1e86aec63366a6dd6981d7c20403cbb0b8cc9e70afce165d54e92a67d94eb390bd4b59d26748e178824d86"
                                    isv1="true"
                                    chid="CT_1280427390976451600_60016673028"
                                    contenttype="image/jpeg"
                                    fname="Yellow_Happy_Party_Birthday_Poster.jpg"
                                    src="https://download-accl.zoho.in/webdownload?x-service=CLIQ&amp;event-id=ad4ea84b256b25fcb1777ef77fb61e623952d562df1e86aec63366a6dd6981d7c20403cbb0b8cc9e70afce165d54e92a67d94eb390bd4b59d26748e178824d86&amp;x-cli-msg=%7B%22thumbnail%22%3Atrue%7D"
                                    rel="preload"
                                    class="ml-image-item"
                                    style={{ animation: "1s ease 0s 1 normal none running fadein" }}
                                />
                            </div>
                            <span id="empty_thumb" data-name="empty_dom" class="dN ml-emptygrid-item flexM p12"><span class="dN ml-file-default ellips">jpg</span></span>
                            <div id="details_footer_60016800367_1672983083697" class="fshrink pT12 pB10 pR12 pL12 curP dN">
                                <div class="flexC mB5 font14">
                                    <em class="zcf-default-img ml-filename mR8 font13"></em>
                                    <div class="ellips">Yellow_Happy_Party_Birthday_Poster.jpg</div>
                                </div>
                                <div class="font12 ml-filesize">330 KB</div>
                            </div>
                        </div>
                    </div>
                    <div id="grid_item_60016681512_1672905855064" data-action="open_attachment" class="ml-grid-item curP posrel">
                        <div
                            data-name="item_cont"
                            class="h100 w100 posrel zhshare-src"
                            data-zhshare-src-meta='{"id":"ad4ea84b256b25fcb1777ef77fb61e6299393809151f64409a27508653e72a1cfb59a1e39c44969932caff2b73b9624967d94eb390bd4b59d26748e178824d86","size":"93643"}'
                            data-zhshare-src-fname="Saravana_Kumar_V.jpg"
                            chid="CT_1280427390976451600_60016673028"
                            mtype="20"
                            uid="60016681512_1672905855064"
                            fname="Saravana_Kumar_V.jpg"
                            fsize="91 KB"
                            msguid="1672905855124%201922013954508"
                            fsender="60016681512"
                            msgtime="1672905855064"
                            senttime="1672905855064"
                            bytefilesize="{{file_size}}"
                            fsendername="Mahalakshmi C"
                            fcomment="Congratulations  👏 @Saravana V"
                            isv1="true"
                            hasthumbnail="true"
                            contenttype="image/jpeg"
                            url="ad4ea84b256b25fcb1777ef77fb61e6299393809151f64409a27508653e72a1cfb59a1e39c44969932caff2b73b9624967d94eb390bd4b59d26748e178824d86"
                            preview_url="ad4ea84b256b25fcb1777ef77fb61e6299393809151f64409a27508653e72a1cfb59a1e39c44969932caff2b73b9624967d94eb390bd4b59d26748e178824d86"
                        >
                            <div id="grid_options" data-name="grid_options" msguid="1672905855124%201922013954508" class="grid_options posabs h100 flex dN flexS justifySB p10">
                                <div id="user_image" data-uid="60016681512_1672905855064" data-chid="CT_1280427390976451600_60016673028" title="Mahalakshmi C" data-action="user_details" class="ml-list-img flexM">
                                    <div msguid="undefined" purpose="sender" sender="60016681512" nname="Mahalakshmi C" class="sender ellips floatl">
                                        <div class="chtimg floatl posrel"><img elemtype="user" hover="true" uid="60016681512" src="https://contacts.zoho.in/file?ID=60016681512&amp;exp=6000&amp;t=user&amp;fs=thumb" class="cur" /></div>
                                        <span elemtype="user" hover="true" uid="60016681512" class="zctxtseln cur">Mahalakshmi C</span>
                                    </div>
                                </div>
                                <div id="att_actions" class="flexC ml-icon_dom" msguid="1672905855124%201922013954508" uid="60016681512_1672905855064" data-chid="CT_1280427390976451600_60016673028">
                                    <div
                                        id="download_icon"
                                        documentclick="attdownload"
                                        data-action="download_attachment"
                                        title="Download"
                                        data-chid="CT_1280427390976451600_60016673028"
                                        data-uid="60016681512_1672905855064"
                                        class="zcimg-actn-btn p5 mL8 curP"
                                    >
                                        <em class="zcf-download"></em>
                                    </div>
                                    <div
                                        id="dropdown_icon_60016681512_1672905855064"
                                        data-type="grid"
                                        data-action="show_drpdwn_options"
                                        title="More"
                                        msguid="1672905855124%201922013954508"
                                        data-chid="CT_1280427390976451600_60016673028"
                                        data-uid="60016681512_1672905855064"
                                        class="zcimg-actn-btn p5 mL8 curP textC ml-drpdwm_menu"
                                    >
                                        <em class="zcf-more"></em>
                                    </div>
                                </div>
                            </div>
                            <div data-name="forward_selection" data-uid="60016681512_1672905855064" msguid="1672905855124%201922013954508" class="dN posa h100 w100 mT5" data-action="selFrwdItem">
                                <label id="selItem" uid="60016681512_1672905855064" class="w100 flexIC curP">
                                    <div class="zcl-checkbox w100"><input id="frwdmsginfo_60016681512_1672905855064" data-name="frwrd_input" type="checkbox" data-uid="60016681512_1672905855064" /><span class="zcf-tick flexM"></span></div>
                                </label>
                            </div>
                            <div id="img_dom">
                                <img
                                    previewelem=""
                                    data-action="open_attachment"
                                    id="imgpreview"
                                    data-uid="60016681512_1672905855064"
                                    msguid="1672905855124%201922013954508"
                                    sender="Mahalakshmi C"
                                    hasthumbnail="true"
                                    previewfilesrc="https://download-accl.zoho.in/webdownload?x-service=CLIQ&amp;event-id=ad4ea84b256b25fcb1777ef77fb61e6299393809151f64409a27508653e72a1cfb59a1e39c44969932caff2b73b9624967d94eb390bd4b59d26748e178824d86"
                                    filetype="jpg"
                                    filesrc="https://download-accl.zoho.in/webdownload?x-service=CLIQ&amp;event-id=ad4ea84b256b25fcb1777ef77fb61e6299393809151f64409a27508653e72a1cfb59a1e39c44969932caff2b73b9624967d94eb390bd4b59d26748e178824d86"
                                    isv1="true"
                                    chid="CT_1280427390976451600_60016673028"
                                    contenttype="image/jpeg"
                                    fname="Saravana_Kumar_V.jpg"
                                    src="https://download-accl.zoho.in/webdownload?x-service=CLIQ&amp;event-id=ad4ea84b256b25fcb1777ef77fb61e6299393809151f64409a27508653e72a1cfb59a1e39c44969932caff2b73b9624967d94eb390bd4b59d26748e178824d86&amp;x-cli-msg=%7B%22thumbnail%22%3Atrue%7D"
                                    rel="preload"
                                    class="ml-image-item"
                                    style={{ animation: "1s ease 0s 1 normal none running fadein" }}
                                />
                            </div>
                            <span id="empty_thumb" data-name="empty_dom" class="dN ml-emptygrid-item flexM p12"><span class="dN ml-file-default ellips">jpg</span></span>
                            <div id="details_footer_60016681512_1672905855064" class="fshrink pT12 pB10 pR12 pL12 curP dN">
                                <div class="flexC mB5 font14">
                                    <em class="zcf-default-img ml-filename mR8 font13"></em>
                                    <div class="ellips">Saravana_Kumar_V.jpg</div>
                                </div>
                                <div class="font12 ml-filesize">91 KB</div>
                            </div>
                        </div>
                    </div>
                    <div id="grid_item_60016681512_1672541350500" data-action="open_attachment" class="ml-grid-item curP posrel">
                        <div
                            data-name="item_cont"
                            class="h100 w100 posrel zhshare-src"
                            data-zhshare-src-meta='{"id":"ad4ea84b256b25fcb1777ef77fb61e62a0ac8e0d492daedd3a4d560851dff6935bcd7335e23d7d2f973b93769c0aa9e267d94eb390bd4b59d26748e178824d86","size":"250086"}'
                            data-zhshare-src-fname="image01-01-2023_08_19_07_68.PNG"
                            chid="CT_1280427390976451600_60016673028"
                            mtype="20"
                            uid="60016681512_1672541350500"
                            fname="image01-01-2023_08_19_07_68.PNG"
                            fsize="244 KB"
                            msguid="1672541350526%201904469581701"
                            fsender="60016681512"
                            msgtime="1672541350500"
                            senttime="1672541350500"
                            bytefilesize="{{file_size}}"
                            fsendername="Mahalakshmi C"
                            fcomment=""
                            isv1="true"
                            hasthumbnail="true"
                            contenttype="image/jpeg"
                            url="ad4ea84b256b25fcb1777ef77fb61e62a0ac8e0d492daedd3a4d560851dff6935bcd7335e23d7d2f973b93769c0aa9e267d94eb390bd4b59d26748e178824d86"
                            preview_url="ad4ea84b256b25fcb1777ef77fb61e62a0ac8e0d492daedd3a4d560851dff6935bcd7335e23d7d2f973b93769c0aa9e267d94eb390bd4b59d26748e178824d86"
                        >
                            <div id="grid_options" data-name="grid_options" msguid="1672541350526%201904469581701" class="grid_options posabs h100 flex dN flexS justifySB p10">
                                <div id="user_image" data-uid="60016681512_1672541350500" data-chid="CT_1280427390976451600_60016673028" title="Mahalakshmi C" data-action="user_details" class="ml-list-img flexM">
                                    <div msguid="undefined" purpose="sender" sender="60016681512" nname="Mahalakshmi C" class="sender ellips floatl">
                                        <div class="chtimg floatl posrel"><img elemtype="user" hover="true" uid="60016681512" src="https://contacts.zoho.in/file?ID=60016681512&amp;exp=6000&amp;t=user&amp;fs=thumb" class="cur" /></div>
                                        <span elemtype="user" hover="true" uid="60016681512" class="zctxtseln cur">Mahalakshmi C</span>
                                    </div>
                                </div>
                                <div id="att_actions" class="flexC ml-icon_dom" msguid="1672541350526%201904469581701" uid="60016681512_1672541350500" data-chid="CT_1280427390976451600_60016673028">
                                    <div
                                        id="download_icon"
                                        documentclick="attdownload"
                                        data-action="download_attachment"
                                        title="Download"
                                        data-chid="CT_1280427390976451600_60016673028"
                                        data-uid="60016681512_1672541350500"
                                        class="zcimg-actn-btn p5 mL8 curP"
                                    >
                                        <em class="zcf-download"></em>
                                    </div>
                                    <div
                                        id="dropdown_icon_60016681512_1672541350500"
                                        data-type="grid"
                                        data-action="show_drpdwn_options"
                                        title="More"
                                        msguid="1672541350526%201904469581701"
                                        data-chid="CT_1280427390976451600_60016673028"
                                        data-uid="60016681512_1672541350500"
                                        class="zcimg-actn-btn p5 mL8 curP textC ml-drpdwm_menu"
                                    >
                                        <em class="zcf-more"></em>
                                    </div>
                                </div>
                            </div>
                            <div data-name="forward_selection" data-uid="60016681512_1672541350500" msguid="1672541350526%201904469581701" class="dN posa h100 w100 mT5" data-action="selFrwdItem">
                                <label id="selItem" uid="60016681512_1672541350500" class="w100 flexIC curP">
                                    <div class="zcl-checkbox w100"><input id="frwdmsginfo_60016681512_1672541350500" data-name="frwrd_input" type="checkbox" data-uid="60016681512_1672541350500" /><span class="zcf-tick flexM"></span></div>
                                </label>
                            </div>
                            <div id="img_dom">
                                <img
                                    previewelem=""
                                    data-action="open_attachment"
                                    id="imgpreview"
                                    data-uid="60016681512_1672541350500"
                                    msguid="1672541350526%201904469581701"
                                    sender="Mahalakshmi C"
                                    hasthumbnail="true"
                                    previewfilesrc="https://download-accl.zoho.in/webdownload?x-service=CLIQ&amp;event-id=ad4ea84b256b25fcb1777ef77fb61e62a0ac8e0d492daedd3a4d560851dff6935bcd7335e23d7d2f973b93769c0aa9e267d94eb390bd4b59d26748e178824d86"
                                    filetype="PNG"
                                    filesrc="https://download-accl.zoho.in/webdownload?x-service=CLIQ&amp;event-id=ad4ea84b256b25fcb1777ef77fb61e62a0ac8e0d492daedd3a4d560851dff6935bcd7335e23d7d2f973b93769c0aa9e267d94eb390bd4b59d26748e178824d86"
                                    isv1="true"
                                    chid="CT_1280427390976451600_60016673028"
                                    contenttype="image/jpeg"
                                    fname="image01-01-2023_08_19_07_68.PNG"
                                    src="https://download-accl.zoho.in/webdownload?x-service=CLIQ&amp;event-id=ad4ea84b256b25fcb1777ef77fb61e62a0ac8e0d492daedd3a4d560851dff6935bcd7335e23d7d2f973b93769c0aa9e267d94eb390bd4b59d26748e178824d86&amp;x-cli-msg=%7B%22thumbnail%22%3Atrue%7D"
                                    rel="preload"
                                    class="ml-image-item"
                                    style={{ animation: "1s ease 0s 1 normal none running fadein" }}
                                />
                            </div>
                            <span id="empty_thumb" data-name="empty_dom" class="dN ml-emptygrid-item flexM p12"><span class="dN ml-file-default ellips">PNG</span></span>
                            <div id="details_footer_60016681512_1672541350500" class="fshrink pT12 pB10 pR12 pL12 curP dN">
                                <div class="flexC mB5 font14">
                                    <em class="zcf-default-img ml-filename mR8 font13"></em>
                                    <div class="ellips">image01-01-2023_08_19_07_68.PNG</div>
                                </div>
                                <div class="font12 ml-filesize">244 KB</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    </>;
};
