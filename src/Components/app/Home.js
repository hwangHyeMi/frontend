import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container mt-5">
            <div className="jumbotron">
                <h1 className="display-4">Welcome!!!</h1>
                <p className="lead">
                </p>
                <hr className="my-4" />
                <p>
                </p>
				<Link to="/bbslist">
					<button className="btn btn-primary btn-lg">Go to Board List</button>
				</Link>
				<br></br><br></br>
                <div className="mt-4">
                    <h3>🖥️Source code on GitHub:</h3>
                    <ul>
                        <li>
							- &nbsp;
                            <a href="https://github.com/hwangHyeMi/backend" target="_blank" rel="noopener noreferrer">Backend Repository</a>
                        </li>
                        <li>
							- &nbsp;
                            <a href="https://github.com/hwangHyeMi/frontend" target="_blank" rel="noopener noreferrer">Frontend Repository</a>
                        </li>
                    </ul>
                </div>
				<br></br>

            </div>
        </div>
    );
}

export default Home;