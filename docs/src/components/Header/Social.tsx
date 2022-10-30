/** @jsxImportSource react */
import { Github, Discord, Discussion } from 'components/Icons';

import { SOCIALS } from 'src/config';

const Icons = [Discord, Github, Discussion];

const Social = () => {
  return (
    <div className="flex justify-center align-middle">
      {Object.entries(SOCIALS).map(([type, url], index) => {
        const Content = Icons[index];
        return (
          <a
            className="w-9 h-9 flex align-middle justify-center transition-colors text-neutral-400 dark:text-neutral-700"
            href={url}
            target="_blank"
            key={type}
            aria-label={type}
          >
            <Content className="w-5 h-5" />
          </a>
        );
      })}
    </div>
  );
};

export default Social;
