import { z } from "zod";

export const linkProductToStore = z
  .object({
    productId: z.string(),
    storeId: z.string(),
  })
  .strict();

export type LinkProductToStoreType = z.infer<typeof linkProductToStore>;
