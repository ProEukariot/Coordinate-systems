import { Vector2 } from "./Vector2";

export class Polar {
	constructor(public radius: number, public angle: number) {}

	toVector2 = () => {
		const radius = this.radius;
		const angle = this.angle;
	
		const x = radius * Math.cos(angle);
		const y = radius * Math.sin(angle);
	
		return new Vector2(x, y);
	};

	static getDistance = (p1: Polar, p2: Polar) => {
		const r1 = p1.radius;
		const ang1 = p1.angle;
	
		const r2 = p2.radius;
		const ang2 = p2.angle;
	
		const distance = Math.sqrt(
			r1 * r1 + r2 * r2 - 2 * r1 * r2 * Math.cos(ang2 - ang1)
		);
	
		return distance;
	};
}
