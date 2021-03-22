import React,{Component} from 'react'
class  Footer extends Component {
    
 
// parent to child through props -> immutable 
    render() {
      return(
 
    <div>
        <h3> @Copyrights reserved</h3>
        <h4>  {this.props.prod.id}  {this.props.prod.name}  {this.props.prod.price} </h4>
 
    </div>
 
    );
 
}
}
export default Footer;