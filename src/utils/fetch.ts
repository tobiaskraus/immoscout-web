const apiEndpoint = process.env.REACT_APP_API_URL;
const token = process.env.REACT_APP_ACCESS_TOKEN;

const headers = {
    Authorization: `Bearer ${token}`,
    // accept: "application/json",
    accept: "*/*",
    "Content-Type": "application/json",
};

interface Response<T> {
    data: T;
    message?: string;
}

/**
 * fetch util for normal requests
 *
 * @template T the response type of this request
 * @param method 'GET'|'POST'|....
 * @param route without apiEndpoint starting from '/'
 * @param body optional; a simple object; don't define if method: 'GET'
 */
export const fetchNormal = <T>(
    method: string,
    route: string,
    body?: Record<string, unknown>
): Promise<Response<T>> => {
    const init: RequestInit = {
        method,
        headers,
    };
    if (body) {
        init.body = JSON.stringify(body);
    }
    return fetch(`${apiEndpoint}${route}`, init).then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        if (response.status === 204) {
            // no content, so response.json() would fail
            return response.text();
        }
        return response.json();
    });
};
