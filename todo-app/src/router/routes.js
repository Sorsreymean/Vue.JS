 import ToDoList from '@/components/ToDoList.vue'
 import system from '@/components/system.vue'
 import Dashboard from '@/components/Dashboard.vue'
 import Major from '@/components/Major.vue'
 import Start from '@/components/Start.vue'
export default[
     {
     path:'/todo',
     component:ToDoList
     },
     {
     path:'/system',
     component:system
     },
     {
        path:'/dashboard',
        component:Dashboard
    },
    {
        path:'/major',
        component:Major
    },
    {
        path:'/',
        component:Start
    }
]