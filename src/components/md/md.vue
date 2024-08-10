<template>
  <div class="backgroundColorItem">
    <div class="centerDivItem">
      <div v-html="main"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps } from "vue";

//接受父组件传过来的参数
const props = defineProps({
  main: {
    type: String,
    default: "",
  },
});
const resHtml = ref(
  '<h1>MarkDown示例</h1>\r\n\r\n<h3>Header 3</h3>\r\n\r\n<blockquote><p>This is a blockquote.</p><p> &gt; This is the second paragraph in the blockquote.</p><h2>This is an H2 in a blockquote</h2></blockquote>\r\n\r\n<p><img alt="这是图片" title="Magic Gardens" width="40%" src="https://th.bing.com/th/id/R.6b5df1bfe0e4778a44dba0753cd169c8?rik=QRQIMqvjWRCO5Q&amp;riu=http%3a%2f%2fpic39.nipic.com%2f20140321%2f8857347_232251363165_2.jpg &amp;ehk=7oAaMo6LCHJc%2bqpQ0IPvcH7v69jGRQhb2vDz%2fOd5720%3d&amp;risl=&amp;pid=ImgRaw&amp;r=0" /></p>'
);

onMounted(() => {
  console.log(props);
});
</script>

