import { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import {linkProductToStoreWorkflow} from "../../workflows/product/workflows/link-product-to-store";
import {LinkProductToStoreType} from "./validators";
import {getProductsWorkflow} from "../../workflows/product/workflows/get-products-workflow";


export const POST = async (req: AuthenticatedMedusaRequest<LinkProductToStoreType>, res: MedusaResponse) => {
    const { result, errors } = await linkProductToStoreWorkflow(req.scope).run({
    // @ts-ignore
        input: {
            ...req.validatedBody,
        },
    });

    if (errors.length) {
        return res.send({
            errors: errors.map((error) => error.error),
        });
    }


    res.json(result);
};

export const GET = async (req, res) => {
    const products = await getProductsWorkflow(req.scope).run();

    return res.json(products)
}
