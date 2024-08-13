import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Home from "../components/home/Home";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function QSWebsite(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <BrowserOnly>{() => <Home />}</BrowserOnly>
    </Layout>
  );
}
