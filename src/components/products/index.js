import { isArray, isEmpty } from "lodash";
import Product from "./product";

function Products({ products }) {
  if (isEmpty(products) || !isArray(products)) {
    return null;
  }
  return (
    <>
      <div className="flex flex-wrap overflow-hidden border-t border-l">
        {products.length
          ? products.map((item) => <Product key={item.id} product={item} />)
          : null}
      </div>
    </>
  );
}

export default Products;
