import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderCampsite({campsite}) {
    return(
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({comments}) {
    if(comments) {
        return(
            <div className="col-md-5 m-1">
                <h4>
                    Comments
                </h4>
                {comments.map((c) => {
                    return (
                        <div>
                            <p>{c.text}</p>
                            <p>-- {c.author},
                            {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))}
                            </p>
                        </div>
                    );
                })}
            </div>
        );
    }
    return <div></div>;
}

function CampsiteInfo(props) {
    if(props.campsite) {
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                        </Breadcrumb>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                        <RenderComments comments={props.comments} />
                </div>
            </div>
        );    
    }
    return (<div></div>);
}

export default CampsiteInfo;