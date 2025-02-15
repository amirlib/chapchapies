export const enumToArray = <T extends object>(enumObj: T): Array<T[keyof T]> => {
	return Object.values(enumObj);
};
