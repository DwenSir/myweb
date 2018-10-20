<template>
  <div>
    <div class="about_main">
      <router-view resume="resumes"></router-view>
    </div>
    <div class="Jump">
      <div>
        <router-link v-for="(li,key) in paths" :key="key" :class="{activeBg:li.status}" class="text" :to="li.path" ><span  @click="statusFlag(li)">{{key+1}}</span></router-link>
      </div>
    </div>
  </div>


</template>
<script>
export default {
  name: 'ABOUT',
  data(){
    return{
      paths:[
        {
          path:"/about/about_head",
          status:true
        }, {
          path:"/about/about_body",
          status:false
        },{
          path:"/about/about_body2",
          status:false
        }, {
          path:"/about/about_footer",
          status:false
        },
      ],
    }
  },
  created(){
  },
  methods:{
    statusFlag(data){
      this.paths.forEach(function(obj){
        obj.status = false;
      });
      data.status = !data.status;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @txtcolor:#008080;
  @bgcolor:#eee;
  @bordercolor:#191818;
  @media only screen and (min-width: 751px) {
    .flag {
      width: 80%;
      text-align: left;
      margin: 15px auto;
      overflow: hidden;
      border-bottom: 2px solid @txtcolor;
      h2 {
        display: inline;
        color: @bgcolor;
        background-color: @txtcolor;
        padding: 5px 18px;
        font-size: 15px;
      }
    }
    .job {
      width: 80%;
      text-align: left;
      margin: 13px auto;
    }
    .about_main {
      width: 100%;
      height: 800px;
      margin: 0 auto 10px;
      position: relative;
      background-color: @bgcolor;
      box-shadow: 1px 1px 10px @bordercolor;
      div :not(:first-child){
        margin: 18px auto;
      }
      .Resume-txt {
        text-align: center;
        h1 {
          color: @txtcolor;
        }
      }
      .Resume-header{
        /*margin: 20px auto;*/
        text-align: left;
        ul{
          margin: 0 100px;
          li{
            font-size: 15px;
            margin: 8px 0;
          }
        }
      }
      .Resume-skills{
        .describe{
          ul{
            width: 70%;
            margin: 0 auto;
            text-align: left;
            li{
              list-style: square;
              margin: 8px 0;
            }
          }
        }
      }
      .Resume-experience{
        .describe{
          ul{
            width: 70%;
            margin: 0 auto;
            text-align: left;
            li{
              list-style: circle;
              margin: 5px 0;
            }
          }
        }
      }
      .Resume-project{
        text-align: left;
        .project-info{
          width: 80%;
          margin: 18px auto;
          ul{
            li{
              margin: 10px 0;
              font-size: 13px;
              span{
                font-size: 15px;
                font-weight: 700;
                margin-right: 5px;
              }
              .project-info-con{
                margin: 0 20px;
                ul{
                  li{
                    list-style: square;
                    font-size: 13px;
                    margin: 10px 0;
                  }
                }
              }
            }
          }
        }
      }

    }
    .Jump{
      margin: 15px 0;
      div {
        width: 50%;
        margin: 0 auto;
        .text {
          display: inline-block;

          font-weight: 700;
          font-size: 15px;
          margin: 0 5px;
          border: 1px solid @bordercolor;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          -ms-border-radius: 50%;
          border-radius: 50%;
          overflow: hidden;
          span {
            line-height: 30px;
            display: inline-block;
            width: 30px;
            height: 30px;
          }
        }
      }
    }

  }
  /** iPhone **/
  /*640/20=32 85.3333/32*/
  @media only screen and (min-width: 320px) and (max-width: 750px) {
    .flag {
      width: 80%;
      text-align: left;
      margin: 15px auto;
      overflow: hidden;
      border-bottom: 2/32rem solid @txtcolor;
      h2 {
        display: inline;
        color: @bgcolor;
        background-color: @txtcolor;
        padding: 5/32rem 18/32rem;
        font-size: 15/32rem;
      }
    }
    .job {
      width: 80%;
      text-align: left;
      margin: 13/32rem auto;
    }
    .about_main {
      height: 800/32rem;
      margin: 0 auto 10/32rem;
      overflow: auto;
      background-color: @bgcolor;
      box-shadow: 1/32rem 1/32rem 10/32rem @bordercolor;
      .Resume-txt {
        text-align: center;
        h1 {
          color: @txtcolor;
        }
      }
      .Resume-header{
        /*margin: 20px auto;*/
        text-align: left;
        ul{
          width: 70%;
          margin: 0 auto;
          li{
            font-size: 15/32rem;
            margin: 2/32rem 0;
          }
        }
      }
      .Resume-bg{
        h4{
          font-size: 12/32rem;
        }
      }
      .Resume-skills{
        padding-top: 2/32rem !important;
        .job{
            font-size: 16/32rem;
        }
        .describe{
          ul{
            width: 70%;
            margin: 0 auto;
            text-align: left;
            li{
              list-style: square;
              font-size: 12/32rem;
              margin: 1/32rem 0;
            }
          }
        }
      }
      .Resume-experience{
        .describe{
          ul{
            width: 70%;
            margin: 0 auto;
            text-align: left;
            li{
              list-style: circle;
              font-size: 12/32rem;
              margin: 5px 0;
            }
          }
        }
        .job{
          font-size: 15/32rem;
        }
      }
      .Resume-project{
        padding-top: 5/32rem !important ;
        text-align: left;
        .project-info{
          width: 80%;
          margin: 20/32rem auto;
          ul{
            li{
              margin: 3/32rem 0;
              font-size: 13/32rem;
              span{
                font-size: 15/32rem;
                font-weight: 700;
                margin-right: 5/32rem;
              }
              .project-info-con{
                margin: 0 20/32rem;
                ul{
                  li{
                    list-style: square;
                    font-size: 13/32rem;
                    margin: 10/32rem 0;
                  }
                }
              }
            }
          }
        }
      }
      .times{
        font-size: 15/32rem;
      }
    }
    .Jump{
      margin: 5/32rem 0;
      div {
        width: 50%;
        margin: 0 auto;
        .text {
          display: inline-block;
          font-weight: 700;
          font-size: 15/32rem;
          border: 1/32rem solid @bordercolor;
          margin: 0 5/32rem;
          overflow: hidden;
          span {
            line-height: 30/32rem;
            display: inline-block;
            width: 30/32rem;
            height: 30/32rem;
          }
        }
      }
    }
  }

</style>
