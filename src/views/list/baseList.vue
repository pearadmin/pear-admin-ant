<template>
  <div>
    <a-card>
      <h2>基础列表</h2>
      <p>标准的列表，包含增删改查等基础操作.</p>
    </a-card>
    <a-card style="margin: 10px">
      <a-list
        class="demo-loadmore-list"
        :loading="loading"
        item-layout="horizontal"
        :data-source="data"
      >
        <template v-slot:loadMore>
          <div
            v-if="showLoadingMore"
            :style="{
              textAlign: 'center',
              marginTop: '12px',
              height: '32px',
              lineHeight: '32px',
            }"
          >
            <a-spin v-if="loadingMore" />
            <a-button v-else @click="onLoadMore"> loading more </a-button>
          </div>
        </template>
        <template v-slot:renderItem="{ item }">
          <a-list-item>
            <template v-slot:actions>
              <a>edit</a>
              <a>more</a>
            </template>
            <a-list-item-meta
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            >
              <template v-slot:title>
                <a href="https://www.antdv.com/">{{ item.name.last }}</a>
              </template>
              <template v-slot:avatar>
                <a-avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />
              </template>
            </a-list-item-meta>
            <div>content</div>
          </a-list-item>
        </template>
      </a-list>
    </a-card>
  </div>
</template>
<script>
import reqwest from 'reqwest';

const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

export default {
  data() {
    return {
      loading: true,
      loadingMore: false,
      showLoadingMore: true,
      data: [],
    };
  },
  mounted() {
    this.getData(res => {
      this.loading = false;
      this.data = res.results;
    });
  },
  methods: {
    getData(callback) {
      reqwest({
        url: fakeDataUrl,
        type: 'json',
        method: 'get',
        contentType: 'application/json',
        success: res => {
          callback(res);
        },
      });
    },
    onLoadMore() {
      this.loadingMore = true;
      this.getData(res => {
        this.data = this.data.concat(res.results);
        this.loadingMore = false;
        this.$nextTick(() => {
          window.dispatchEvent(new Event('resize'));
        });
      });
    },
  },
};
</script>
<style>
.demo-loadmore-list {
  min-height: 350px;
}
</style>