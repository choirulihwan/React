var React = require('react');

var createReactClass = require('create-react-class');

var TableData = createReactClass({
	render:function(){
    	return(
        	<tr>
        		<td>{this.props.city_name}</td>
        		<td>{this.props.people_amount}</td>
        	</tr>
        );
    }
});

module.exports = TableData;