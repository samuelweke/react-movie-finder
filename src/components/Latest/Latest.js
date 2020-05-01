import React, { Component } from "react";
import axios from "../../lib/axiosInstance";
import Card from "../UI/Card/Card";
import CardSkeleton from "../UI/Skeleton/CardSkeleton";

import classes from "./Latest.module.css";

class Latest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            showError: false,
            errorMsg: "",
            trending: {},
        };
    }

    componentDidMount = () => {
        this.getTrendingData();
    };

    getTrendingData = async () => {
        try {
            this.setState({ isLoading: true });
            const res = await axios.get("/movie/now_playing");

            if (res.status === 200) {
                console.log(res);
                this.setState({
                    isLoading: false,
                    trending: res.data,
                });
            }
        } catch (error) {}
    };

    render = () => {
        const {
            isLoading,
            trending: { results },
        } = this.state;

        let loader = Array(7)
            .fill(null)
            .map((a, i) => <CardSkeleton key={i} />);

        let movieCard =
            results &&
            results.length > 0 &&
            results.map((movie) => (
                <Card
                    key={movie.id}
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                    title={movie.original_title}
                    date={movie.release_date}
                />
            ));

        return (
            <main>
                <section className="container">
                    <h2 className={classes.Trending}>Now Playing</h2>
                    <div className="d-flex card-scroll">
                        {isLoading ? loader : movieCard}
                    </div>
                </section>
            </main>
        );
    };
}

export default Latest;
