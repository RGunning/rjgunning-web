import React from 'react'
import { Icon } from '@iconify/react';
import githubIcon from '@iconify/icons-mdi/github';
import linkedinIcon from '@iconify/icons-mdi/linkedin';
import twitterIcon from '@iconify/icons-mdi/twitter';

import './SocialIcons.scss';

function SocialIcons() {
  const links = [{
    name: "Twitter",
    link: "https://twitter.com/rjgunning",
    icon: twitterIcon
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rjgunning",
    icon: linkedinIcon
  },
  {
    name: "Github",
    link: "https://github.com/RGunning",
    icon: githubIcon
  },
/*   {
    name: "MQL5",
    link: "https://www.mql5.com/en/users/rjgunning",
    icon: "icon"
  } */
  ]

  return (
    <div id="social-icons" className="socialicons">
      {links.map(link => (
        <a target="_blank" key={link.name} rel="noopener noreferrer" href={link.link} title={link.name}>
          <Icon className="icon large teal-text" icon={link.icon} />
        </a>
      ))}
    </div>
  )
}

export default SocialIcons
