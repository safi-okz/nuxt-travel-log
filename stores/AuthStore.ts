import { defineStore } from 'pinia'
import { createAuthClient } from "better-auth/vue"
const authClient =  createAuthClient()

export const useMyAuthStoreStore = defineStore( 'myAuthStoreStore', () =>{
  
  const authClient =  createAuthClient()
  const session = authClient.useSession()
  const sessionUser = computed(() => session.value?.data?.user)
  const loading = computed(() => session.value?.isPending || session.value?.isRefetching);
    const signIn = async () => {
      console.log('sign in action ');
    const data = await authClient.signIn.social({
        provider: "github",
        callbackUrl: "/dashboard",
        errorCallbackURL: '/error'
    })
    console.log('github data ', data)
}

const signOut = async () => {
  await authClient.signOut();
}
  return {
    loading,
    sessionUser,
    signIn,
    signOut
  }
})
