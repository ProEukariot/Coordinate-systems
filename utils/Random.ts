export class Random {
	static between = (a: number, b: number) => {
		if (a > b) [a, b] = [b, a];

		return Math.random() * (b - a) + a;
	};
}
