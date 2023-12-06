const Element = {
  data() {
    return {
      input: false, // display element text by default
    };
  },
  template: `
  <li> 
  <span v-if="!input"> {{element.text}} </span>
  <input v-else type="text" :value="element.text" 
   @blur="modify($event)" 
                ref="refInput" />
      <button @click="remove()"> Remove </button> 
      <button @click="input=true"> Modify </button>
  </li>
  `,
  props: ["element"],
  methods: {
    remove() {
      // process the click on the Remove button
      this.$emit("remove", { id: this.element._id });
    },
    modify(event) {
      var value = event.target.value; // value entered
      // in the field
      this.input = false; // delete input field
      this.$emit("modify", { id: this.element._id, value: value });
    },
  },
  emits: ["remove", "modify"],
  updated() {
    // check that the ref="refInput" attribute exists, and
    // if so, give focus to the input field
    if (this.$refs.refInput) this.$refs.refInput.focus();
  },
};
export default Element;
