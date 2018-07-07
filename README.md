
构建一个项目，用于对react-native一些组件的功能、使用以及深层的api进行测试、使用

# 项目运行步骤
第一步：npm install <br>
第二步：react-native link <br>
第三步：react-native run-android<br>



# 技术框架
"native-base": "^2.3.8", <br>
"react": "16.0.0", <br>
"react-native": "0.51.0", <br>
"react-native-easy-toast": "^1.1.0", <br>
"react-navigation": "^1.5.6"<br>

  # FlatList
  ItemSeparatorComponent：分割线组件，
  ListFooterComponent：结尾组件
  ListHeaderComponent：头组件
  data：列表数据
  horizontal：设置为true则变为水平列表。
  numColumns：列数 组件内元素必须是等高的,无法支持瀑布流布局
  columnWrapperStyle：numColumns大于1时，设置每行的样式
  getItemLayout：如果我们知道行高可以用此方法节省动态计算行高的开销。
  refreshing：是否正在加载数据
  onRefresh：设置此属性需要一个标准的 RefreshControl 控件，刷新数据
  renderItem：渲染每个组件
  onViewableItemsChanged：当一个新的Item渲染或者隐藏 的时候调用此方法。参数：info: {viewableItems: Array, changed: Array} viewableItems：当前可见的Item，changed：渲染或者隐藏的Item。
  scrollToEnd({params?: ?{animated?: ?boolean}})：滚动到末尾，如果不设置getItemLayout属性的话，可能会比较卡。
  scrollToIndexparams: {animated?: ?boolean, index: number, viewPosition?: number}：滚动到制定的位置
  scrollToOffset(params: {animated?: ?boolean, offset: number})：滚动到指定的偏移的位置。

  该版本主要测试实现 FlatList 组件的功能；

  ![列表效果](https://github.com/Y-JH/csdn-blog/blob/blog0706/show_img/flat_list.png)
