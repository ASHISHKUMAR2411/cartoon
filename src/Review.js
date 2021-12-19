import React from 'react';
import Cards from './Cards';
function Review() {
    return (
        <main>
            <section className="container">
                <Header />
                <Cards />
            </section>
        </main>
    )
}
const Header = () => {
    return (
        <div className="title">
            <h2>Favorite Cartoons</h2>
            <div className="underline"></div>
        </div>

    )
}


export default Review
