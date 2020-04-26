import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Trending from '../../components/Trending/Trending';

class Home extends Component {
    state = {

    }

    render() {
        return (
            <>
                <Navbar />
                <Trending />
            </>
        )
    }
}

export default Home
