<template>
  <avue-form ref="form" v-model="obj" :option="option">
    <el-button type="primary" @click="handleSubmit">提 交</el-button>
    <el-button @click="handleEmpty">清 空</el-button>
  </avue-form>
</template>

<script>
export default {
  name:'page-files-contract',
  data() {
    return {
      obj: {
        name: "11"
      },
      option: {
        column: [
          {
            label: "姓名",
            prop: "name",
            rules: [
              {
                required: true,
                message: "请选择姓名",
                trigger: "blur"
              }
            ]
          },
          {
            label: "密码",
            prop: "password",
            type: "password",
            rules: [
              {
                required: true,
                message: "请选择密码",
                trigger: "blur"
              }
            ]
          },
          {
            label: "开关",
            prop: "switch",
            type: "switch",
            dicData: [
              {
                label: "关闭",
                value: 0
              },
              {
                label: "启动",
                value: 1
              }
            ],
            rules: [
              {
                required: true,
                message: "请选择开关",
                trigger: "blur"
              }
            ]
          },
          {
            label: "日期",
            prop: "datetime",
            type: "datetime",
            format: "yyyy年MM月dd日 hh时mm分ss秒",
            rules: [
              {
                required: true,
                message: "请选择文本",
                trigger: "blur"
              }
            ]
          },
          {
            label: "日期",
            prop: "date",
            type: "date",
            format: "yyyy年MM月dd日",
            rules: [
              {
                required: true,
                message: "请选择日期",
                trigger: "blur"
              }
            ]
          },
          {
            label: "时间",
            prop: "time",
            type: "time",
            row: true,
            format: "hh小时mm分",
            rules: [
              {
                required: true,
                message: "请选择时间",
                trigger: "blur"
              }
            ]
          },
          {
            label: "单选",
            prop: "radio",
            type: "radio",
            tip: "这是一个小提示",
            tags: true,
            dicData: [
              {
                label: "单程",
                value: 0
              },
              {
                label: "往返",
                value: 1
              }
            ],
            rules: [
              {
                required: true,
                message: "请选择单选",
                trigger: "blur"
              }
            ]
          },
          {
            label: "多选",
            prop: "checkbox",
            type: "checkbox",
            tip: "这是一个小提示",
            tags: true,
            row: true,
            dicData: [
              {
                label: "飞机",
                value: 1
              },
              {
                label: "火车",
                value: 2
              },
              {
                label: "动车",
                value: 3
              },
              {
                label: "其他",
                value: 4
              }
            ],
            rules: [
              {
                required: true,
                message: "请选择多选",
                trigger: "blur"
              }
            ]
          },
          {
            label: "文本",
            prop: "textarea",
            type: "textarea",
            minRows: 3,
            maxRows: 4,
            rules: [
              {
                required: true,
                message: "请选择文本",
                trigger: "blur"
              }
            ]
          }
        ]
      }
    };
  },
  mounted() {
    setTimeout(() => {
      this.obj = {
        password: "111",
        province: "130000",
        city: "130100",
        area: "130101",
        radio: 0,
        checkbox: [1, 3],
        switch: 1,
        datetime: "2019-01-01 23:22:22",
        date: "2019-01-01",
        time: "03:22"
      };
    }, 0);
  },
  methods: {
    handleEmpty() {
      this.$refs.form.resetForm();
    },
    handleSubmit() {
      this.$refs.form.validate(vaild => {
        if (vaild) {
          this.$message.success(JSON.stringify(this.obj0));
        }
      });
    }
  }
};
</script>

<!--
需要注意
为了适配移动端 直接修改了引用的element-ui的引用样式 修改如下：
.el-form-item__error{color:# 节点后的 position:absolute; 被删除
 -->