import {request} from "./request"
export function chatperRequest(url) {
    return request({
        url: '/novel/getTitle',
        params: {
            url,
        }
    })
}