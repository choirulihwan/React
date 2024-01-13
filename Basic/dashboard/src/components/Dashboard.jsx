import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div><p>This is Dashboard, <Link to="/products" className="underline">go to products</Link></p></div>
    )
}