import Link from "next/link";
import Image from "next/image";
import { isEmpty } from "lodash";
import AddToCart from "../cart/add-to-cart";
const Product = ({ product }) => {
  if (isEmpty(product)) {
    return null;
  }

  const productType = product?.type ?? "";

  return (
    <div className="p-4 border-r border-b overflow-hidden w-1/2 md:w-1/3 xl:w-1/4">
      <Link href={product.permalink}>
        <a className="block md-6">
          <Image
            src={product.images[0].src}
            width={320}
            height={320}
            placeholder={"blur"}
            blurDataURL={product.images[0].src}
            alt={product.name}
          />
        </a>
      </Link>
      <h3 className="text-2xl">{product.name}</h3>
      <p dangerouslySetInnerHTML={{ __html: product.price_html }} />
      {"simple" === productType ? <AddToCart product={product} /> : null}
    </div>
  );
};

export default Product;
