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

/**
 * 获取员工列表
 * @returns
 */
export function getEmployeesList(params) {
  return request({
    url: '/sys/user',
    method: 'GET',
    params
  })
}

/**
 * 新增员工
 * @param {*} params
 * @returns
 */
export function addEmployees(data) {
  return request({
    url: '/sys/user',
    method: 'POST',
    data
  })
}

/**
 * 删除员工接口
 * ****/

export function delEmployee(id) {
  return request({
    url: `/sys/user/${id}`,
    method: 'delete'
  })
}

/**
 * 批量导入员工
 * ****/

export function AddEmployeeAll(data) {
  return request({
    url: '/sys/user/batch',
    method: 'POST',
    data
  })
}
