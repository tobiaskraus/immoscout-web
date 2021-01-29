const apiEndpoint = process.env.REACT_APP_API_URL;
const token = process.env.REACT_APP_ACCESS_TOKEN;

const apiEndpointLocal = process.env.REACT_APP_API_URL_LOCAL;
const tokenLocal = process.env.REACT_APP_ACCESS_TOKEN_LOCAL;

const getHeaders = (useLocalApi: boolean) => ({
    Authorization: `Bearer ${useLocalApi ? tokenLocal : token}`,
    // accept: "application/json",
    accept: "*/*",
    "Content-Type": "application/json",
});

interface Response<T> {
    data: T;
    message?: string;
}

/**
 * fetch util for normal requests
 *
 * @template T the response type of this request
 * @param method 'GET'|'POST'|....
 * @param useLocalApi use API running on localhost instead of the production API
 * @param route without apiEndpoint starting from '/'
 * @param body optional; a simple object; don't define if method: 'GET'
 */
export const fetchNormal = <T>(
    method: string,
    route: string,
    useLocalApi: boolean,
    body?: Record<string, unknown>
): Promise<Response<T>> => {
    const init: RequestInit = {
        method,
        headers: getHeaders(useLocalApi),
    };
    if (body) {
        init.body = JSON.stringify(body);
    }
    const currentApiEndpoint = useLocalApi ? apiEndpointLocal : apiEndpoint;
    return fetch(`${currentApiEndpoint}${route}`, init).then((response) => {
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
