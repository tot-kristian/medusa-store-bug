import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk";
import { ContainerRegistrationKeys } from "@medusajs/framework/utils";

const getProductsWithStoreStep = createStep<any, any, undefined>(
  "get-products-with-store",
  async (_, { container }) => {
    const query = container.resolve(ContainerRegistrationKeys.QUERY);

    const { data } = await query.graph({
      entity: "product",
      fields: ["id", "store.*"],

    });


    return new StepResponse(data);
  },
);

export default getProductsWithStoreStep;
