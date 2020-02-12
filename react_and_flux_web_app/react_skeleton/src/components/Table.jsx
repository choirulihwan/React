var React = require('react');
var createReactClass = require('create-react-class');
var TableData = require('./TableData.jsx');


var cities = [
	{"id":1, "city_name":"Bantul", "people_amount":"320"}, 
	{"id":2, "city_name":"Sleman", "people_amount":"430"}, 
	{"id":3, "city_name":"Yogyakarta", "people_amount":"220"}
];

var Table = createReactClass({
	render:function(){
    	var tableData = cities.map(function(item){
			return <TableData key={item.id} city_name={item.city_name} people_amount={item.people_amount} />;
		});

		return (<table border="1">
					<thead>
						<tr>
							<td>Nama Kota</td>
							<td>Jumlah Penduduk</td>
						</tr>
					</thead>
					<tbody>{tableData}</tbody>
				</table>);
    }
});

module.exports = Table;

