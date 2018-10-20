<template>
  <div>
    <div class="Resume-txt"><h1 v-text="resumes.txt"></h1></div>
    <div class="Resume-header">
      <ul>
        <li v-for="head in resumes.header" v-text="head"></li>
      </ul>
    </div>
    <div class="Resume-bg" v-for="da in resumes.job_background">
      <div class="flag">
        <h2 v-text="da.txt"></h2>
      </div>
      <h4 class="job" v-for="j in da.job" v-text="j"></h4>
    </div>
    <!--工作经历-->
    <div class="Resume-experience">
      <div class="flag">
        <h2 v-text="resumes.experience.txt"></h2>
      </div>
      <h3 class="job" v-text="resumes.experience.job"></h3>
      <div class="describe">
        <ul>
          <li v-for="de in resumes.experience.describe"><h4 v-text="de"></h4></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "about_head",
        data(){
            return {
              resumes:{
                txt:"",
                header:[],
                job_background:{

                },
                experience:{}
              }
            }
        },
      mounted(){
        this.getData()
      },
      methods:{
        getData(){
          this.$http.get("../static/data/resume.json",{}).then((rev)=>{
            this.resumes.txt = rev.data.Resume_txt;
            this.resumes.header = rev.data.Resume_header;
            this.resumes.job_background = rev.data.Resume_job_background;
            this.resumes.experience = rev.data.Resume_experience;

          })
        }
      }
    }
</script>

<style>

</style>
