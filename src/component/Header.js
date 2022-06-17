import React from 'react';


class Header extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
        <header className="header">
            <div className="header__content _container">
                <div className="header__logo">Convert.com</div>
                <div className="header__header">
                    <span className="header__t1">Перевод единиц веса и массы. Конвертер величин.</span>
                    <span className="header__t2">Килограммы и тонны, фунты и унции, караты и граммы и много другого.</span>
                </div>
            </div>
        </header>
    )
  }
}


export default Header;
