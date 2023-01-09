import React,{useEffect} from 'react';
import MenuBar from "../../components/MenuBar/MenuBar";
import MainContainer from '../../components/MainContainer.jsx/MainContainer';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../redux/slices/userSlice';
import { getProfile } from '../../api/authentication/user';
export default function AppContainer(){
    const user = useSelector((state)=>state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
const fetchUser = async () => {
      const userInfo = await getProfile();
      if (userInfo.status) {
        console.log(userInfo);
        dispatch(setUser(userInfo));
        navigate("/main");
      } else {
        // localStorage.removeItem("token");
        navigate("/signin");
      }
    }
    fetchUser();
    }
    )


        return <>
            <div style={{backgroundColor:"black"}}>
                <MenuBar></MenuBar>
                <MainContainer></MainContainer>
            </div>
        </>;
    
}