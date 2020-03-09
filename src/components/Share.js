import React from 'react';
import {
    TwitterShareButton,
    TwitterIcon
  } from "react-share";  

export default class Share extends React.Component {
    render() {
        return (
            <div className="share">
                <TwitterShareButton url={"https://programmer-quotes.herokuapp.com/"} title="{this.state.quote}" via="https://programmer-quotes.herokuapp.com/">
                    <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
            </div>
        )
    }
}