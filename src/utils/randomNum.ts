// min ≤ r ≤ max
export function RandomNumBoth(Min: number, Max: number): number {
	let Range: number = Max - Min;
	let Rand: number = Math.random();
	let num: number = Min + Math.round(Rand * Range); //四舍五入
	return num;
}
