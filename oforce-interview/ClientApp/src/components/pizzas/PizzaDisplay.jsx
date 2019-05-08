import React from 'react';
import {Button} from 'reactstrap';

class PizzaDisplay extends React.PureComponent{

  componentDidMount(){
    console.log(this.props.pizza)
  }

  handleDelete=()=>{
    this.props.onDelete(this.props.id)
  }
    render(){
        return(
            <React.Fragment>
            <tr>
              <td className="">{this.props.pizza.name}</td>
              <td className="" id="toppingTable">
                {this.props.toppings?this.props.toppings.join(', '): "This Pizza Has No Toppings"}
              </td>
            <td>
              {this.props.getDate(this.props.pizza.dateCreated)}
            </td>
              <td className="toppingBtn">
                <div className="row justify-content-center">
                  <Button
                    outline
                    color="danger"
                    size="sm"
                    onClick={this.handleDelete}
                  >
                    Delete
                  </Button>
                  {/* <Button close aria-label="Cancel">
                    <span aria-hidden>&ndash;</span>
                  </Button> */}
                </div>
              </td>
            </tr>
          </React.Fragment>
        )
    }
}

export default PizzaDisplay;