
import {createStore } from 'vuex';
//firebase imports
import {auth} from '../firebase/config'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut, onAuthStateChanged
}from 'firebase/auth'
const store = createStore({
    state:{
        user:null,
        authIsReady:false
    },
    mutations:{
        setUsers(state, payload){
            state.user = payload
            console.log('user state changed:', state.user)
        },
        setAuthIsReady(state,payload){
            state.authIsReady = payload
        }
    },
    actions:{
        async signup(context,{email,password}){
            console.log('signup action')
            // setTimeout(() => {
            //     context.commit('setUsers',{email,password})
            // }, 2000);
            //async code
             const res = await createUserWithEmailAndPassword(auth, email,password)
             if(res){
                context.commit('setUsers',res.user)
             }else{
                throw new Error('could not complete signup')
             }
        },
        async login(context, {email,password}){
            console.log('login action')
            const res = await signInWithEmailAndPassword(auth, email,password)
             if(res){
                context.commit('setUsers',res.user)
             }else{
                throw new Error('could not complete login')
             }
        },
        async logout(context){
            console.log("Logout actions")
            await signOut(auth)
            context.commit('setUsers',null)
        }
    }
})
const unsub = onAuthStateChanged(auth,(user)=>{
    store.commit('setAuthIsReady',true)
    store.commit('setUsers',user)
    unsub()
})
export default store