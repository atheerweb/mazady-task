export const baseUrl = "https://staging.mazaady.com/api/v1/";

export async function useGetRequest(route: string) {
	try {
		const res: any = await $fetch(baseUrl + route, {
			method: "GET",
		});
		return res;
	} catch (err: any) {
		showError(err);
	}
}

export async function usePostRequest(route: string, body: {}) {
	try {
		const res: any = await $fetch(baseUrl + route, {
			method: "POST",
			body: body,
		});
		return res;
	} catch {
		showError("عذرا هناك خطأ");
	}
}
