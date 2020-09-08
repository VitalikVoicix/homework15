import React from "react"
import arrow from "../Images/arrow.png"
import repost from "../Images/repost.svg"
import share from "../Images/share.svg"
import like from "../Images/like.svg"
import redo from "../Images/redo.png"
import comment from "../Images/comment.svg"

import "./main.css"

const style={
   width:"900px",
   height:"450px",
   border:"4px solid blue",
   position:"relative",
   left:"300px",
   borderRadius:"20px",
   backgroundColor:"#15202B"
}
const Main=(props)=>{
  return(
      <div style={style}>
          <img src={props.author.photo} alt="icon"className="icon"/>
          <p className="name">  {props.author.name}</p>
          <img src={redo} className="redo" alt="redo"/> 
          <p className="nickName">  {props.author.nickname}</p>
          <img src={redo} className="redo1" alt="redo1"/> 
          <p className="date">  {props.date}</p>
          <p className="question">  {props.content}</p>
          <img src={props.image} alt="main-icon"className="main-icon"/>
          <img src={arrow} className="arrow" alt="arrow"/>  
          <img src={repost} className="repost" alt="repost"/>  
          <img src={share} className="share" alt="share"/> 
          <img src={like} className="like" alt="like"/>  
          <span className="like-count">100</span>
          <img src={comment} className="comment" alt="comment"/>  
          <span className="comment-count">100</span>
     </div>
      )
   }
export default Main;