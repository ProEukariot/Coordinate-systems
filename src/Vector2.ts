import { Polar } from "./Polar";

export class Vector2 {
	constructor(public x: number, public y: number) {}

	toPolar = () => {
		const x = this.x;
		const y = this.y;
	
		const radius = Math.sqrt(x * x + y * y);
		const angle = Math.atan2(y, x);
	
		return new Polar(radius, angle);
	};

	static getDistance = (p1: Vector2, p2: Vector2) => {
		const x1 = p1.x;
		const y1 = p1.y;
	
		const x2 = p2.x;
		const y2 = p2.y;
	
		const distance = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
	
		return distance;
	};
}
