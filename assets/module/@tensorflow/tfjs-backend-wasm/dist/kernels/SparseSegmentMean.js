/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
import { SparseSegmentMean } from '@tensorflow/tfjs-core';
import { setup, sparseSegmentReduction } from './SparseSegmentReduction';
function sparseSegmentMean(args) {
    return sparseSegmentReduction(args, true);
}
export const sparseSegmentMeanConfig = {
    kernelName: SparseSegmentMean,
    backendName: 'wasm',
    setupFunc: setup,
    kernelFunc: sparseSegmentMean
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BhcnNlU2VnbWVudE1lYW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWJhY2tlbmQtd2FzbS9zcmMva2VybmVscy9TcGFyc2VTZWdtZW50TWVhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFFSCxPQUFPLEVBQTJCLGlCQUFpQixFQUFzQyxNQUFNLHVCQUF1QixDQUFDO0FBSXZILE9BQU8sRUFBQyxLQUFLLEVBQUUsc0JBQXNCLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUV2RSxTQUFTLGlCQUFpQixDQUFDLElBRzFCO0lBQ0MsT0FBTyxzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDNUMsQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixHQUFpQjtJQUNuRCxVQUFVLEVBQUUsaUJBQWlCO0lBQzdCLFdBQVcsRUFBRSxNQUFNO0lBQ25CLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLFVBQVUsRUFBRSxpQkFBMEM7Q0FDdkQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIxIEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0IHtLZXJuZWxDb25maWcsIEtlcm5lbEZ1bmMsIFNwYXJzZVNlZ21lbnRNZWFuLCBTcGFyc2VTZWdtZW50TWVhbklucHV0cywgVGVuc29ySW5mb30gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcblxuaW1wb3J0IHtCYWNrZW5kV2FzbX0gZnJvbSAnLi4vYmFja2VuZF93YXNtJztcblxuaW1wb3J0IHtzZXR1cCwgc3BhcnNlU2VnbWVudFJlZHVjdGlvbn0gZnJvbSAnLi9TcGFyc2VTZWdtZW50UmVkdWN0aW9uJztcblxuZnVuY3Rpb24gc3BhcnNlU2VnbWVudE1lYW4oYXJnczoge1xuICBiYWNrZW5kOiBCYWNrZW5kV2FzbSxcbiAgaW5wdXRzOiBTcGFyc2VTZWdtZW50TWVhbklucHV0cyxcbn0pOiBUZW5zb3JJbmZvIHtcbiAgcmV0dXJuIHNwYXJzZVNlZ21lbnRSZWR1Y3Rpb24oYXJncywgdHJ1ZSk7XG59XG5cbmV4cG9ydCBjb25zdCBzcGFyc2VTZWdtZW50TWVhbkNvbmZpZzogS2VybmVsQ29uZmlnID0ge1xuICBrZXJuZWxOYW1lOiBTcGFyc2VTZWdtZW50TWVhbixcbiAgYmFja2VuZE5hbWU6ICd3YXNtJyxcbiAgc2V0dXBGdW5jOiBzZXR1cCxcbiAga2VybmVsRnVuYzogc3BhcnNlU2VnbWVudE1lYW4gYXMgdW5rbm93biBhcyBLZXJuZWxGdW5jXG59O1xuIl19