import request from '@/utils/request'

/**
 * 查询企业的部门列表
 * @returns
 */
export function getDepartment() {
  return request({
    url: '/company/department',
    method: 'GET'
  })
}

/**
 * 根据ID删除部门
 * @param {*} id
 * @returns
 */
export function delDeptById(id) {
  return request({
    url: '/company/department/' + id,
    method: 'DELETE'
  })
}
