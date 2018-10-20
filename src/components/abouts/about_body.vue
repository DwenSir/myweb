<template>
  <div>
    <!--职业技能-->
    <div class="Resume-skills">
      <div class="flag">
        <h2 v-text="resumes.txt"></h2>
      </div>
      <h3 class="job" v-text="resumes.web"></h3>
      <div class="describe">
        <ul>
          <li v-for="web in resumes.web_describe"><h4 v-text="web"></h4></li>
        </ul>
      </div>
      <h3 class="job" v-text="resumes.backs"></h3>
      <div class="describe">
        <ul>
          <li v-for="backs in resumes.back_describe"><h4 v-text="backs"></h4></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "about_body",
        data () {
          return {
            resumes:{
              txt:"",
              web:"",
              backs:"",
              web_describe:[],
              back_describe:[]
            }
          }
      },
      created(){
        this.getData()
      },
      methods:{
        getData(){
          this.$http.get("../static/data/resume.json",{}).then((rev)=>{
            this.resumes.txt = rev.data.Resume_skills.txt;
            this.resumes.web = rev.data.Resume_skills.web;
            this.resumes.backs = rev.data.Resume_skills.backs;
            this.resumes.web_describe = rev.data.Resume_skills.web_describe;
            this.resumes.back_describe = rev.data.Resume_skills.back_describe;
          })
        }
      }
    }
</script>

<style scoped>
  .Resume-skills{
    padding-top: 20px ;
  }
</style>
