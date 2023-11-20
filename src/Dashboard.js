import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Dashboard(){
const navigate=useNavigate();
    useEffect(()=>{
        const response=axios.post('http://localhost:9898/sessionCheck');
        console.log(response.data);
        if(response.data!=0){
            navigate('/');
        }
    })

    return (

        <h2>Dashboard</h2>

    )
}
export default Dashboard;