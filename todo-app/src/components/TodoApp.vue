<template>
    <div class="container">
        <h2 class="text-center mt-5">My Vue Todo App</h2>
        <div class="d-flex">
            <input v-model="task" @keyup.enter="submitTask" type="text" placeholder="Enter task" class="form-control">
            <button v-on:click="submitTask" class="btn btn-warning rounded-0">SUBMIT</button>
        </div>
        <br>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">N<sup>o</sup></th>
                    <th scope="col">Task</th>
                    <th scope="col">Status</th>
                    <th scope="col" class="text-center">Edit Task</th>
                    <th scope="col" class="text-center">Delete Task</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task,index) in tasks" :key="index">
                    <td>{{index+1}}</td>
                    <td class="text-start">
                        <span :class="{'finished': task.status === 'finish'}">
                            {{task.name}}
                        </span>
                    </td>
                    <td><span v-on:click="changeStatus(index)" class="pointer"
                        :class="{'text-danger': task.status === 'to-do',
                        'text-warning': task.status === 'in-progress',
                        'text-success': task.status === 'finish'
                        }"
                        >
                            {{firstCharUpper(task.status)}}
                        </span>
                    </td>
                    <td>
                        <div class="text-center pointer" v-on:click="editTask(index)">
                            <span class="fa fa-pen"></span>
                        </div>
                    </td>
                    <td>
                        <div class="text-center pointer" v-on:click="deleteTask(index)">
                            <span class="fa fa-trash"></span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default{
    name: 'HelloWorld',
    props:{
        msg: String
    },
    data(){
        return{
            task:' ',
            editedTask: null,
            availableStatuses: ['to-do','in-progress','finish'],

            tasks:[
                {
                    name: 'Steal bananas from the store.',
                    status: 'to-do'
                },
                {
                    name: 'Eat Cocolate 1 kg per day',
                    status: 'in-progress'
                },
                 {
                    name: 'Learning JAVA Dynamic Web',
                    status: 'finish'
                },
                 {
                    name: 'Playing Game',
                    status: 'in-progress'
                },
                 {
                    name: 'Learning JAVA',
                    status: 'to-do'
                },
                 {
                    name: 'Testing Vue .js',
                    status: 'in-progress'
                },
            ]
        }
    },
    methods:{
        submitTask(){
            if(this.task.length ===0) return;
            if(this.editedTask === null){
                this.tasks.push({
                    name: this.task,
                    status: 'to-do'
                });
            }else{
                this.tasks[this.editedTask].name = this.task;
                this.editedTask = null;
            }
            this.task ='';
        },
        deleteTask(index){
            this.tasks.splice(index,1); 
        },
        editTask(index){
            this.task = this.tasks[index].name;
            this.editedTask = index;
        },
         changeStatus(index){
            let newIndex= this.availableStatuses.indexOf(this.tasks[index].status);
            if(++newIndex>2) newIndex = 0;
            this.tasks[index].status = this.availableStatuses[newIndex];
        },
        firstCharUpper(text){
            return text.charAt(0).toUpperCase()+ text.slice(1);
        }
    }
}
</script>
<style scoped>
.pointer{
    cursor: pointer;
}
.finished{
    text-decoration: line-through;
}
</style>