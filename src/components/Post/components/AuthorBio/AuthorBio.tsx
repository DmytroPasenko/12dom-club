import { FunctionComponent } from "react";
import classNames from "classnames";
import { postAuthorText } from "./AuthorBio.module.scss";
import authorPic from "../../../../../static/img/other/user-pic.png";

interface AuthorProps {
  author: string;
}

const AuthorBio: FunctionComponent<AuthorProps> = ({ author }) => (
  <>
    <div className={classNames(postAuthorText, "flex flex-col")}>
      <h5 className="uppercase">
        About the <a href="http://localhost:8000/about/">{author}</a>
      </h5>
      <p>
        <img src={authorPic} alt="user-avatar" />
        Hello, my dear readers! I’d like to tell you more about myself, my
        fashion tastes and the origins of my inspiration for all things
        lifestyle and beauty. I’ve been working for almost 15 years in
        different, nationwide fashion and lifestyle magazines, such as Vogue;
        Elle; Pink.
      </p>
    </div>
  </>
);

export default AuthorBio;
