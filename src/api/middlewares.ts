import {defineMiddlewares} from "@medusajs/medusa";
import {validateAndTransformBody} from "@medusajs/framework";
import {linkProductToStore} from "./bug-reproduction/validators";

export default defineMiddlewares({
    routes: [
        {
            matcher: "/bug-reproduction",
            method: ["POST"],
            middlewares: [
                validateAndTransformBody(linkProductToStore),
            ],
        },
    ],
});