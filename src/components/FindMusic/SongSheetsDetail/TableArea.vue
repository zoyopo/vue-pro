
  <template>
  <el-table :data="songsList" @row-click="rowClick" style="width: 100%">
    <el-table-column type="index">
    </el-table-column>
    <el-table-column prop="name" label="音乐标题" width="180">
      <!-- <template slot-scope="scope">
          {{scope.row.}}
        </template> -->
    </el-table-column>
    <el-table-column prop="singer" label="歌手" width="180">

    </el-table-column>
    <el-table-column prop="albumName" label="专辑">
    </el-table-column>
    <el-table-column prop="duration" label="时长">
    </el-table-column>
  </el-table>
</template>

  <script>
import "element-ui/lib/theme-chalk/index.css";
import { getUrlBySongId } from "api/api.js";
import { mapActions } from "vuex";
export default {
  props: {
    songsList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    rowClick(row, event, col) {
      // console.log(row);
      // let data=await getUrlBySongId(row.bMusic.id);
      // console.log(data)
      let songInfo = {
        theme: "pic",
        title:row.name,
        artist: row.singer,
        src: `http://music.163.com/song/media/outer/url?id=${row.id}.mp3`,
        pic: row.album.blurPicUrl
      };
      this.SET_CURRENT_SONG(songInfo);
    },
    ...mapActions([
      "SET_CURRENT_SONG"
      //'increment',  map `this.increment()` to `this.$store.dispatch('increment')`

      // `mapActions` also supports payloads:
      // 'incrementBy'  map `this.incrementBy(amount)` to `this.$store.dispatch('incrementBy', amount)`
    ])
  }
};
</script>