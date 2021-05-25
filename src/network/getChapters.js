import {request} from "./request"

export function getChapters(url) {
    return request({
        url: '/novel/getTitle',
        params: {
            url,
        }
    })
} 