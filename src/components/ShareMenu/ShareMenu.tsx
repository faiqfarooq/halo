import React from "react";
import {
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  WhatsApp,
  LinkedIn,
  Twitter,
  Facebook,
  Link as LinkIcon,
} from "@mui/icons-material";
import type { RadarDataPoint } from "../../types/results";

interface ShareMenuProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  radarData: RadarDataPoint[];
  onNotification: (message: string) => void;
}

const ShareMenu: React.FC<ShareMenuProps> = ({
  anchorEl,
  open,
  onClose,
  radarData,
  onNotification,
}) => {
  // Function to generate share text
  const generateShareText = () => {
    const scores = radarData.map(item => `${item.subject}: ${item.A}/${item.fullMark}`).join(', ');
    return `Check out my assessment results! ${scores}. Based on my responses, my strengths lie in motivation and collaboration skills. Areas for improvement include time management and stress handling.`;
  };

  // Function to handle social media sharing
  const handleSocialShare = (platform: string) => {
    const shareText = generateShareText();
    const encodedText = encodeURIComponent(shareText);
    const currentUrl = encodeURIComponent(window.location.href);

    let shareUrl = '';

    switch (platform) {
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodedText}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}&summary=${encodedText}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${currentUrl}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}&quote=${encodedText}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(shareText).then(() => {
          onNotification("Link copied to clipboard!");
        });
        break;
      default:
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }

    onClose();
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <MenuItem onClick={() => handleSocialShare('whatsapp')}>
        <ListItemIcon>
          <WhatsApp fontSize="small" />
        </ListItemIcon>
        <ListItemText>WhatsApp</ListItemText>
      </MenuItem>
      <MenuItem onClick={() => handleSocialShare('linkedin')}>
        <ListItemIcon>
          <LinkedIn fontSize="small" />
        </ListItemIcon>
        <ListItemText>LinkedIn</ListItemText>
      </MenuItem>
      <MenuItem onClick={() => handleSocialShare('twitter')}>
        <ListItemIcon>
          <Twitter fontSize="small" />
        </ListItemIcon>
        <ListItemText>Twitter</ListItemText>
      </MenuItem>
      <MenuItem onClick={() => handleSocialShare('facebook')}>
        <ListItemIcon>
          <Facebook fontSize="small" />
        </ListItemIcon>
        <ListItemText>Facebook</ListItemText>
      </MenuItem>
      <MenuItem onClick={() => handleSocialShare('copy')}>
        <ListItemIcon>
          <LinkIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Copy Link</ListItemText>
      </MenuItem>
    </Menu>
  );
};

export default ShareMenu;
