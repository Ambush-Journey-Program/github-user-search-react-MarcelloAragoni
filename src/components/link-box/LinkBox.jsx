import './style.scss';
import Links from "../links/";
import Icons from "../icons/";

export default function LinkBox({city, blog, twitter, company}) {
  const Fcity = city ? city : 'Not defined';
  const Fblog = blog ? blog : 'Not defined';
  const Ftwitter = twitter ? twitter : 'Not defined';
  const Fcompany = company ? company : 'Not defined';

  return (
    <div className="linkbox">
      <div className="linkbox--left">
        <div className="linkbox--links">
          <Icons src="icon-location.svg" alt="location icon" />
          <Links>{Fcity}</Links>
        </div>
        <div className="linkbox--links">
          <Icons src="icon-website.svg" alt="website icon" />
          <Links url={Fblog}>{Fblog}</Links>
        </div>
      </div>
      <div className="linkbox--right">
        <div className="linkbox--links">
          <Icons src="icon-twitter.svg" alt="twitter icon" />
          <Links url={`https://twitter.com/${Ftwitter}`}>@{Ftwitter}</Links>
        </div>
        <div className="linkbox--links">
          <Icons src="icon-company.svg" alt="company icon" />
          <Links>{Fcompany}</Links>
        </div>
      </div>
    </div>
  );
}
