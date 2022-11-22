import './style.scss';
import Links from "../links/";
import Icons from "../icons/";

export default function LinkBox() {
  return (
    <div className="linkbox">
      <div className="linkbox--left">
        <div className="linkbox--links">
          <Icons src="icon-location.svg" alt="location icon" />
          <Links>San Francisco</Links>
        </div>
        <div className="linkbox--links">
          <Icons src="icon-website.svg" alt="website icon" />
          <Links url='https://github.com' >https://github.blog</Links>
        </div>
      </div>
      <div className="linkbox--right">
        <div className="linkbox--links">
          <Icons src="icon-twitter.svg" alt="twitter icon" />
          <Links url='https://twitter.com/marcello'>@marcello</Links>
        </div>
        <div className="linkbox--links">
          <Icons src="icon-company.svg" alt="company icon" />
          <Links>@Ambush</Links>
        </div>
      </div>
    </div>
  );
}
