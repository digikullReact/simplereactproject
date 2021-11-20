import React,{useEffect,useState} from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import useStore  from "../store";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  


const Seats = () => {
    const [seats,setSeats]=useState([]);
    const [booked,setBooked]=useState(false)
    const addBookedSeats =useStore(state => state.addBookedSeats)

    const bookSeat=(seatData)=>{
     
        addBookedSeats(seatData)
        /// MAke api call for update 
        axios.put(`/seats/${seatData.id}`,{booked:true}).then(data=>{
            setBooked(!booked);
        
            
        }).catch(err=>{
            console.log(err);
        })

}

    useEffect(() => {
        fetch("/api/seats")
          .then((response) => response.json())
          .then((json) => setSeats(json.seats))
      }, [booked])


    return (
        <div style={{marginTop:"200px",marginLeft:"200px"}}>

           

<Box sx={{ flexGrow: 1 }}>
<h1>Movie Booking Select Seats</h1>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Item>

              {
                  seats.map(ele=>(
                    <div  key={ele._id} onClick={()=>bookSeat(ele)}>
                    {
                        ele.disabled?<Chip  style={{padding:"5px",margin:"5px",cursor:"pointer"}} label="Disabled"  />:ele.booked?
                        <Chip style={{padding:"5px",cursor:"pointer",margin:"5px"}} label="Booked" color="primary" />:<Chip style={{padding:"5px",cursor:"pointer" ,margin:"5px"}} label="Not Booked" color="primary" variant="outlined" />



                    }

                   
                    </div>

                  ))

              }


       

          </Item>
          


        </Grid>
       
      
     
      </Grid>
    </Box>
         <button >
             Checkout Page
         </button>
        </div>
    )
}

export default Seats
