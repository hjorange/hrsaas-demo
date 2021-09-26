import request from '@/utils/request'

/**
 * 获取员工简单列表
 * @returns
 */
export function getEmployeesSimpleList() {
  return request({
    url: '/sys/user/simple',
    method: 'GET'
  })
}

