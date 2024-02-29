import { Vector3 } from "./Vector3";

export class Spherical {
	constructor(
		public radius: number,
		public angle1: number,
		public angle2: number
	) {}

	toVector3 = () => {
		const radius = this.radius;
		const angle1 = this.angle1;
		const angle2 = this.angle2;
	
		const x = radius * Math.sin(angle1) * Math.cos(angle2);
		const y = radius * Math.sin(angle1) * Math.sin(angle2);
		const z = radius * Math.cos(angle1);
	
		return new Vector3(x, y, z);
	};

	static getDistance = (p1: Spherical, p2: Spherical) => {
		const r1 = p1.radius;
		const ang11 = p1.angle1; //O1
		const ang12 = p1.angle2; //F1
	
		const r2 = p2.radius;
		const ang21 = p2.angle1; //O2
		const ang22 = p2.angle2; //F2
	
		const distance = Math.sqrt(
			r1 * r1 +
				r2 * r2 -
				2 *
					r1 *
					r2 *
					(Math.sin(ang11) * Math.sin(ang21) * Math.cos(ang12 - ang22) +
						Math.cos(ang11) * Math.cos(ang21))
		);
	
		return distance;
	};
}
