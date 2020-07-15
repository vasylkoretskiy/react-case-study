import React from 'react';

 export default function DisplayMsg(props) {

    if(!props.hasOwnProperty('message')){
      return(<div className="message-comp" >Not Found</div>);
    } else  {
      return(<div className="message-comp">{props.message}</div>);
    }
}
