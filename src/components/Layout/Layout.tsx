import { FunctionComponent, ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Home from "../Home/Home";
import BottomNewsGrid from "../BottomNewsGrid/BottomNewsGrid";
import Seo from "../Seo";
import { wrapper } from "./Layout.module.scss";

interface LayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <main className={wrapper}>
      <Seo title={title} description={description}/>
      <Header title={title} />
      <Home />
      {/* {children} */}
      <BottomNewsGrid />
      <Footer />
    </main>
  );
};

export default Layout;
