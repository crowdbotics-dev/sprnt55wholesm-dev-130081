import axios from "axios"
const sprntwholesmdevAPI = axios.create({
  baseURL: "https://sprnt55wholesm-dev-130081.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return sprntwholesmdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_connectors_spr55demosm_search_testing_retrieve(payload) {
  return sprntwholesmdevAPI.get(
    `/api/v1/connectors/spr55demosm/search/testing/`
  )
}
function api_v1_dfeg_list(payload) {
  return sprntwholesmdevAPI.get(`/api/v1/dfeg/`)
}
function api_v1_dfeg_create(payload) {
  return sprntwholesmdevAPI.post(`/api/v1/dfeg/`, payload)
}
function api_v1_dfeg_retrieve(payload) {
  return sprntwholesmdevAPI.get(`/api/v1/dfeg/${payload.id}/`)
}
function api_v1_dfeg_update(payload) {
  return sprntwholesmdevAPI.put(`/api/v1/dfeg/${payload.id}/`, payload)
}
function api_v1_dfeg_partial_update(payload) {
  return sprntwholesmdevAPI.patch(`/api/v1/dfeg/${payload.id}/`, payload)
}
function api_v1_dfeg_destroy(payload) {
  return sprntwholesmdevAPI.delete(`/api/v1/dfeg/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return sprntwholesmdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return sprntwholesmdevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return sprntwholesmdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return sprntwholesmdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return sprntwholesmdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return sprntwholesmdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return sprntwholesmdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return sprntwholesmdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return sprntwholesmdevAPI.post(
    `/rest-auth/registration/resend-email/`,
    payload
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return sprntwholesmdevAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload
  )
}
function rest_auth_user_retrieve(payload) {
  return sprntwholesmdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return sprntwholesmdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return sprntwholesmdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_connectors_spr55demosm_search_testing_retrieve,
  api_v1_dfeg_list,
  api_v1_dfeg_create,
  api_v1_dfeg_retrieve,
  api_v1_dfeg_update,
  api_v1_dfeg_partial_update,
  api_v1_dfeg_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
