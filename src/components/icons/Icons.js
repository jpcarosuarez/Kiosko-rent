import {GiChickenOven, RiBuilding4Line, GiPositionMarker, GiWineGlass} from 'react-icons/gi';
import {RiBuilding4Line, RiHotelBedLine, RiPlaneLine, RiReplyLine, RiBuilding3Line, RiStoreLine, RiGovernmentLine} from 'react-icons/ri';



function getCHickenOvenIcon(){
    return (<GiChickenOven></GiChickenOven>)
}

function getRiBuilding4Line(){
    return (<RiBuilding4Line></RiBuilding4Line>)
}

export function getIcon(icon){
    switch(icon)
    {
        case "GiChickenOven":
             return (getCHickenOvenIcon());
        case "RiBuilding4Line":
             return (getRiBuilding4Line());
    }
}