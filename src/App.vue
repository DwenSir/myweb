<template>
  <div id="app">
    <nav class="nav-bar">
      <div class="container">
        <div class="container-left">
          <h3>杜启明个人博客 | 技术博客</h3>
        </div>
        <div class="switch" :class="{activeBg:showNav}" @click="showBgFun">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="container-right" v-show="showNav">
          <ul>
            <router-link v-for="(dataList,index) in navList" :key="index"  :to="dataList.paths">
              <li :class="{activeBg:dataList.active}" @click="activeFun(dataList)">
                <span>{{dataList.text}}</span>
              </li>
            </router-link>
          </ul>
        </div>
      </div>
    </nav>
    <div class="con clearfloat">
      <main class="con-left">
        <router-view></router-view>
      </main>
      <div class="con-right" v-show="isphone">
          <div class="home_right_con">
            <div class="home_right_con_header"><h3>{{everyday.callme.header}}</h3></div>
            <div class="home_right_con_body">
              <ul>
                <li v-for=" meinfo in everyday.callme.info"><span>{{meinfo.key}} :</span><span>{{meinfo.value}}</span></li>
              </ul>
            </div>
          </div>
          <div class="home_right_con">
            <div class="home_right_con_header"><h3>{{everyday.urls.header}}</h3></div>
            <div class="home_right_con_body">
              <ul>
                <li v-for=" meinfo in everyday.urls.info" ><a :title="meinfo.text" :src="meinfo.a" @click="jup(meinfo.a)">{{meinfo.text}}</a></li>
              </ul>
            </div>
          </div>
        </div>
    </div>
    <footer>
      <div>
        <h3>Copyright © 2018/3/10 杜启明个人博客 All rights reserved</h3>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      showBg:false,
      showNav:false,
      isphone:true,
      navList:[
        {text:"站点首页",paths:"/home",active:true},
        {text:"关于我",paths:"/about",active:false},
        {text:"web前端",paths:"/web",active:false},
        {text:"Python",paths:"/python",active:false},
        {text:"NodeJs",paths:"/nodejs",active:false},
        {text:"业余爱好",paths:"/hobby",active:false}
      ],
      everyday:{
        callme:{
          header:"",
          info:[]
        },
        urls:{}
      }
    }
  },
  created(){
    this.isIe();
    this.body();
    this.callData();
  },
  methods:{
    //切换flag
    showBgFun(){
      let temp = this.showNav;
      if(temp===false){
        this.showBg=true;
        this.showNav=true;
        return
      }
      this.showBg=false;
      this.showNav=false;
    },

    body(){
			  let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
				if(w>750){
				  this.showNav=true;
        }
			},
    activeFun(data){
      this.navList.forEach(function(obj){
        obj.active = false;
      });
      data.active = !data.active;
      let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      if(w<750){
        this.showNav=false;
      }
    },
    isIe(){
      if(navigator.userAgent.indexOf("MSIE 6.0")>0){
        alert("ie浏览器版本过低,请更换成高版本浏览器,如ie9+");
      }else if(navigator.userAgent.indexOf("MSIE 7.0")>0){
        alert("ie浏览器版本过低,请更换成高版本浏览器,如ie9+");
      }else if(navigator.userAgent.indexOf("MSIE 8.0")>0){
        alert("ie浏览器版本过低,请更换成高版本浏览器,如ie9+");
      }
    },
    callData(){
      this.$http.get("../static/data/everyday.json",{}).then((res) => {
        this.everyday.callme.header = res.data.callme.header;
        this.everyday.callme.info = res.data.callme.info;
        this.everyday.urls = res.data.urls;
      })
    },
    jup(data){
      window.open(data,"_blank")
    }
  },
  watch:{
    $route(){
      let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      if(w<750){
        //about页面不显示侧边栏
        if(location.pathname.indexOf("about")>-1){
          this.isphone = false;
        }else {
          this.isphone = true;
        }
      }

    }
  }
}
</script>

