import React from 'react';
import Quote from './Quotes'
import {
  TwitterShareButton,
  TwitterIcon
} from "react-share";

export default function Share() {
	return (
		<div className="share">
			<TwitterShareButton url={"localhost:3000"} children={Quote}>
				<TwitterIcon size={32} round={true} />
			</TwitterShareButton>
		</div>
	)
}