import { Link } from "react-router-dom";

export default function Products() {
    return (
        <div>This is product, <Link to="/" className="underline">go to dashboard</Link></div>
    )
}