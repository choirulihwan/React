import { IoBagHandle } from 'react-icons/io5';

export default function DashboardStatGrid() {
    return (
        <div className="flex gap-4 w-full">
            <BoxWrapper>
                <div className='w-12 h-12 rounded-full flex items-center justify-center bg-sky-500'>
                    <IoBagHandle className="text-2xl text-white"></IoBagHandle>
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light'>Total Sales</span>
                    <div className='flex items-center'>
                        <strong className='text-xl text-gray-700 font-semibold'>$100k</strong>
                        <span className='text-sm text-green-500 pl-2'>+234</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className='w-12 h-12 rounded-full flex items-center justify-center bg-red-500'>
                    <IoBagHandle className="text-2xl text-white"></IoBagHandle>
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light'>Total Expenses</span>
                    <div className='flex items-center'>
                        <strong className='text-xl text-gray-700 font-semibold'>$3423</strong>
                        <span className='text-sm text-green-500 pl-2'>+234</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className='w-12 h-12 rounded-full flex items-center justify-center bg-yellow-500'>
                    <IoBagHandle className="text-2xl text-white"></IoBagHandle>
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light'>Total Customers</span>
                    <div className='flex items-center'>
                        <strong className='text-xl text-gray-700 font-semibold'>$12313</strong>
                        <span className='text-sm text-red-400 pl-2'>-30</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className='w-12 h-12 rounded-full flex items-center justify-center bg-green-500'>
                    <IoBagHandle className="text-2xl text-white"></IoBagHandle>
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light'>Total Orders</span>
                    <div className='flex items-center'>
                        <strong className='text-xl text-gray-700 font-semibold'>$16432</strong>
                        <span className='text-sm text-red-400 pl-2'>-43</span>
                    </div>
                </div>
            </BoxWrapper>
        </div>
    );
}

function BoxWrapper({children}) {
    return (
        <div className="bg-white p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
    );
}