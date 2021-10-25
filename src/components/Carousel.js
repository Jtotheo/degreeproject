import React from 'react';
import Carousel from 'react-material-ui-carousel';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Paper, Button } from '@material-ui/core';
import climbing from './climbing.jpg';
import padel from './padel.jpg';
import wine from './wine.jpg';
import concert from './concert.jpg';



function Example(props)
{
    const items = [

        {
            name: "Klättring på Telefonplan",
            description: "Häng med och klättra på tisdag kl.18 i klätterhallen vid Telefonplan!",
            image: climbing,
            event: "Se event"
        },
        {
            name: "Konsert Amason",
            description: "Konsert med Amason på lördag kl.20. Har 1 biljett över!",
            image: concert,
            event: "Se event"
        },
        {
            name: "Padel i Gröndal",
            description: "Vi behöver två personer som vill spela padelmatch!",
            image: padel,
            event: "Se event"
        },
        {
            name: "Vinprovning i Solna",
            description: "Gillar du vin men vet inte hur man ska tänka? Inte jag heller! Prova vin med mig?",
            image: wine,
            event: "Se event"
        }
              
    ]

    return (
        <Carousel
        autoPlay={true}
        navButtonsAlwaysInvisible={true}
        fullHeightHover={false}
        swipe={true}


        NextIcon={<NavigateNextIcon/>}
        PrevIcon={<NavigateBeforeIcon/>}
        // IndicatorIcon={<Brightness1OutlinedIcon/>}
        indicatorIconButtonProps={{
        style: {
            padding: '3px',
     
        }
    }}
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
        style={{borderRadius: "10%", backgroundColor:"rgba(255,255,255, 0)"}}

        >

        <div className="textonimg">
            <h2>{props.item.name}</h2>
             <p>{props.item.description}</p>
             <a href>{props.item.event}</a>
        </div>
            <img src={props.item.image} alt="" width="100%" />

        </Paper>
        </div>
    )
}

export default Example;