
import React from 'react';
import {Link, Outlet} from 'react-router-dom';


class Page__sidebar extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
        <div className="page__sidebar">
            <div className="page__t1">
                <span>Все измерения:</span>
            </div>
            <div className="page__t2">
                <span>Базовые</span>
                <ul>
                    <li>
                        <Link to="/">Вес, масса</Link>
                    </li>
                    <li>
                        <Link to="/long">Длинна, растояние</Link>
                    </li>
                    <li>
                        <Link to="/volume">Объём, вместимость</Link>
                    </li>
                    <li>
                        <Link to="/square">Площадь</Link>
                    </li>
                    <li>
                        <Link to="/speed">Скорость</Link>
                    </li>
                    <li>
                        <Link to="/temperature">Температура</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
  }
}

export default Page__sidebar ;