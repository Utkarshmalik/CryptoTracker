import { useEffect, useState } from "react";
import { getAllCoints } from "../../api/coins";
import { Table, TableCell, TableHead, TableRow, ThemeProvider, Typography, createTheme } from "@mui/material";



function CoinsTable(){

        const [coins, setCoins] = useState([]);


    const fetchAllCoins = async ()=>{
        const data = await getAllCoints();
        console.log(data);
        setCoins(data);
    }

    useEffect(()=>{
        fetchAllCoins();
    },[])

    return (

        <ThemeProvider theme={createTheme}>

              <div className="tagLine">
            <Typography variant="h4" style={{fontWeight:"bold",fontFamily:"Montserrat"}} >
                Cryptocurrency Prices by Market Cap
            </Typography>
        </div>

        <div>

            <Table>

                <TableHead>
                    <TableRow>
                        <TableCell> Coin </TableCell>
                        <TableCell> Price </TableCell>
                        <TableCell> 24h Change </TableCell>
                        <TableCell> market Cap </TableCell>

                    </TableRow>
                </TableHead>

            </Table>

        </div>

        </ThemeProvider>
    
    )

}

export default CoinsTable;