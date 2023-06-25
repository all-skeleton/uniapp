import request from './utils/services'

export function getInit(data: ptAny) {
    return request.get('init', data)
}

export function getIndex(data: ptAny) {
    return request.get('index', data)
}