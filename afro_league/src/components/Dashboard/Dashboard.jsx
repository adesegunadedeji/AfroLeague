import React from 'react'

function News(props) {
    return(
        <div>
            <h1>News</h1>
            <h1>Status: {props.logged_in}</h1>
        </div>
    )
}

export default News