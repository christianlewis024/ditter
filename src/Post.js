import React from 'react'
import "./Post.css"
import {Avatar} from "@material-ui/core"
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import ChatButtleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import RepeatIcon from "@material-ui/icons/Repeat"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import PublishIcon from "@material-ui/icons/Publish"

function Post({displayName, username, verified, text, image, avatar }) {
    return (
        <div className="post">
            <div className="post__avatar">
            <Avatar src="https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_ZOOM/pig-skeleton-halloween-decoration~13939767"/>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                       <h3>Christian Lewis<span className="post__headerSpecial"><VerifiedUserIcon className="post__badge"/> </span></h3> 
                    </div>
                    <div className="post__headerDescription">
                        <p>Hi this is the header description</p>
                    </div>                   
                </div>
                <img src="https://media2.giphy.com/media/vZbNOemuoggNy/giphy.gif?cid=ecf05e474uk1ojvx14zujshfwbnyqhdxewhvedrp6rh1zboh&rid=giphy.gif" alt=""/>
            </div>
            <div className="post__footer">
                <ChatButtleOutlineIcon fontSize="small"/>
                <RepeatIcon fontSize="small"/>
                <FavoriteBorderIcon fontSize="small"/>
                <PublishIcon fontSize="small"/>
            </div>
        </div>
    )
}

export default Post
