import { Polar } from "./Polar";
import { Spherical } from "./Spherical";
import { Vector2 } from "./Vector2";
import { Vector3 } from "./Vector3";
import { Random } from "../utils/Random";
import { timeTakes } from "../utils/timeTakes";

const minRange = -5; // min points' coordinate x/y/z
const maxRange = 5; // max points' coordinate x/y/z
const amount = 1; // amount of point pairs

// Generate an array of point pairs in a two-dimensional Cartesian coordinate
// system.

let cartesian2dPairs: Array<[Vector2, Vector2]> = [];

for (let i = 0; i < Math.abs(amount); i++) {
	let v1 = new Vector2(
		Random.between(minRange, maxRange),
		Random.between(minRange, maxRange)
	);
	let v2 = new Vector2(
		Random.between(minRange, maxRange),
		Random.between(minRange, maxRange)
	);
	cartesian2dPairs.push([v1, v2]);
}

// Convert the coordinates of the points from the Cartesian system to the
// polar system.

let polarPairs = cartesian2dPairs.map((pair) => {
	const cartesian2d1 = pair[0];
	const cartesian2d2 = pair[1];

	const polar1 = cartesian2d1.toPolar();
	const polar2 = cartesian2d2.toPolar();

	return [polar1, polar2];
});

// Convert the coordinates of the points back from the polar system to the
// Cartesian system, ensuring the values match the original ones.

let restoredCartesian2dPairs = polarPairs.map((pair) => {
	const polar1 = pair[0];
	const polar2 = pair[1];

	const cartesian2d1 = polar1.toVector2();
	const cartesian2d2 = polar2.toVector2();

	return [cartesian2d1, cartesian2d2];
});

for (let i = 0; i < cartesian2dPairs.length; i++) {
	console.log(
		"Original pair of points in cartesian 2d\n",
		cartesian2dPairs[i]
	);
	console.log(
		"Restored pair of points in cartesian 2d\n",
		restoredCartesian2dPairs[i]
	);
	console.log("-------------------------------");
}

// Generate an array of point pairs in a three-dimensional Cartesian
// coordinate system.

let cartesian3dPairs: Array<[Vector3, Vector3]> = [];

for (let i = 0; i < Math.abs(amount); i++) {
	let v1 = new Vector3(
		Random.between(minRange, maxRange),
		Random.between(minRange, maxRange),
		Random.between(minRange, maxRange)
	);
	let v2 = new Vector3(
		Random.between(minRange, maxRange),
		Random.between(minRange, maxRange),
		Random.between(minRange, maxRange)
	);
	cartesian3dPairs.push([v1, v2]);
}

// Convert the coordinates of the points from the Cartesian system to the
// spherical system.

let sphericalPairs = cartesian3dPairs.map((pair) => {
	const cartesian3d1 = pair[0];
	const cartesian3d2 = pair[1];

	const spherical1 = cartesian3d1.toSpherical();
	const spherical2 = cartesian3d2.toSpherical();

	return [spherical1, spherical2];
});

// Convert the coordinates of the points back from the spherical system to
// the Cartesian system, ensuring the values match the original ones.

let restoredCartesian3dPairs = sphericalPairs.map((pair) => {
	const spherical1 = pair[0];
	const spherical2 = pair[1];

	const cartesian3d1 = spherical1.toVector3();
	const cartesian3d2 = spherical2.toVector3();

	return [cartesian3d1, cartesian3d2];
});

for (let i = 0; i < cartesian3dPairs.length; i++) {
	console.log(
		"Original pair of points in cartesian 3d\n",
		cartesian3dPairs[i]
	);
	console.log(
		"Restored pair of points in cartesian 3d\n",
		restoredCartesian3dPairs[i]
	);
	console.log("-------------------------------");
}

// Implement functions to calculate the distance between two points in the
// Cartesian, polar, and spherical coordinate systems.

// ^^^^^^^^^^^^^^

// Perform distance calculations between all pairs of points in each of the
// coordinate systems.

const cartesian2dLen = cartesian2dPairs.map((pair) => {
	const distance = Vector2.getDistance(pair[0], pair[1]);

	return distance;
});

const cartesian3dLen = cartesian3dPairs.map((pair) => {
	const distance = Vector3.getDistance(pair[0], pair[1]);

	return distance;
});

const polarLen = polarPairs.map((pair) => {
	const distance = Polar.getDistance(pair[0], pair[1]);

	return distance;
});

const spheriicalLen = sphericalPairs.map((pair) => {
	const distance = Spherical.getDistance(pair[0], pair[1]);

	return distance;
});

console.log("Cartesian2d distance: ", cartesian2dLen);
console.log("Polar distance: ", polarLen);
console.log("Cartesian3d distance: ", cartesian3dLen);
console.log("Spherical distance: ", spheriicalLen);

// Compare the computational complexity of calculations for different
// coordinate systems.

const big_amount = 1_000_000;
let timeElapsed: number;
cartesian2dPairs = [];
polarPairs = [];

for (let i = 0; i < Math.abs(big_amount); i++) {
	let v1 = new Vector2(
		Random.between(minRange, maxRange),
		Random.between(minRange, maxRange)
	);
	let v2 = new Vector2(
		Random.between(minRange, maxRange),
		Random.between(minRange, maxRange)
	);
	cartesian2dPairs.push([v1, v2]);

	let p1 = v1.toPolar();
	let p2 = v2.toPolar();
	polarPairs.push([p1, p2]);
}

// Сartesian2d performance time
console.log("@@@@@", timeTakes);

timeElapsed = timeTakes(() => {
	cartesian2dPairs.forEach((pair) => {
		Vector2.getDistance(pair[0], pair[1]);
	});
});

console.log(`Cartesian 2d distance takes ${timeElapsed} ms`);

// Polar performance time

timeElapsed = timeTakes(() => {
	polarPairs.forEach((pair) => {
		Polar.getDistance(pair[0], pair[1]);
	});
});

console.log(`Polar distance takes ${timeElapsed} ms`);

cartesian3dPairs = [];
sphericalPairs = [];

for (let i = 0; i < Math.abs(big_amount); i++) {
	let v1 = new Vector3(
		Random.between(minRange, maxRange),
		Random.between(minRange, maxRange),
		Random.between(minRange, maxRange)
	);
	let v2 = new Vector3(
		Random.between(minRange, maxRange),
		Random.between(minRange, maxRange),
		Random.between(minRange, maxRange)
	);
	cartesian3dPairs.push([v1, v2]);

	let s1 = v1.toSpherical();
	let s2 = v2.toSpherical();
	sphericalPairs.push([s1, s2]);
}

// Cartesian3d performance time

timeElapsed = timeTakes(() => {
	cartesian3dPairs.forEach((pair) => {
		Vector3.getDistance(pair[0], pair[1]);
	});
});

console.log(`Cartesian 3d distance takes ${timeElapsed} ms`);

// Spherical  performance time

timeElapsed = timeTakes(() => {
	sphericalPairs.forEach((pair) => {
		Spherical.getDistance(pair[0], pair[1]);
	});
});

console.log(`Spherical distance takes ${timeElapsed} ms`);
