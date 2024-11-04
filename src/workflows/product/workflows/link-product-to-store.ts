import { createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk";
import linkProductToStoreStep from "../steps/link-product-to-store";

export type LinkProductToStoreInput = {
  productId: string;
  storeId: string;
};

export const linkProductToStoreWorkflow = createWorkflow("link-product-to-store", ({productId, storeId}: LinkProductToStoreInput) => {
  const productStoreLinkArray = linkProductToStoreStep({
    productId: productId,
    storeId: storeId,
  });

  return new WorkflowResponse({
    productStoreLinkArray,
    storeId,
  });
});
