import Carousel from "./Carousel";
import './Banner.css';
import { Typography } from "@mui/material";

function Banner(){
    return  <div className="banner" >

        <div className="tagLine">
            <Typography variant="h2" style={{fontWeight:"bold",fontFamily:"Montserrat"}} >
                Crypto Tracker
            </Typography>
        </div>

            <div className="tagLine">
            <Typography variant="subtitle2" style={{color:"darkGrey", fontFamily:"Montserrat", textTransform:"capitalize"}} >
                Get all the info regarding your favourate Crypto Currency
            </Typography>
        </div>

        <br/>

        <Carousel/>

        </div>
}

export default Banner;