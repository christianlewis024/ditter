import React from 'react'
import "./TweetBox.css"
import {Avatar, Button} from "@material-ui/core"

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_ZOOM/pig-skeleton-halloween-decoration~13939767" alt=""/>
                    <input placeholder="Enter your Dweet"/>
                </div>
                <input
                 className="tweetBox__imageInput"
                 placeholder="enter image url"
                 type="text"
                 />
                <Button className="tweetBox__tweetButton">Dweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
