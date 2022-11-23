import { formatSimpleLabel } from "../../utilities/string-helper";
import Links from "../links/";
import Icons from "../icons/";
import './style.scss';


export default function LinkBox({city, blog, twitter, company}) {
  const twitterUrl = twitter ? 'https://twitter.com/${twitter}' : 'https://twitter.com/';

  return (
    <div className="linkbox">
      <div className="linkbox--left">
        <div className="linkbox--links">
          <Icons src="icon-location.svg" alt="location icon" />
          <Links>{formatSimpleLabel(city)}</Links>
        </div>
        <div className="linkbox--links">
          <Icons src="icon-website.svg" alt="website icon" />
          <Links url={formatSimpleLabel(blog)}>{formatSimpleLabel(blog)}</Links>
        </div>
      </div>
      <div className="linkbox--right">
        <div className="linkbox--links">
          <Icons src="icon-twitter.svg" alt="twitter icon" />
          <Links url={twitterUrl}>{twitter ? `@${twitter}` : 'Not defined'}</Links>
        </div>
        <div className="linkbox--links">
          <Icons src="icon-company.svg" alt="company icon" />
          <Links>{formatSimpleLabel(company)}</Links>
        </div>
      </div>
    </div>
  );
}
