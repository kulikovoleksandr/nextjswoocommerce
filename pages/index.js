import Header from "../src/components/layouts/header";
import Footer from "../src/components/layouts/footer";
import axios from "axios";
import {
  HEADER_FOOTER_ENDPOINT,
  GET_PRODUCTS_ENDPOINT,
} from "../src/utils/constants/endpoints";
import Products from "../src/components/products";
import { getProductsData } from "../src/utils/products";
import { useEffect } from "react";

export default function Home({ headerFooter, products }) {
  useEffect(() => {
    const username = "ck_6351708fc2d790893ffb4a8543c80dcd89ab56cd";
    const password = "cs_c3dcc82c33e825de83ea7826898516568a38f323";
    const auth = Buffer.from(username + ":" + password).toString("base64");
    var config = {
      method: "post",
      url: "https://woocommerce.local/wp-json/gf/v2/forms/3/submissions",
      headers: {
        Authorization: `Basic ${auth}`,
      },
      data: {
        input_1: "test3",
        input_2_1: "First Choice",
        input_2_2: "Second Choice",
        input_2_3: "",
      },
    };

    // axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }, []);

  const { header, footer } = headerFooter || {};
  return (
    <div>
      <Header header={header} />
      <div className="container mx-auto px-10">
        <Products products={products} />
      </div>
      <Footer footer={footer} />
    </div>
  );
}

export async function getStaticProps() {
  const { data: headerFooterData } = await axios.get(HEADER_FOOTER_ENDPOINT);
  const { data: products } = await getProductsData();
  return {
    props: {
      headerFooter: headerFooterData?.data ?? {},
      products: products ?? {},
    },
    revalidate: 1,
  };
}
