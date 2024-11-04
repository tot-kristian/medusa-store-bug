import { createProductsWorkflow } from "@medusajs/medusa/core-flows";
import { VENDOR_AUTH } from "../../constants";
import { isEmpty } from "ramda";
import { linkProductToStoreWorkflow } from "../product/workflows/link-product-to-store";

createProductsWorkflow.hooks.productsCreated(async ({ products }, { container }) => {
  const vendor = container.resolve(VENDOR_AUTH) as {id: string};

  if (isEmpty(vendor)) return;

  await linkProductToStoreWorkflow(container).run({
    input: {
      productId: products[0].id,
      vendorId: vendor.id,
    },
  });
});
