import { Spherical } from "./Spherical";

export class Vector3 {
	constructor(public x: number, public y: number, public z: number) {}

	toSpherical = () => {
		const x = this.x;
		const y = this.y;
		const z = this.z;

		const radius = Math.sqrt(x * x + y * y + z * z);
		const angle1 = Math.acos(z / radius);
		const angle2 = Math.atan2(y, x);

		return new Spherical(radius, angle1, angle2);
	};

	static getDistance = (p1: Vector3, p2: Vector3) => {
		const x1 = p1.x;
		const y1 = p1.y;
		const z1 = p1.z;

		const x2 = p2.x;
		const y2 = p2.y;
		const z2 = p2.z;

		const distance = Math.sqrt(
			(x2 - x1) * (x2 - x1) +
				(y2 - y1) * (y2 - y1) +
				(z2 - z1) * (z2 - z1)
		);

		return distance;
	};
}
