<template>
  <main>
    <div class="homes-content">
      <h1>{{msg}}内容区域,待更新...</h1>
    </div>
  </main>
</template>

<script>
  // import boot from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
  export default {
    name: 'NODEJS',
    data () {
      return {
        msg: '这是关于我的nodejs技术页面'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @media only screen and (min-width: 751px){
    .homes-content{
      height: 655px;
      width: 100%;
      margin: 5px 0;
      border: 2px dotted #000000;
      h1{
        line-height: 655px;

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
