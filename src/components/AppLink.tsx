import { FunctionComponent, ReactNode } from "react";
import { LocalizedLink } from "gatsby-theme-i18n";

interface AppLinkProps {
  to: string;
  language?: string;
  children: ReactNode;
  className?: string;
}

const AppLink: FunctionComponent<AppLinkProps> = ({
  to,
  language,
  children,
  className,
}) => (
  <LocalizedLink to={to} language={language} className={className}>
    {children}
  </LocalizedLink>
);

export default AppLink;
