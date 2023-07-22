/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
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
import { Softmax, util } from '@tensorflow/tfjs-core';
let wasmFunc;
function setup(backend) {
    wasmFunc = backend.wasm.cwrap(Softmax, null /* void */, [
        'number',
        'number',
        'number',
        'number' // batch
    ]);
}
function softmax(args) {
    const { backend, inputs: { logits }, attrs: { dim } } = args;
    const xId = backend.dataIdMap.get(logits.dataId).id;
    const out = backend.makeOutput(logits.shape, logits.dtype);
    const outId = backend.dataIdMap.get(out.dataId).id;
    const channels = logits.shape[dim];
    const batch = util.sizeFromShape(logits.shape) / channels;
    // Short-circuit zero-sized tensors.
    if (util.sizeFromShape(out.shape) === 0) {
        return out;
    }
    wasmFunc(xId, outId, channels, batch);
    return out;
}
export const softmaxConfig = {
    kernelName: Softmax,
    backendName: 'wasm',
    setupFunc: setup,
    kernelFunc: softmax
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU29mdG1heC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtYmFja2VuZC13YXNtL3NyYy9rZXJuZWxzL1NvZnRtYXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgsT0FBTyxFQUEyQixPQUFPLEVBQTJDLElBQUksRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBSXZILElBQUksUUFDSSxDQUFDO0FBRVQsU0FBUyxLQUFLLENBQUMsT0FBb0I7SUFDakMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFO1FBQ3RELFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVEsQ0FBRyxRQUFRO0tBQ3BCLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxTQUFTLE9BQU8sQ0FDWixJQUF3RTtJQUUxRSxNQUFNLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFDLE1BQU0sRUFBQyxFQUFFLEtBQUssRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3ZELE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDcEQsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzRCxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDO0lBRW5ELE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDO0lBRTFELG9DQUFvQztJQUNwQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN2QyxPQUFPLEdBQUcsQ0FBQztLQUNaO0lBRUQsUUFBUSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBaUI7SUFDekMsVUFBVSxFQUFFLE9BQU87SUFDbkIsV0FBVyxFQUFFLE1BQU07SUFDbkIsU0FBUyxFQUFFLEtBQUs7SUFDaEIsVUFBVSxFQUFFLE9BQWdDO0NBQzdDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmltcG9ydCB7S2VybmVsQ29uZmlnLCBLZXJuZWxGdW5jLCBTb2Z0bWF4LCBTb2Z0bWF4QXR0cnMsIFNvZnRtYXhJbnB1dHMsIFRlbnNvckluZm8sIHV0aWx9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5cbmltcG9ydCB7QmFja2VuZFdhc219IGZyb20gJy4uL2JhY2tlbmRfd2FzbSc7XG5cbmxldCB3YXNtRnVuYzogKHhJZDogbnVtYmVyLCBvdXRJZDogbnVtYmVyLCBjaGFubmVsczogbnVtYmVyLCBiYXRjaDogbnVtYmVyKSA9PlxuICAgIHZvaWQ7XG5cbmZ1bmN0aW9uIHNldHVwKGJhY2tlbmQ6IEJhY2tlbmRXYXNtKTogdm9pZCB7XG4gIHdhc21GdW5jID0gYmFja2VuZC53YXNtLmN3cmFwKFNvZnRtYXgsIG51bGwgLyogdm9pZCAqLywgW1xuICAgICdudW1iZXInLCAgLy8geElkXG4gICAgJ251bWJlcicsICAvLyBvdXRJZFxuICAgICdudW1iZXInLCAgLy8gY2hhbm5lbHNcbiAgICAnbnVtYmVyJyAgIC8vIGJhdGNoXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBzb2Z0bWF4KFxuICAgIGFyZ3M6IHtiYWNrZW5kOiBCYWNrZW5kV2FzbSwgaW5wdXRzOiBTb2Z0bWF4SW5wdXRzLCBhdHRyczogU29mdG1heEF0dHJzfSk6XG4gICAgVGVuc29ySW5mbyB7XG4gIGNvbnN0IHtiYWNrZW5kLCBpbnB1dHM6IHtsb2dpdHN9LCBhdHRyczoge2RpbX19ID0gYXJncztcbiAgY29uc3QgeElkID0gYmFja2VuZC5kYXRhSWRNYXAuZ2V0KGxvZ2l0cy5kYXRhSWQpLmlkO1xuICBjb25zdCBvdXQgPSBiYWNrZW5kLm1ha2VPdXRwdXQobG9naXRzLnNoYXBlLCBsb2dpdHMuZHR5cGUpO1xuICBjb25zdCBvdXRJZCA9IGJhY2tlbmQuZGF0YUlkTWFwLmdldChvdXQuZGF0YUlkKS5pZDtcblxuICBjb25zdCBjaGFubmVscyA9IGxvZ2l0cy5zaGFwZVtkaW1dO1xuICBjb25zdCBiYXRjaCA9IHV0aWwuc2l6ZUZyb21TaGFwZShsb2dpdHMuc2hhcGUpIC8gY2hhbm5lbHM7XG5cbiAgLy8gU2hvcnQtY2lyY3VpdCB6ZXJvLXNpemVkIHRlbnNvcnMuXG4gIGlmICh1dGlsLnNpemVGcm9tU2hhcGUob3V0LnNoYXBlKSA9PT0gMCkge1xuICAgIHJldHVybiBvdXQ7XG4gIH1cblxuICB3YXNtRnVuYyh4SWQsIG91dElkLCBjaGFubmVscywgYmF0Y2gpO1xuICByZXR1cm4gb3V0O1xufVxuXG5leHBvcnQgY29uc3Qgc29mdG1heENvbmZpZzogS2VybmVsQ29uZmlnID0ge1xuICBrZXJuZWxOYW1lOiBTb2Z0bWF4LFxuICBiYWNrZW5kTmFtZTogJ3dhc20nLFxuICBzZXR1cEZ1bmM6IHNldHVwLFxuICBrZXJuZWxGdW5jOiBzb2Z0bWF4IGFzIHVua25vd24gYXMgS2VybmVsRnVuY1xufTtcbiJdfQ==