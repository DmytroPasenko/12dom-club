import { FunctionComponent, Fragment } from "react";

interface HeaderProps {
  title: string;
}

const Header: FunctionComponent<HeaderProps> = ({ title }) => (
  <>
    <div>Header</div>
  </>
);
export default Header;
