class Answer {

}

var calc = new Vue({
  el: "#app",
  data() {
    return {
      calculate: '',
      beforeCalc: '',
      answer: '',
      beforeAns: '',
      button: {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        zero: 0,
        zero2: '00',
        dot: ".",
        del: "DEL",
        ac: "AC",
        multiple: " × ",
        divide: " ÷ ",
        add: " + ",
        minus: " - "
      }
    }
  },
  computed: {
    disabled() {
      return this.calculate === '';
    }
  },
  methods: {
    display: function(event) {
      this.beforeCalc = this.calculate;
      this.calculate += event.target.innerHTML;
    },
    deleteOne: function() {
      let cur = this.calculate;
      if(cur[cur.length -1] === " ") {
        this.calculate = cur.slice(0, cur.length - 3);
      } else this.calculate = cur.slice(0, cur.length - 1);
    },
    deleteAll: function() {
      this.calculate = '';
      this.answer = '';
      this.beforeAns = '';
    },
    calc(num1, num2, operand) {
      return String(operand === "×" ? Number(num1) * Number(num2) : Number(num1) / Number(num2));
    },
    doCalculate: function() {
      let formula = this.calculate.split(" ");
      for (let i = 1; i < formula.length; i += 2) {
        if (formula[i] === "×" || formula[i] === "÷") {
          formula.splice(i - 1, 3, this.calc(formula[i - 1], formula[i + 1], formula[i]));
        }
      }
      let result = Number(formula[0]);
      console.log(formula);
      for(let i = 1; i < formula.length; i += 2) {
        if (formula[i] === "+") result += Number(formula[i + 1]);
        else if (formula[i] === "-") result -= Number(formula[i + 1]);
      }
      this.calculate = "";
      this.answer = result;
      this.beforeAns = result;
    },
    displayAnswer: function() {
      this.calculate += this.beforeAns;
    }
  }
});
