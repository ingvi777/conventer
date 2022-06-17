
import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Page__sidebar from '../fromMain/Page__sidebar';
import Major__converterLong from '../fromMain/Major__convertLong';
import Major__converterWeight from '../fromMain/Major__converterWeight';
import Major__converterVolume from '../fromMain/Major__converterVolume';

import Major__converterSquare from '../fromMain/Major__converterSquare';
import Major__converterSpeed from '../fromMain/Major__converterSpeed';
import Major__converterTemperature from '../fromMain/Major__converterTemperature';
import Not__found from '../fromMain/Not__found';




class Main extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
    return (
      <main className="page">
        <div className="page__container _container">
            <Router>

            <Page__sidebar />
                
                <div className="page__major major">
                    <div className="major__header_1">
                        <span>Мгновенный перевод единиц веса и массы.</span>
                    </div>
                    <div className="major__header_2">
                        <span>В этом конвертере представлены единицы, которые до сих пор сих пор используются в разных странах. Также в будущем функционал конвертера будет расширен.</span>
                    </div>
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route index element={<Major__converterWeight/>} />
                            <Route path="/long" element={<Major__converterLong />}/>
                            <Route path="/volume" element={<Major__converterVolume />}/>
                            <Route path="/square" element={<Major__converterSquare />}/>
                            <Route path="/speed" element={<Major__converterSpeed />}/>
                            <Route path="/temperature" element={<Major__converterTemperature />}/>
                            <Route path="*" element={<Not__found />}/>
                        </Routes>
                </div>

            </Router>
        </div>
    </main>
    )
  }
}

export default Main;