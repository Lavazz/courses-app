export function noop() {}

export function getTimeFromMins(mins) {
	const hours = Math.trunc(mins / 60);
	const minutes = mins % 60;
	return hours + ':' + minutes;
}
