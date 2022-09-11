import Header from "../src/components/layouts/header";
import Footer from "../src/components/layouts/footer";
import axios from "axios";
import { HEADER_FOOTER_ENDPOINT } from "../src/utils/constants/endpoints";
import Products from "../src/components/products";

export default function Home({ data }) {
  const { header, footer } = data;
  return (
    <div>
      <Header header={header} />
      <div className="container mx-auto px-10">
        <Products />
      </div>
      <Footer footer={footer} />
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await axios.get(HEADER_FOOTER_ENDPOINT);
  const { data: products } = await axios.get(
    "http://localhost:3000/api/get-products"
  );
  return {
    props: data || {},
    revalidate: 1,
  };
}
