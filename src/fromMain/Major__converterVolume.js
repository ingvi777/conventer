
import React from 'react';
import volume from '../data/volume';


class Major__converterVolume extends React.Component{
  constructor(props){
    super(props);
    
    this.arr = volume.slice();

    this.state = {
        arr: this.arr,
        How__kilo: 0
    }

    this.handelChange = this.handelChange.bind();
    this.handelClick = this.handelClick;

  }

  handelClick = (e) => {
    
    this.arr.filter((item) => {
        item.value = "";
    })
    this.setState({ arr: this.arr }, ()=>{} );
    this.setState({ value: '' }, ()=>{});

  }

  handelChange = (e) => {

    this.setState({ name: e.target.name });
    this.setState({ value: e.target.value });

    let How__kilo = 0;

    
    this.state.arr.map((item)=>{
        if(item.name === e.target.name){
             How__kilo = (1 / Number(item.coeff)) * Number(e.target.value);

             this.setState( {"How__kilo": How__kilo }, () => {

                this.update();

            } );
        }
    });
  }

  update = () => {
    const a = this.state.arr.slice();
    
    a.map((item)=>{

        const number = Number(this.state.How__kilo) * Number(item.coeff);
        const numberRound = Math.round(number * 1000000) / 1000000;

        item.value = numberRound;

    });


    this.setState({ arr: a });
  }


  render(){
    return (
        <div className="major__converter converter">
            <div className="converter__header">
                <span>Метрическая система</span>
            </div>

            <div className="converter__bottom">
                <button 
                className="btn1" 
                type="button"
                onClick={this.handelClick}
                >&#215;&nbsp;oчистить</button>
                <button className="btn2" type="button">Посчитать</button>
            </div>
            <div className="converter__body">
                <div className="converter__left inputs">

                    {this.state.arr.slice(0, 6).map((item) =>

                        <div className="inputs__right"
                        key={'div__v' + item.key}
                        >
                            <span>{item.name} ({item.unit})</span>
                            <input type="text"
                            onChange={this.handelChange}
                            key={item.key}
                            value={this.state.name === item.name ? this.state.value : item.value}
                            name={item.name} />
                        </div>
                    )}

                </div>
                <div className="converter__right inputs">

                    {this.state.arr.slice(6, 12).map((item) =>

                        <div className="inputs__right"
                        key={'div__v' + item.key}
                        >
                            <span>{item.name} ({item.unit})</span>
                            <input type="text"
                            onChange={this.handelChange}
                            key={item.key}
                            value={this.state.name === item.name ? this.state.value : item.value}
                            name={item.name} />
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
  }
}

export default Major__converterVolume;