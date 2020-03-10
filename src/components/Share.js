import React, { useState } from 'react';
import {
    TwitterShareButton,
    TwitterIcon
  } from "react-share";  

export default function Share() {
    return (
        <div className="share">
            <TwitterShareButton url={"https://programmer-quotes.herokuapp.com/"} title="{this.state.quote}" via="https://programmer-quotes.herokuapp.com/">
                <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
        </div>
    )
}