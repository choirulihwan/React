import { Link } from "react-router-dom";
import DashboardStatGrid from "./DashboardStatGrid";
import TransactionChart from "./TransactionChart";
import BuyerProfileChart from "./BuyerProfileChart";
import RecentOrders from "./RecentOrders";
import PopularProducts from "./PopularProducts";


export default function Dashboard() {
    return (
        <div className="flex flex-col gap-4 m-2">
            <DashboardStatGrid /> 
            <div className="flex flex-row gap-2">
                <TransactionChart />       
                <BuyerProfileChart />
            </div>    
            <div className="flex flex-row gap-2">
                <RecentOrders />       
                <PopularProducts />
            </div>    
        </div>
    )
}