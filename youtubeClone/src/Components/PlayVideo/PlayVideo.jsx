import React from 'react'
import './PlayVideo.css'

import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'



const PlayVideo = () => {
  return (
    <div className='play-video'>
        <video src={video1} controls autoPlay muted ></video>
        <h3>Best YouTube Channel To Learn Web Development</h3>
        <div className='play-video-info'>
            <p>1234 Views &bull; 2days ago</p>
            <div>
                <span><img src={like} alt="" />125</span>
                <span><img src={dislike} alt="" />125</span>
                <span><img src={share} alt="" />125</span>
                <span><img src={save} alt="" />125</span>
            </div>
        </div>
            <hr />
            
            <div className="publisher">
                <img src={jack} alt="" />
                <div>
                    <p>CoffeeWithCode</p>
                    <span>1M Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-description">
                <p>Channel that make understand code to everyOne</p>
                <p>Subscribe CoffeeWithCode to get addicted to Code</p>
                <hr />
                <h4>130 Comment</h4>

                {/* comment start */}
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholson <span>1 day ago</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor reiciendis iusto id totam vel et deleniti quo accusantium inventore aut!</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>255</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>

                                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholson <span>1 day ago</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor reiciendis iusto id totam vel et deleniti quo accusantium inventore aut!</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>255</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholson <span>1 day ago</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor reiciendis iusto id totam vel et deleniti quo accusantium inventore aut!</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>255</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholson <span>1 day ago</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor reiciendis iusto id totam vel et deleniti quo accusantium inventore aut!</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>255</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
            </div>
    </div>

  )
}

export default PlayVideo