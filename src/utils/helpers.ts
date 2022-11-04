export const formatPrice = (price: number): string => {
	if (!price) return "0";
	return price.toLocaleString("vi", { style: "currency", currency: "VND" });
};

export const formatDate = (input: number | string | Date): string => {
	try {
		const date = new Date(+input);
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();
		return `${year}-${month >= 10 ? month : "0" + month}-${day >= 10 ? day : "0" + day}`;
	} catch (error) {
		return "";
	}
};

export const formatTime = (input: number | string | Date): string => {
	try {
		const date = new Date(+input);
		const hour = date.getHours();
		const minute = date.getMinutes();
		const second = date.getSeconds();
		return `${hour >= 10 ? hour : "0" + hour}:${minute >= 10 ? minute : "0" + minute}:${second >= 10 ? second : "0" + second}`;
	} catch (error) {
		return "";
	}
};

export const formatDateTime = (input: number | string | Date): string => {
	try {
		return `${formatDate(input)} ${formatTime(input)}`;
	} catch (error) {
		return "";
	}
};
