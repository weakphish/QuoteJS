import React from 'react';
import {
  TwitterShareButton,
  TwitterIcon
} from "react-share";

export default function Share() {
	return (
		<div className="share">
			<TwitterShareButton url={"localhost:3000"}>
				<TwitterIcon size={32} round={true} />
			</TwitterShareButton>
		</div>
	)
}