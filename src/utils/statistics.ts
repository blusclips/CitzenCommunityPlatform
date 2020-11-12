/** @format */
const keys = ['what bothers you?', 'age'];

const Percentage = (amount: number, total: number) => {
	return (amount / total) * 100;
};

const classifyFamily = (obj: any) => {
	const whatBothersYou = obj[keys[0]].toLowerCase();
	const ageValue = Number(obj[keys[1]]);

	if (whatBothersYou.includes('family') && ageValue < 25) {
		return true;
	}
	return false;
};

const classifyHealth = (obj: any) => {
	const whatBothersYou = obj[keys[0]].toLowerCase();
	const ageValue = Number(obj[keys[1]]);

	if (whatBothersYou.includes('health') && ageValue > 18) {
		return true;
	}
	return false;
};

export const classificationPerRow = (obj: any) => {
	if (classifyFamily(obj)) {
		return 'FAMILY';
	} else if (classifyHealth(obj)) {
		return 'HEALTH';
	} else {
		return 'UNKNOWN';
	}
};

export const percentageClassification = (data: any) => {
	const total = data.length;
	let familyCount = 0;
	let healthyCount = 0;
	let unknownCount = 0;

	for (let i = 0; i < data.length; i++) {
		if (classifyFamily(data[i])) {
			familyCount += 1;
		} else if (classifyHealth(data[i])) {
			healthyCount += 1;
		} else {
			unknownCount += 1;
		}
	}

	let familyPercentage = Percentage(familyCount, total);
	let healthPercentage = Percentage(healthyCount, total);
	let unknownPercentage = Percentage(unknownCount, total);

	return {
		family: { percent: familyPercentage, num: familyCount },
		health: { percent: healthPercentage, num: healthyCount },
		unknown: { percent: unknownPercentage, num: unknownCount },
		total,
	};
};
