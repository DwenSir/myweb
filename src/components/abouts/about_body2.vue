<template>
  <div>
    <!--项目经验-->
    <div class="Resume-project">
      <div class="flag">
        <h2 v-text="resumes.headTxt"></h2>
      </div>
      <div class="project-info" v-for="(datas,key) in resumes.project" v-if="key<2" v-cloak>
        <ul>
          <li><span>{{datas.name.des}}</span>{{datas.name.text}}</li>
          <li><span>{{datas.describe.des}}</span>{{datas.describe.text}}</li>
          <li><span>{{datas.responsibility.des}}</span>{{datas.responsibility.text}}</li>
          <li>
            <span v-text="datas.points.des"></span>
            <div class="project-info-con">
              <ul>
                <li v-for="cont in datas.points.conts">{{cont}}</li>
              </ul>
            </div>
          </li>
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
        resumes: {
          project: {},
          headTxt: "",
        }
      }
    },
    created(){
      this.getData()
    },
    methods:{
      getData(){
        this.$http.get("../static/data/resume.json",{}).then((rev)=>{
          this.resumes.project = rev.data.Resume_project.datas;
          this.resumes.headTxt = rev.data.Resume_project.heads;
        })
      }
    }
  }
</script>

<style scoped>
  .Resume-project{
    padding-top: 20px ;
  }
</style>
