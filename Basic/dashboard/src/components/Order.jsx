import { Link } from "react-router-dom";

export default function Order() {
    return (
        <div>This is Order, <Link to="/" className="underline">go to dashboard</Link></div>
    );
}