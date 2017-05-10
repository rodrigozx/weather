import React from 'react';
import {Sparklines, SparklinesLine} from 'react-sparklines';

//es un componente funcional... devuelve el resultado de la función como componente
export default (props) => {

    return (
      <div>
        <Sparklines height={130} width={180} data={props.data}>
            <SparklinesLine color={props.color} />
        </Sparklines>
      </div>
    );

}
