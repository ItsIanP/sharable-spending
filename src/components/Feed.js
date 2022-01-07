import React from 'react'
import './Feed.css'
import FeedPost from "./FeedPost"
import ColumnChart from './ColumnChart'
import ProfileColumnChart from './ColumnChart'

//the posts have been left in just in case.

const Feed = () => {
    return (
        <div>
            <h1 className = "title">Feed</h1>
            <div className = "feed">
            <FeedPost/>
            <FeedPost/>
            <FeedPost/>
            <FeedPost/>
            <FeedPost/>
            <FeedPost/>
            <FeedPost/>
            </div>
        </div>
    )
}

export default Feed
