import gulp from "gulp";

import * as packs from "./utils/packs.mjs";


// Compendium pack management
export const cleanPacks = gulp.series(packs.clean);
export const compilePacks = gulp.series(packs.compile);
export const extractPacks = gulp.series(packs.extract);

// Build all artifacts
export const buildAll = gulp.parallel(
  packs.compile
);
