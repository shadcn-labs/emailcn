import { docs } from "@/.source/server";
import { ROUTES } from "@/constants/routes";
import { loader } from "fumadocs-core/source";

export const source = loader({
  baseUrl: ROUTES.DOCS,
  source: docs.toFumadocsSource(),
});
