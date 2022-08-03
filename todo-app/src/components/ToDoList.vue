<template>
    <div class="text-center container">
        <router-link to="/major"><div class="float-start fs-5"><i class="fa fa-arrow-left"></i> Back</div></router-link>
        <div class="float-end fs-4"><i class="fa fa-info-circle" aria-hidden="true"></i></div>
        <h1 class="mt-5 pt-2 text-secondary">Student List:2022</h1>
        <h5 class="mb-5">Faculty: Science and Technology, Major: Information Technology, Stage:14, Year:2, Semester:2,Year:2022</h5>
        <div class="d-flex">
            <input v-model="names"  type="text" class="form-control" placeholder="enter name">
            <input v-model="dates"  type="date" class="form-control ms-2" placeholder="enter dateofbirth"> 
            <select v-model="genders"  class="form-select ms-2">
                <option>Male</option>
                <option>Female</option>
            </select>
            <select v-model="classes"  class="form-select ms-2">
                <option>Vietnam</option>
                <option>Thailand</option>
                <option>Lao</option>
                <option>Singarpore</option>
                <option>Brunei</option>
            </select>
            <button @click="save()" @keyup.enter="save()" type="button" class="btn btn-primary ms-2">SAVE</button>
        </div><br>
        <table class="table table-bordered table-hover table-striped">
            <thead>
                <tr class="bg-secondary bg-opacity-50">
                    <th>StuID</th>
                    <th>StudentName</th>
                    <th>Gender</th>
                    <th>DateOfBirth</th>
                    <th>Class</th>
                    <th>Situation</th>
                    <th>Edits</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(list,index) in student" :key="index">
                    <td><span :class="{'stop': list.stt === 'Stop','tem':list.stt==='Stop-Temporary'}">BSR00{{index+1}}</span></td>
                    <td><span :class="{'stop': list.stt === 'Stop','tem':list.stt==='Stop-Temporary'}">{{firstchar(list.name)}}</span></td>
                    <td class="pointer"><span @click="changeG(index)"
                        :class="{'text-danger': list.gender==='Male','text-primary':list.gender==='Female'}"
                    >{{list.gender}}</span></td>
                    <td><span :class="{'stop': list.stt === 'Stop','tem':list.stt==='Stop-Temporary'}">{{list.date}}</span></td>
                    <td class="pointer"><span @click="changeC(index)"
                        :class="{'text-danger':list.class==='Vietnam','text-primary':list.class==='Thailand','text-success':list.class==='Singarpore','text-secondary':list.class==='Lao','text-warning':list.class==='Brunei'}"
                    >{{list.class}}</span></td>
                    <td class="pointer"><span @click="changeS(index)" :class="{'text-danger':list.stt==='Stop','text-success':list.stt==='Studying','text-warning':list.stt==='Stop-Temporary'}">{{list.stt}}</span></td>
                    <td><button @click="editsname(index)" class="btn btn-primary">Edits</button></td>
                    <td><button @click="deletename(index)" type="button" class="btn btn-danger">Delete</button></td>
                </tr>
            </tbody>
        </table>
         <router-link to="/dashboard"><button type="button" @click="submit" class="btn btn-primary float-end ms-5 fs-4">Submit</button></router-link>
        <router-link to="/system"><button type="button" @click="cancel" class="btn btn-danger float-end fs-4">Cancel <i class="fa fa-times" aria-hidden="true"></i></button></router-link>
    </div>
</template>
<script>
import Swal from 'sweetalert2';
export default{
    name: "ToDoList",
    props: {
        msg: String
    },
    data() {
        return {
            list:'',
            names:'',
            dates:'',
            genders:'',classes:'',
            editedname: null,
            changegender: ["Male", "Female"],
            changesituation:["Studying","Stop","Stop-Temporary"],
            changeclass: ["Vietnam", "Thailand", "Singarpore", "Brunei", "Lao"],
            student: [
                {
                    name: "Wanda Maximoff",
                    gender: "Female",
                    date: "2000-12-02",
                    class: "Thailand",
                    stt: "Studying",
                },
                {
                    name: "Tony Stark",
                    gender: "Male",
                    date: "1999-02-12",
                    class: "Singarpore",
                    stt:"Studying"
                },
                {
                    name: "Steve Roger",
                    gender: "Male",
                    date: "1995-03-05",
                    class: "Lao",
                    stt:"Stop"
                }
            ],
        };
    },
    methods: {
        save() {
            // if (this.list.length === 0)
            //     return;
            if (this.editedname === null) {
                this.student.push({
                    name: this.names,
                    gender: this.genders,
                    date:this.dates,
                    class:this.classes,
                    stt:"Studying"
                });
                alert("Student Added");
            }else {
                this.student[this.editedname].name = this.names;
                this.editedname = null;
            }
            this.names=null;
            this.dates=null;
            this.genders=null;
            this.classes=null;
            this.names = "";
        },
        deletename(index) {
            this.$swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
            if (result.isConfirmed) {
                this.student.splice(index, 1);
                Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )
            }
            })
        },
        editsname(index) {
            (this.names = this.student[index].name)
                this.editedname = index;
            
        },
        changeG(index) {
            let newIndex = this.changegender.indexOf(this.student[index].gender);
            if (++newIndex > 1)
                newIndex = 0;
            this.student[index].gender = this.changegender[newIndex];
        },
        changeC(index) {
            let newIn = this.changeclass.indexOf(this.student[index].class);
            if (++newIn > 4)
                newIn = 0;
            this.student[index].class = this.changeclass[newIn];
        },
        changeS(index){
            let newInd = this.changesituation.indexOf(this.student[index].stt);
            if(++newInd > 2) 
            newInd=0;
            this.student[index].stt = this.changesituation[newInd];
        },
        firstchar(str){
            return str
            .toLowerCase()
            .split(' ')
            .map(function(word) {
                return word[0].toUpperCase() + word.substr(1);
            })
            .join(' ');
        },
        submit(){
            window.alert("Student List was Updated");
        },
        cancel(){
            window.alert("Do you want to Cancel?");
        }
    },
}
</script>
<style>
.pointer{
    cursor: pointer;
}
.stop{
    color:red;
}
.tem{
    color:red;
}
td{
    font-size: 20px;
}
th{
    font-size: 20px;
}
i{
    font-size: 50px;
}
</style>