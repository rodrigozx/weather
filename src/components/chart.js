import _ from 'lodash';
import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';


//Cálculo del promedio de cada gráfica... es la línea roja punteada..
function average(data){
    return _.round( _.sum(data)/data.length); //sumo todos los datos y los divido entre la cantidad.. luego los redondeo
}

//es un componente funcional... devuelve el resultado de la función como componente
export default (props) => {

    return (
      <div>
        <Sparklines svgHeight={100} svgWidth={180} data={props.data}>
            <SparklinesLine color={props.color} />
            {/*linea de referencia que es el promedio*/}
            <SparklinesReferenceLine type='avg' /> 
        </Sparklines>
        {/*número promedio*/}
        <div>{average(props.data)} {props.units}</div>
      </div>
    );

}
