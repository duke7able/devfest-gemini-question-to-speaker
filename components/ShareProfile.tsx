import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";
import { Paper } from "@mui/material";

function ShareProfile({ profileUrl }:{profileUrl:string}) {
  const title = "Check out my profile";

  return (
    <Paper sx={{ p: 1, display: "flex", gap: 1 }}>
      <FacebookShareButton url={profileUrl} title={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton url={profileUrl} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>

      <LinkedinShareButton
        url={profileUrl}
        summary={title}
        title={title}
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      <WhatsappShareButton url={profileUrl} title={title}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </Paper>
  );
}

export default ShareProfile;
