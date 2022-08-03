<template>
  <div class="container">
    <dashboard-vue></dashboard-vue>
    <h2 class="display-5 mt-3 fw-bold border-top border-2">Major of Each Faculty</h2>
    <table class="table table-bordered table-striped table-hover container">
        <thead>
            <tr>
                <th>Science and Technology</th>
                <th>Social and Law</th>
                <th>Literature</th>
                <th>Finance and Bank</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                
                <td><a href="/todo">Information Technology</a></td>
                <td><a href="#">Social Administration</a></td>
                <td><a href="#">English Literature</a></td>
                <td><a href="#">Accountant</a></td>
            </tr>
            <tr>
                <td><a href="#">Computer Science</a></td>
                <td><a href="#">Law</a></td>
                <td><a href="#">Chinese Literature</a></td>
                <td><a href="#">Finance</a></td>
            </tr>
            <tr>
                <td><a href="#">Achitecture</a></td>
                <td><a href="#">Science Law</a></td>
                <td><a href="#">Khmer Literature</a></td>
                <td><a href="#">Finance Management</a></td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import DashboardVue from './Dashboard.vue'
export default {
 components:{DashboardVue}
}
</script>

<style scoped>
td a{
    text-decoration: none;
    color: black;
}

</style>