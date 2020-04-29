import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Trending from '../../components/Trending/Trending';
import Latest from '../../components/Latest/Latest'

class Home extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Trending />
                <Latest />
            </>
        )
    }
}

export default Home
