import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useState } from 'react';

const popularProducts = [
	{
		id: '3432',
		product_name: 'Macbook M1 Pro 14"',
		product_thumbnail: 'https://source.unsplash.com/100x100?macbook',
		product_price: '$1499.00',
		product_stock: 341
	},
	{
		id: '7633',
		product_name: 'Samsung Galaxy Buds 2',
		product_thumbnail: 'https://source.unsplash.com/100x100?earbuds',
		product_price: '$399.00',
		product_stock: 24
	},
	{
		id: '6534',
		product_name: 'Asus Zenbook Pro',
		product_thumbnail: 'https://source.unsplash.com/100x100?laptop',
		product_price: '$899.00',
		product_stock: 56
	},
	{
		id: '9234',
		product_name: 'LG Flex Canvas',
		product_thumbnail: 'https://source.unsplash.com/100x100?smartphone',
		product_price: '$499.00',
		product_stock: 98
	},
	{
		id: '4314',
		product_name: 'Apple Magic Touchpad',
		product_thumbnail: 'https://source.unsplash.com/100x100?touchpad',
		product_price: '$699.00',
		product_stock: 0
	},
	{
		id: '4342',
		product_name: 'Nothing Earbuds One',
		product_thumbnail: 'https://source.unsplash.com/100x100?earphone',
		product_price: '$399.00',
		product_stock: 453
	}
]

export default function PopularProducts() {
	const [dataTable, setDataTable] = useState(popularProducts);
	const [sortField, setSortField] = useState(null);
	const [sortOrder, setSortOrder] = useState('asc');

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
        <div>
            <div className='w-[20rem] h-[25rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col'>
                <strong className="text-gray-700 font-medium cursor-pointer" onClick={() => handleHeaderClick('product_stock')}>Popular Products {sortField === 'product_stock' && (sortOrder === 'asc' ? '↑' : '↓')}</strong>
                <div className='w-full w-full flex-1 text-xs mt-3'>
                {dataTable.map((product) => (
					<Link
						key={product.id}
						to={`/product/${product.id}`}
						className="flex items-start hover:no-underline mt-2"
					>
						<div className="w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm overflow-hidden">
							<img
								className="w-full h-full object-cover rounded-sm"
								src={product.product_thumbnail}
								alt={product.product_name}
							/>
						</div>
						<div className="ml-4 flex-1">
							<p className="text-sm text-gray-800">{product.product_name}</p>
							<span
								className={classNames(
									product.product_stock === 0
										? 'text-red-500'
										: product.product_stock > 50
										? 'text-green-500'
										: 'text-orange-500',
									'text-xs font-medium'
								)}
							>
								{product.product_stock === 0 ? 'Out of Stock' : product.product_stock + ' in Stock'}
							</span>
						</div>
						<div className="text-xs text-gray-400 pl-1.5">{product.product_price}</div>
					</Link>
				))}
                </div>
            </div>
        </div>
    )
}