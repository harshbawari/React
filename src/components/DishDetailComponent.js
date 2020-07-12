import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component {
  constructor(props) {
    super(props);

  }

  renderComments(comments) {
    if(comments != null) {
      const dispComments = comments.map((comm) => {
        return (
          //console.log(comm),
          <div>
            <p>{comm.comment}</p>
            <p>--{comm.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comm.date)))}</p>
          </div>
        );
      });

      return(
        <div>
          {dispComments}
        </div>
      );
    }
    else {
      return(
        <div></div>
      );
    }
  }

  render() {
    if(this.props.Dish != null) {
      return(
        <div className="d-md-flex">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg width="100%" src={this.props.Dish.image} alt={this.props.Dish.name} />
              <CardBody>
                <CardTitle>{this.props.Dish.name}</CardTitle>
                <CardText>{this.props.Dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            {this.renderComments(this.props.Dish.comments)}
          </div>
        </div>
      );
    }
    else {
      return(
        <div></div>
      );
    }
  }
}

export default DishDetail;
