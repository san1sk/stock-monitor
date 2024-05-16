import { Link } from "react-router-dom";
import "./index.css"

function WatchlistChoice() {
    return (
        <div className="col s12 m6">
            <h4 className="header center-align">Watchlisted Stocks:</h4>
            <div className="card horizontal">
            <div className="card-stacked">
                <div className="card-action center-align">
                <Link to="/watchlist" className="link-watchlist">Click here to view watchlist in stocks</Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default WatchlistChoice;