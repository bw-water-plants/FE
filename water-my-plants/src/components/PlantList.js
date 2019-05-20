import React from 'react';


class PlantList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            plants: []
        };
    }

    render() {
        return(
            <PlantsWrapper>
                {this.props.map(plant => (
                    <Plant key={plant.id} plant={plant} deletePlant={this.deletePlant} editPlant={this.editPlant} />
                ))}
            </PlantsWrapper>
        )
    }
}

export default PlantList;