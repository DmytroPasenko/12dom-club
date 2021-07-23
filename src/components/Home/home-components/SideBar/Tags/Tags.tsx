import { FunctionComponent } from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { tagsBlock, tags } from "./Tags.module.scss";

interface TagsRecord {
  name: string;
}

const Tags: FunctionComponent = () => {
  const { t } = useTranslation();
  const getTags = (): TagsRecord[] => [
    { name: "Aquarius" },
    { name: "Astrology" },
    { name: "Blog" },
    { name: "Business" },
    { name: "Love" },
    { name: "News" },
    { name: "Pisces" },
    { name: "Tarol" },
    { name: "Tips" },
    { name: "Zodiac" },
  ];

  const tagButtons = getTags();

  return (
    <>
      <div className={classNames(tagsBlock, "flex")}>
        <div className={tags}>
          <h5 className="uppercase">{t("site:tags")}</h5>
          {tagButtons.map((item) => (
            <button type="button" key={item.name}>
              <a href="http://localhost:8000/blogPost">{item.name}</a>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tags;
