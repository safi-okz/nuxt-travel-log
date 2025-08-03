import { defineStore } from 'pinia'
import { createAuthClient } from "better-auth/client"
const authClient =  createAuthClient()

export const useMyAuthStoreStore = defineStore( 'myAuthStoreStore', () =>{
  
   const loading = ref(false);


    const signIn = async () => {
      console.log('sign in action ');
    loading.value = true
    const data = await authClient.signIn.social({
        provider: "github",
        callbackUrl: "/dashboard"
    })
    loading.value = false
    console.log('github data ', data)
}
  return {
    loading,
    signIn
  }
})
