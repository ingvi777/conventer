
import React from 'react';



class Footer extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
        <footer className="footer">
            <div className="footer__container _container">
                <div className="footer__text">
                    <span>Перевод единиц длины и расстояния. Конвертер величин.</span>
                    <span>Copyright © 2022 Кукотенко И. Е</span>
                </div>
            </div>
        </footer>
    )
  }
}


export default Footer;