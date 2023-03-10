/* eslint-disable no-process-env */

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "../studio/schemas";

export default defineConfig({
  name: "default",
  title: "e-soysustrato",
  basePath: "/studio",

  projectId: "13iwwz14",
  dataset: "production",

  schema: {
    types: schemas,
  },
});
