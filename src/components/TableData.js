import React, { Component } from "react"

export class TableData extends Component {
    render() {
        return (
            <div className="tip">
                <div className="tips">
                    <p>Health Tips</p>
                    <img src="image/health1pic.jpg" alt="health1pic.jpg" width={195} height="100px"/>
                </div>
                <div className="tips">
                    <p>News &amp; Updates</p>
                    <img src="image/covid-19.jpg" alt="UN-covid.jpg" width={195} height="100px"/>
                </div>
            </div>
        );
    }
}

export default TableData;
