import { docs } from "@/.source/server";
import { loader } from "fumadocs-core/source";

export const source: ReturnType<typeof loader> = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
});
