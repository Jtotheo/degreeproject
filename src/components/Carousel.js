import React from 'react';
import Carousel from 'react-material-ui-carousel';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Paper, Button } from '@material-ui/core';
import climbing from './climbing.jpeg';


function Example(props)
{
    const items = [
        {
            name: "Klättring på Telefonplan",
            description: "Häng med och klättra på tisdag kl.18!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel
        autoPlay={false}
        navButtonsAlwaysInvisible={true}
        fullHeightHover={false}
        swipe={true}


        NextIcon={<NavigateNextIcon/>}
        PrevIcon={<NavigateBeforeIcon/>}
        >
               {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }

            
        </Carousel> 
    )
}

function Item(props)
{
    return (

        <div className="paperstyle" >
        <Paper
        elevation={100}
        style={{borderRadius: "50%", backgroundColor:"rgba(255,255,255,0)"}}

        
        >
            <h2>{props.item.name}</h2>
            <img src={climbing} alt="Logo" width="100%" />
            <p>{props.item.description}</p>
            
        </Paper>
        </div>
    )
}

export default Example;