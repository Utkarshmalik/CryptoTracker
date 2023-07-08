import { useEffect, useState } from "react";
import { getTrendingCoins } from "../../api/coins";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";



function renderCoin(coin){

    let profit = coin.price_change_percentage_24h >=0;


    return <Link style={{textDecoration:"none",  display:"flex", flexDirection:"column", alignItems:"center"}} className="text-decoration-none" to={`/coins/${coin.id}`}>

    <div>
            <img src={coin.image} height="90"/>

    <div>
        <span>
                {coin.symbol}
        </span>

        &nbsp;

    <span>

        {profit && "+"}
        {coin.price_change_percentage_24h.toFixed(2)} %

    </span>

    </div>


    <div>
        {coin.symbol} {coin.current_price}
    </div>

    </div>

   
  

    </Link>

}

function getItems(coins){

    return coins.map((coin)=>renderCoin(coin))

}


function Carousel(){

    const [trendingCoins, setTrendingCoins] = useState([]);


    const fetchTrendingCoins = async ()=>{
        const data = await getTrendingCoins();
        console.log(data);
        setTrendingCoins(data);
    }

    useEffect(()=>{
        fetchTrendingCoins();
    },[])

    const items = getItems(trendingCoins);
    


    return (

        <div style={{ height:"50%", display:"flex", flexDirection:"row", alignItems:"center"}}>

            <AliceCarousel autoPlayInterval={1000} animationDuration={1500} autoPlay disableDotsControls disableButtonsControls mouseTracking items={items} />


        </div>

    )

}

export default Carousel;