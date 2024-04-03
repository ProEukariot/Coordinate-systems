export function timeTakes(func: Function) {
	const start = performance.now();
	func();

	const end = performance.now();

	return end - start;
}
