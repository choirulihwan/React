import { Link } from 'react-router-dom'
// import { format } from 'date-fns'
import { getOrderStatus } from './libs/helpers/index';
import { useState } from 'react';

const recentOrderData = [
	{
		id: '1',
		product_id: '4324',
		customer_id: '23143',
		customer_name: 'Shirley A. Lape',
		order_date: '2022-05-17T03:24:00',
		order_total: 435.50,
		current_order_status: 'PLACED',
		shipment_address: 'Cottage Grove, OR 97424'
	},	
	{
		id: '2',
		product_id: '5434',
		customer_id: '65345',
		customer_name: 'Mason Nash',
		order_date: '2022-05-17T07:14:00',
		order_total: 836.44,
		current_order_status: 'SHIPPED',
		shipment_address: 'Westminster, CA 92683'
	},
	{
		id: '3',
		product_id: '9854',
		customer_id: '87832',
		customer_name: 'Luke Parkin',
		order_date: '2022-05-16T12:40:00',
		order_total: 334.50,
		current_order_status: 'SHIPPED',
		shipment_address: 'San Mateo, CA 94403'
	},
	{
		id: '4',
		product_id: '8763',
		customer_id: '09832',
		customer_name: 'Anthony Fry',
		order_date: '2022-05-14T03:24:00',
		order_total: 876.00,
		current_order_status: 'OUT_FOR_DELIVERY',
		shipment_address: 'San Mateo, CA 94403'
	},
	{
		id: '5',
		product_id: '5627',
		customer_id: '97632',
		customer_name: 'Ryan Carroll',
		order_date: '2022-05-14T05:24:00',
		order_total: 96.35,
		current_order_status: 'DELIVERED',
		shipment_address: 'Los Angeles, CA 90017'
	},
	{
		id: '7',
		product_id: '7453',
		customer_id: '96453',
		customer_name: 'Ryan Carroll',
		order_date: '2022-05-14T05:24:00',
		order_total: 96.35,
		current_order_status: 'CONFIRMED',
		shipment_address: 'Los Angeles, CA 90017'
	}
]

export default function RecentOrders() {
	const [dataTable, setDataTable] = useState(recentOrderData);
	const [sortField, setSortField] = useState('id');
	const [sortOrder, setSortOrder] = useState('desc');

	const handleHeaderClick = (field) => {
		setSortField(field);
		setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');

		setDataTable(
			dataTable.sort((a, b) => {
				const fieldA = a[field];
				const fieldB = b[field];

				if (sortOrder === 'asc') {
					return fieldA < fieldB ? -1 : 1;
				} else {
					return fieldA > fieldB ? -1 : 1;
				}
			})
		);
	}

    return (
        <div className='w-full h-[25rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col'>
            <strong className="text-gray-700 font-medium">Recent Orders</strong>
            <div className="border-x border-gray-200 rounded-sm mt-3 overflow-hidden">
            <table className="w-full text-gray-700">
					<thead>
						<tr>
							<th className="cursor-pointer" onClick={() => handleHeaderClick('id')}>ID {sortField === 'id' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
							<th>Product ID</th>
							<th className="cursor-pointer" onClick={() => handleHeaderClick('customer_name')}>Customer Name {sortField === 'customer_name' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
							<th className="cursor-pointer" onClick={() => handleHeaderClick('order_date')}>Order Date {sortField === 'order_date' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
							<th className="cursor-pointer" onClick={() => handleHeaderClick('order_total')}>Order Total {sortField === 'order_total' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
							<th className="cursor-pointer" onClick={() => handleHeaderClick('shipment_address')}>Shipping Address {sortField === 'shipment_address' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
							<th className="cursor-pointer" onClick={() => handleHeaderClick('current_order_status')}>Order Status {sortField === 'current_order_status' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
						</tr>
					</thead>
					<tbody>
						{dataTable.map((order) => (
							<tr key={order.id}>
								<td>
									<Link to={`/order/${order.id}`}>#{order.id}</Link>
								</td>
								<td>
									<Link to={`/product/${order.product_id}`}>#{order.product_id}</Link>
								</td>
								<td>
									<Link to={`/customer/${order.customer_id}`}>{order.customer_name}</Link>
								</td>
								<td>{order.order_date}</td>
								<td className='text-end'>${order.order_total}</td>
								<td>{order.shipment_address}</td>
								<td>{getOrderStatus(order.current_order_status)}</td>
							</tr>
						))}
					</tbody>
				</table>
            </div>
        </div>
    )
}