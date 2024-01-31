import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog,
	HiOutlineShieldCheck,
	HiOutlineStar,
	HiCreditCard,
	HiOutlineAtSymbol,
} from 'react-icons/hi';

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'products',
		label: 'Products',
		path: '#',
		icon: <HiOutlineCube />
	},
	{
		key: 'laptop',
		label: 'Laptop',
		path: '/laptop',
		icon: <HiOutlineStar />,
		parent: 'products'
	},
	{
		key: 'handphone',
		label: 'Handphone',
		path: '/handphone',
		icon: <HiOutlineShieldCheck />,
		parent: 'products'
	},
	{
		key: 'orders',
		label: 'Orders',
		path: '/orders',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'customers',
		label: 'Customers',
		path: '/customers',
		icon: <HiOutlineUsers />
	},
	{
		key: 'transactions',
		label: 'Transactions',
		path: '#',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'purchasing',
		label: 'Purchasing',
		path: '/purchasing',
		icon: <HiCreditCard />,
		parent:'transactions'
	},
	{
		key: 'selling',
		label: 'Selling',
		path: '/selling',
		icon: <HiOutlineAtSymbol />,
		parent: 'transactions'
	},
	{
		key: 'messages',
		label: 'Messages',
		path: '/messages',
		icon: <HiOutlineAnnotation />
	}
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
];