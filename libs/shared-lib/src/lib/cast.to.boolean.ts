export function castToBoolean(bool: string | boolean | undefined | any, fallbackValue = false) {
	if (bool === undefined || bool === '') return fallbackValue;

	return bool === 'true';
}
