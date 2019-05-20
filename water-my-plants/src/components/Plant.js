import React from 'react';
import axios from 'axios';

class Plant extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            plant: null
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchPlant(id);
    }

    fetchPlant = id => {
        axios
            .get(``)
            .then(res => {
                this.setState(() = ({ plant: res.data }));
            })
            .catch(err => {
                console.err(err);
            })

    }

    render() {
        return (
            <div className="plant-wrapper">
              <PlantDetails plant={this.state.plant} />
            </div>
        )
    }
}

const PlantDetails(props) {
    const { plantName, dailyWaterTime, id } = props.plant;
    return(
        <div className="plant-card">
            <div classname="plant-name">
                Plant: {plantName}
            </div>
            <div className="water-time">
                Water Time: {dailyWaterTime}
            </div>
            <button onClick={() => props.deletePlant(id)}> X </button>
            <button onClick={() => props.editPlant(id)}> Edit Plant </button>
        </div>
    )
}

export default Plant;
