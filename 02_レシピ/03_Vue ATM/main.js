new Vue({
  el: "#app1",
  data: {
    textInput: "",
    zandaka: 0,
  },
  logs: [
    {
      日付: "",
      操作: "",
      金額: "",
    },
  ],
  computed: {
    isDisabled: function() {
      return this.zandaka < this.textInput
    },
  },
  methods: {
    nyukin: function() {
      this.zandaka += Number(this.textInput)
      this.logs.日付 = new Date()
      this.logs.操作 = "入金"
      this.logs.金額 = this.textInput
    },
    syukkin: function() {
      this.zandaka -= Number(this.textInput)
      this.logs.日付 = new Date()
      this.logs.操作 = "出金"
      this.logs.金額 = this.textInput
    },
  },
})
//   methods: {
//     nyukin: function() {
//       this.zandaka += Number(this.textInput)
//     },
//   },
// })

// new Vue({
//   el: "#app3",
//   data: {
//     logs: [
//       {
//         date: new Date(),
//         type: "入金",
//         money: 1000,
//       },
//       {
//         date: new Date(),
//         type: "出金",
//         money: 1000,
//       },
//     ],
//   },
//   methods: {},
// })
