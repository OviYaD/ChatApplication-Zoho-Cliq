import React from 'react';
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";

export default function RemoteworkToggle() {

    const IOSSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
      ))(({ theme }) => ({
        width: 33,
        height: 18,
        padding: 0,
        "& .MuiSwitch-switchBase": {
          padding: 0,
          margin: 2,
          transitionDuration: "300ms",
          "&.Mui-checked": {
            transform: "translateX(16px)",
            color: "#2b2b2b",
            "& + .MuiSwitch-track": {
              backgroundColor: theme.palette.mode === "dark" ? "#464646" : "#1a8271",
              opacity: 1,
              border: 0
            },
            "&.Mui-disabled + .MuiSwitch-track": {
              opacity: 0.5
            }
          },
          "&.Mui-focusVisible .MuiSwitch-thumb": {
            color: "#33cf4d",
            border: "6px solid #fff"
          },
          "&.Mui-disabled .MuiSwitch-thumb": {
            color:
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[600]
          },
          "&.Mui-disabled + .MuiSwitch-track": {
            opacity: theme.palette.mode === "light" ? 0.7 : 0.3
          }
        },
        "& .MuiSwitch-thumb": {
          boxSizing: "border-box",
          width: 14,
          height: 14
        },
        "& .MuiSwitch-track": {
          borderRadius: 26 / 2,
          backgroundColor: theme.palette.mode === "light" ? "#464646" : "#3DC2AC",
          opacity: 1,
          transition: theme.transitions.create(["background-color"], {
            duration: 500
          })
        }
      }));
    return <>
        <div id="lhs_remote_work" elemtype="view_remote_work" purpose="viewRemoteWork" documentclick="view_remote_work" className="rw-lhs-tab justifySB flexC LHS-RW fshrink">
                        <div className="font16 fontB" >Remote Work</div>
                        <div id="lhs_remote_checkin_status" className="LHS-checkin-optn">
                            <div className="flexC LHS-RW-checkbox">
                                <div id="lhs_checkin_timer" className="mR8 clr-lp1 font11 dN">
                                00:09:01 Hrs
                                </div>
                                <FormControlLabel
                                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                              />
                                
                            </div>
                        </div>
                    </div>
    </>;
}