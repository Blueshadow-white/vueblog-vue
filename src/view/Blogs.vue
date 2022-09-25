<template>
  <div class="mcontaner">
    <el-container style="padding: 0">
      <el-header style="box-shadow: 0px 10px 15px -15px #869c98;">
        <div style="display: flex;align-items: center;">
          <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=2021004699"
             style="display: flex;align-items: center;text-decoration:none;">
            <img src="https://s1.ax1x.com/2022/09/23/xkxDiR.png" style="float:left;height: 40px;width: 40px"/>
            <h2 style="float:left;height:20px;line-height:20px;color:#000000;">Blueahadow</h2>
          </a>
        </div>
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="4">
            <Header></Header>
          </el-col>
          <el-col :span="20">
            <div class="block">
              <el-timeline>

                <el-timeline-item :timestamp="blog.created" placement="top" v-for="blog in blogs">
                  <el-card>
                    <h4>
                      <router-link :to="{name: 'BlogDetail', params: {blogId: blog.id}}">
                        {{blog.title}}
                      </router-link>
                    </h4>
                    <p>{{blog.description}}</p>
                  </el-card>
                </el-timeline-item>

              </el-timeline>

              <el-pagination class="mpage"
                             background
                             layout="prev, pager, next"
                             :current-page="currentPage"
                             :page-size="pageSize"
                             :total="total"
                             @current-change=page>
              </el-pagination>

            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
      <div style="width:300px;margin:0 auto; padding:20px 0;">
        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=2021004699" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
          <img src="http://www.beian.gov.cn/img/new/gongan.png" style="float:left;"/>
          <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">晋ICP备 2021004699号</p></a>
      </div>
  </div>
</template>

<script>
  import Header from "../components/Header";
  export default {
    name: "Blogs",
    components: {Header},
    data(){
      return {
        blogs: {},
        currentPage: 1,
        total: 0,
        pageSize: 5
      }
    },
    methods: {
      page(currentPage) {
        const _this = this
        _this.$axios.get("/blogs?currentPage=" + currentPage).then(res => {
          // console.log(res)
          _this.blogs = res.data.data.records
          _this.currentPage = res.data.data.current
          _this.total = res.data.data.total
          _this.pageSize = res.data.data.size

        })
      }
    },
    created() {
      this.page(1)
    }
  }
</script>

<style scoped>
  .mpage {
    margin: 0 auto;
    text-align: center;
  }

</style>
