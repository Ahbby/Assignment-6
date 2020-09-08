import React, { Component } from 'react'
import axios from 'axios'

export class Cards extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             coronaVirus: []
        }
    }
     componentDidMount = () => {
         axios.get('https://corona.lmao.ninja/v2/countries/gh').then ((res) =>{
            
             this.setState({
                 coronaVirus: res.data,
             });

         }).catch((err) =>{
             console.log(err);
         })
     }
    render() {
        return (
            <div>
                <div className="header">
                    <div>
                        <p className="logo"> Ui </p>
                    </div>
                    <div className="text">
                        <p>PaSe Covid-19 Update</p>
                    </div>
                </div>
                <div className="dashboard">
                    <div className="cases">
                        <p className="para">
                             Cases <i className="fa fa-caret-up fa-lg" />
                        </p>
                         <span>{this.state.coronaVirus.cases}</span> 
                    </div>
                    <div className="cases">
                        <p className="para">
                            
                             Deaths <i className="fa fa-caret-up fa-lg" />
                        </p>
                        <span>{this.state.coronaVirus.deaths}</span>
                    </div>
                    <div className="cases">
                        <p className="para">
                            Active <i className="fa fa-caret-up fa-lg" />
                        </p>
                        <span>{this.state.coronaVirus.active}</span>
                    </div>
                    <div className="cases">
                        <p className="para">
                             Recovered <i className="fa fa-caret-down fa-lg" />
                        </p>
                        <span> {this.state.coronaVirus.recovered}</span>
                    </div>
                </div>


            </div>
        )
    }
}

export default Cards
