import Header from "../src/components/layouts/header";
import Footer from "../src/components/layouts/footer";
import axios from "axios";
import { HEADER_FOOTER_ENDPOINT } from "../src/utils/constants/endpoints";

export default function Home({ data }) {
  const { header, footer } = data;
  return (
    <div>
      <Header header={header} />
      <main>
        <h1>Hello</h1>
      </main>
      <Footer footer={footer} />
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await axios.get(HEADER_FOOTER_ENDPOINT);
  return {
    props: data || {},
    revalidate: 1,
  };
}
