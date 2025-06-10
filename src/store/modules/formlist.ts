const useFormlistStore = defineStore(
  // 唯一 ID
  'formlist',
  () => {
    // 登录
    async function submit() {
      // const account = '333'
      // console.log(`account_str:${account}`)
      // const res = await apiUser.login(data)
      // localStorage.setItem('account', res.data.account)
      // localStorage.setItem('token', res.data.token)
      // localStorage.setItem('avatar', res.data.avatar)
      // account.value = res.data.account
      // token.value = res.data.token
      // avatar.value = res.data.avatar
    }

    return {
      submit,
    }
  },
)

export default useFormlistStore
