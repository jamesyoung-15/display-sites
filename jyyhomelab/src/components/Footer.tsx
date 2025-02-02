import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import Icon from '@mui/material/Icon';

const Footer = () => {
    const contactLinks = [
        { icon: GitHubIcon, link: "https://github.com/jamesyoung-15" },
        { icon: LinkedInIcon, link: "https://www.linkedin.com/in/jamesyyoung/" },
        { icon: EmailIcon, link: "mailto:jyyoung@jyymail.com" },
        { icon: YouTubeIcon, link: "https://www.youtube.com/@jyylab" },
        { icon: RssFeedIcon, link: "https://blog.jyylab.com" },
      ];

    return (
      <footer className="w-[100%] text-white border-t-1 border-gray-700 text-sm">
        <div className="flex flex-col justify-center align center my-3">
          <p className='mx-auto my-3 max-[500px]:text-xs'>Website made with React and Tailwind.</p>
          <p className='mx-auto mb-3 max-[500px]:text-xs'>Self-hosted on server :)</p>
          <div className="flex flex-row mx-auto">
            {contactLinks.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                className="mx-2 hover:text-purple-300"
              >
                <Icon component={contact.icon}/>
              </a>
            ))}
          </div>
        </div>
      </footer>
    );
  };
  
export default Footer;
