import { createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk";
import getProductsWithStoreStep from "../steps/get-products-with-store-step";


export const getProductsWorkflow = createWorkflow("link-product-to-store", (_) => {
    const response = getProductsWithStoreStep({});

    return new WorkflowResponse(response);
});
