import { defineLink } from "@medusajs/framework/utils";
import ProductModule from "@medusajs/medusa/product";
import StoreModule from "@medusajs/medusa/store";

export default defineLink(ProductModule.linkable.product, {
  linkable: StoreModule.linkable.store,
  isList: true,
});
