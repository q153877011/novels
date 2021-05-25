import {request} from "@/network/request"

export function novalSearch(novelName) {
    return request({
        url: '/novel/search',
        params: {
            novelName,
        }
    })
}