<style lang="less" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0}
.clearfloat{zoom:1}
@color:#191818;

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
/** iPad **/
@media only screen and (min-width: 751px){
  .nav-bar{
    width: 100%;
    height: 50px;
    background-color: @color;
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    margin-bottom:50px;
    .container{
      width:80%;
      height: 100%;
      margin: 0 auto;
      .container-left{
        width: 30%;
        height: 100%;
        float: left;
        h3{
          color: #eee;
          font-size: 15px;
          line-height: 50px;
        }
        /*border: 1px solid #000;*/
      }
      .container-right{
        width: 70%;
        /*border: 1px solid #000;*/
        float: left;
        ul{
          text-align: center;
          li{
            float: left;
            padding: 0 5px;
            margin: 0 5px;
            span{
              color: #eee;
              font-size: 13px;
              line-height: 50px;
            }
          }
          li:hover{
            background-color: #3F4042;
          }
        }
      }
    }
  }
  .con{
    width: 76%;
    margin: 0 auto;
    margin-bottom: 30px;
    .con-left{
      width: 65%;
      margin-top:15px ;
      float: left;
    }
    .con-right{
      width: 32%;
      float: right;
        .home_right_con{
          width: 100%;
          margin: 15px auto;
          text-align: left;
          border: 1px solid #e3e3e3;
          -webkit-border-radius: 8px;
          -moz-border-radius: 8px;
          -ms-border-radius: 8px;
          border-radius: 8px;
          background-color: #1F1F1F;
          -webkit-box-shadow: 1px 1px 10px #5f5f5f;
          -moz-box-shadow: 1px 1px 10px #5f5f5f;
          -ms-box-shadow: 1px 1px 10px #5f5f5f;
          box-shadow: 1px 1px 10px #5f5f5f;
          overflow: hidden;
          .home_right_con_header{
            height: 35px;
            background-color: #191818;
            h3{
              line-height: 35px;
              padding-left: 10px;
              color: #eeeeee;
              -webkit-animation:colorlunbo 20s infinite alternate;
              -moz-animation: colorlunbo 20s infinite alternate;
              -ms-animation: colorlunbo 20s infinite alternate;
              -o-animation: colorlunbo 20s infinite alternate;
              animation: colorlunbo 20s infinite alternate;
            }
          }
          .home_right_con_body{
            ul{
              margin-left: 10px;
              li{
                margin: 10px 0;
                color: #eeeeee;
                span{
                  margin: 0 3px;
                  font-size: 13px;
                }
                a{
                  margin: 0 3px;
                  font-size: 13px;
                  color: #eeeeee;
                }
                a:hover{
                  color: #4592EC;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
  }
  footer{
    width:100%;
    position:fixed;
    bottom:0;
    left:0;
    div{
      height: 30px;
      background-color: @color;
      text-align: center;
      h3{
        color: #eeeeee;
        font-size: 13px;
        line-height: 30px;

      }
    }
  }
}
/** iPhone **/
/*640/20=32 85.3333/32*/
@media only screen and (min-width: 320px) and (max-width: 750px) {
  html { overflow-x: hidden; overflow-y: hidden; }
  body{
    margin-top: 85.3333/32rem;
  }
  @-webkit-keyframes navAnimation /* Safari 和 Chrome */
  {
    0% {opacity: 0}
    100% {opacity: 1}
  }@keyframes navAnimation /* Safari 和 Chrome */
   {
     0% {opacity: 0}
     100% {opacity: 1}
   }
  .nav-bar{
    width: 100%;
    height: 85.3333/32rem;
    background-color:@color;
    position: fixed;
    top: 0;
    .container{
      width: 100%;
      height: 85.3333/32rem;
      display: -webkit-flex;
      display: flex;
      .container-left{
        -webkit-flex: 8.7;
        flex: 8.7;
        display: -webkit-flex;
        display: flex;
        text-align: center;
        -webkit-align-items: center;
        align-items: center;
        h3{
          color: #eee;
          font-size: 18/32rem;
          /*padding: 0 5px;*/
          -webkit-flex: 1;
          flex: 1;
        }
      }
      .con-left{
        width: 100%;
      }
      .container-right{
        width: 100%;
        z-index: 999;
        position: fixed;
        top: 85.3333/32rem;
        left: 0;
        ul{
          text-align: center;
          li{
            padding: 10/32rem 0;
            margin-top: 3/32rem;
            -webkit-box-shadow: -5/32rem 1/32rem 20/32rem #000;
            box-shadow: -5/32rem 1/32rem 20/32rem #000;
            background-color:@color;
            animation: navAnimation 0.6s linear;
            -webkit-animation: navAnimation 0.6s linear;
            span{
              font-size: 16/32rem;
              color: #eee;
            }

          }
        }
      }
      .switch{
        -webkit-flex: 1.3;
        display: -webkit-flex;
        -webkit-align-items:center;
        border: 1px solid #eee;
        border-radius: 10/32rem;
        -webkit-border-radius: 5/32rem;
        ul{
          width: 100%;
          li{
            width: 60%;
            border-bottom: 2px solid #eee;
            margin: 5px auto;
          }
        }
      }
    }
  }
  .con{
    width: 97%;
    margin: 0 auto;
    .con-right{
      .home_right_con{
        width: 86%;
        margin: 15/32rem auto;
        text-align: left;
        border-radius: 8/32rem;
        border: 1/32rem solid #e3e3e3;
        -webkit-border-radius: 8/32rem;
        -moz-border-radius: 8/32rem;
        -ms-border-radius: 8/32rem;
        border-radius: 8/32rem;
        background-color: #1F1F1F;
        -webkit-box-shadow: 1/32rem 1/32rem 10/32rem #5f5f5f;
        -moz-box-shadow: 1/32rem 1/32rem 10/32rem #5f5f5f;
        -ms-box-shadow: 1/32rem 1/32rem 10/32rem #5f5f5f;
        box-shadow: 1/32rem 1/32rem 10/32rem #5f5f5f;
        overflow: hidden;
        .home_right_con_header{
          height: 35/32rem;
          background-color: #191818;
          h3{
            line-height: 35/32rem;
            padding-left: 10/32rem;
            color: #eeeeee;
            -webkit-animation:colorlunbo 20s infinite alternate;
            -moz-animation: colorlunbo 20s infinite alternate;
            -ms-animation: colorlunbo 20s infinite alternate;
            -o-animation: colorlunbo 20s infinite alternate;
            animation: colorlunbo 20s infinite alternate;
          }
        }
        .home_right_con_body{
          ul{
            margin-left: 10/32rem;
            li{
              margin: 10/32rem 0;
              color: #eeeeee;
              span{
                margin: 0 3/32rem;
                font-size: 13/32rem;
              }
              a{
                margin: 0 3/32rem;
                font-size: 13/32rem;
                color: #eeeeee;
              }
              a:hover{
                color: #4592EC;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
  footer{
	position:fixed;
	width:100%;
	bottom:0;
	left:0;
    div{
      height: 30/32rem;
      width: 100%;
      background-color: @color;
      display: flex;
      display: -webkit-flex;
      text-align: center;
      align-items: center;
      -webkit-align-items: center;
      h3{
        flex: 1;
        -webkit-flex:1;
        color: #eeeeee;
        font-size: 13/32rem;
      }
    }
  }
}

</style>

