import { formatSimpleLabel } from '../../utilities/string-helper';
import Links from '../links';
import Icons from '../icons';
import './style.scss';

export default function LinkBox({ city, blog, blogLabel, twitter, company }) {
  const twitterUrl = twitter ? `https://twitter.com/${twitter}` : 'https://twitter.com/';
  const formattedBlogUrl = formatSimpleLabel(blog);
  const formattedBlogLabel = formatSimpleLabel(blogLabel);

  return (
    <div className="link-box">
      <div className="link-box--left">
        <div className="link-box--links">
          <Icons src="icon-location.svg" alt="location icon" />
          <Links>{formatSimpleLabel(city)}</Links>
        </div>
        <div className="link-box--links">
          <Icons src="icon-website.svg" alt="website icon" />
          <Links url={formattedBlogUrl}>{formattedBlogLabel}</Links>
        </div>
      </div>
      <div className="link-box--right">
        <div className="link-box--links">
          <Icons src="icon-twitter.svg" alt="twitter icon" />
          <Links url={twitterUrl}>{twitter ? `@${twitter}` : 'Not defined'}</Links>
        </div>
        <div className="link-box--links">
          <Icons src="icon-company.svg" alt="company icon" />
          <Links>{formatSimpleLabel(company)}</Links>
        </div>
      </div>
    </div>
  );
}
