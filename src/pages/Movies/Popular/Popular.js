import React, { Component } from "react";
import axios from "../../../lib/axiosInstance";
import Card from "../../../components/UI/Card/Card";
import Navbar from "../../../components/Navbar/Navbar";

class Popular extends Component {
    state = {
        isLoading: false,
        showError: false,
        popular: {},
    };

    componentDidMount = () => {
        this.getPopularData();
    };

    getPopularData = async () => {
        try {
            this.setState({ isLoading: true });
            let res = await axios.get("/movie/popular");

            if (res.status === 200) {
                this.setState({
                    isLoading: false,
                    popular: res.data,
                });
            }
        } catch (error) {}
    };

    render() {
        const {
            isLoading,
            popular: { results },
        } = this.state;

        const movieCard =
            results &&
            results.length > 0 &&
            results.map((movie) => (
                <div key={movie.id} className="col-md-2">
                    <Card
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                        title={movie.original_title}
                        date={movie.release_date}
                    />
                </div>
            ));
        return (
            <>
                <Navbar />
                <main>
                    <section className="container">
                        <div className="row mt-5">{movieCard}</div>
                    </section>
                </main>
            </>
        );
    }
}

export default Popular;
