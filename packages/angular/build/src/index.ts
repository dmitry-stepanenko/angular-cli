/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

export {
  buildApplication,
  type ApplicationBuilderOptions,
  type ApplicationBuilderOutput,
} from './builders/application';
export { type BuildOutputFile, BuildOutputFileType } from './tools/esbuild/bundler-context';
export type { BuildOutputAsset } from './tools/esbuild/bundler-execution-result';
