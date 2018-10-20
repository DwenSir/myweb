<template>
  <div class="clearfloat main">
    <div class="homes">
      <div class="everyday">
        <ul>
          <li><strong class="txt">{{everyday.header}}</strong><img :src="everyday.img" alt="小喇叭"></li>
          <li>{{everyday.text.en}}</li>
          <li>{{everyday.text.zh}}</li>
        </ul>
      </div>
      <div class="homes-content">
        <h1>内容区域,待更新...</h1>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  naem:"HOME",
  data () {
    return {
      phone:true,
      everyday:{
        header:"",
        img: require('../assets/img/xiaolaba.gif'),
        text:{
          en:"",
          zh:""
        }
      }
    }
  },
  created(){
    this.callData()
  }
  ,
  methods:{
    callData(){
      this.$http.get("../static/data/everyday.json",{}).then((res) => {
        this.everyday.header = res.data.header;
        this.everyday.text = res.data.text.pop();
      })
    },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0}
  .clearfloat{zoom:1}
  @-webkit-keyframes  colorlunbo{
    0%{color: #11189A;}
    20%{color: #643A68;}
    40%{color: #FFCD41;}
    60%{color: #A7C0DC;}
    80%{color: #41B983;}
    100%{color: #F18F93;}
  }
  @-ms-keyframes  colorlunbo{
    0%{color: #11189A;}
    20%{color: #643A68;}
    40%{color: #FFCD41;}
    60%{color: #A7C0DC;}
    80%{color: #41B983;}
    100%{color: #F18F93;}
  }
  @-moz-keyframes colorlunbo {
    0%{color: #11189A;}
    20%{color: #643A68;}
    40%{color: #FFCD41;}
    60%{color: #A7C0DC;}
    80%{color: #41B983;}
    100%{color: #F18F93;}
  }@-o-keyframes colorlunbo {
    0%{color: #11189A;}
    20%{color: #643A68;}
    40%{color: #FFCD41;}
    60%{color: #A7C0DC;}
    80%{color: #41B983;}
    100%{color: #F18F93;}
  }
  @keyframes colorlunbo {
    0%{color: #11189A;}
    20%{color: #643A68;}
    40%{color: #FFCD41;}
    60%{color: #A7C0DC;}
    80%{color: #41B983;}
    100%{color: #F18F93;}
  }
  @media only screen and (min-width: 751px){
    .main{
      width: 100%;
      .homes{
        width: 90%;
        margin: 0 auto;
        .everyday{
          width: 100%;
          margin: 0 auto;
          text-align: left;
          border-radius: 5px;
          border: 1px solid #e3e3e3;
          -webkit-border-radius: 5px;
          -moz-border-radius: 5px;
          -ms-border-radius: 5px;
          border-radius: 5px;
          background-color: #f5f5f5;
          -webkit-box-shadow: 1px 1px 10px #5f5f5f;
          -moz-box-shadow: 1px 1px 10px #5f5f5f;
          -ms-box-shadow: 1px 1px 10px #5f5f5f;
          box-shadow: 1px 1px 10px #5f5f5f;
          ul{
            margin-top: 15px;
            margin-left: 20px;
            li{
              margin: 10px 0;
              font-size: 13.6px;
              .txt{
                margin-right: 5px;
                -webkit-animation:colorlunbo 20s infinite;
                -moz-animation: colorlunbo 20s infinite;
                -ms-animation: colorlunbo 20s infinite;
                -o-animation: colorlunbo 20s infinite;
                animation: colorlunbo 20s infinite;
              }
            }
          }
        }
        .homes-content{
          height: 530px;
          width: 100%;
          margin: 5px 0;
          border: 2px dotted #000000;
          h1{
            line-height: 530px;
          }
        }
      }

    }
  }

  @media only screen and (min-width: 320px) and (max-width: 750px) {
    .main{
      display: -webkit-flex;
      display: flex;
      -webkit-align-content: center;
      align-content: center;
      margin: 0 auto;
      .homes{
        width: 100%;
        margin: 0 auto;
        div{
          margin: 15/32rem 0;
        }
        .everyday{
          margin: 15/32rem auto;
          text-align: left;
          border-radius: 5/32rem;
          border: 1/32rem solid #e3e3e3;
          -webkit-border-radius: 5/32rem;
          border-radius: 5/32rem;
          background-color: #f5f5f5;
          -webkit-box-shadow: 1/32rem 1/32rem 10/32rem #5f5f5f;
          box-shadow: 1/32rem 1/32rem 10/32rem #5f5f5f;
          ul{
            margin-top: 15/32rem;
            margin-left: 20/32rem;
            li{
              font-size: 13.6/32rem;
              margin: 10/32rem 0;
              .txt{
                margin-right: 5/32rem;
                animation: colorlunbo 20s infinite;
              }
            }
          }
        }
        .homes-content{
          height: 100/32rem;
          width: 100%;
          border: 2/32rem dotted #000000;
          h1{
            line-height: 100/32rem;
          }
        }
      }
    }
  }
</style>
