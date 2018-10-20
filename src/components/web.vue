<template>
  <main>
    <div class="web">
      <div class="web_top">
        <h2>Jquery ajax, Axios, Fetch区别之我见</h2>
        <p>前端技术真是一个发展飞快的领域，我三年前入职的时候只有原生XHR和Jquery ajax，我们还曾被JQuery 1.9版本版本以下不支持大文件请求这个问题卡了半天（最后自己写了原生的XHR请求）。一晃眼，JQuery ajax早已不能专美于前，axios和fetch都已经开始分别抢占“请求”这个前端高地。本文将会尝试着阐述他们之间的区别，并给出自己的一些理解。</p>
      </div>
      <div class="web_bom">

      </div>
    </div>
  </main>
</template>

<script>
  // import boot from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
  export default {
    name: 'WEB',
    data () {
      return {
        msg: '这是关于我的web技术页面'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

  @media only screen and (min-width: 751px){
    main{
      main>div{
        width: 90%;
        height: 150px;
        margin: 16px auto;
        border: 1px solid #000;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        -ms-border-radius: 5px;
        border-radius: 5px;
        background-color: #fff;
      }
      div:nth-child(1){
        margin: 0 auto;
      }
      .web{
        text-align: left;
        position: relative;
        overflow: hidden;
        .web_top{
          margin: 10px 10px;
          h2{
            margin: 5px 0;
          }
          p{
            font-size: 15px;
          }
        }
        .web_bom{
          background-color: #5f5f5f;
          height: 100px;
          width: 100%;
          position: absolute;
          bottom: -75px;
          left: 0;
          color: #fff;
          border-top: 1px solid #000;
          transition: bottom 1s ease-out;
          -moz-transition: bottom 1s ease-out;	/* Firefox 4 */
          -webkit-transition: bottom 1s ease-out;	/* Safari 和 Chrome */
          -o-transition: bottom 1s ease-out;
          p{
            font-size: 15px;
          }

        }
        .web_bom:hover{
          bottom: 0px;
        }
      }
    }
  }


  @media only screen and (min-width: 320px) and (max-width: 750px) {
    .homes-content{
      height: 100/32rem;
      width: 100%;
      border: 2/32rem dotted #000000;
      h1{
        line-height: 100/32rem;
        font-size: 20/32rem;
      }
    }
  }

</style>
