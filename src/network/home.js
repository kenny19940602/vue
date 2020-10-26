import {request} from './request'

export function getHomeMultidata(){
    return request({
        url: '/gms/gms-api/getTaskInfo',
        params: {
            "pageNum":1,
            "pageSize":10
        }

      
    })
}