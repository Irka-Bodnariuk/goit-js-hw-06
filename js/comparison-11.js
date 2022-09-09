class StringBuilder {
  constructor(initialValue) {
    this.value = initialValue;
  }
  getValue() {
    return this.value;
  }
  padEnd(str) {
    this.value = [...this.value, ...str].join('');
    // this.value = this.value.join('');
  }
  padStart(str) {
    this.value = [...str, ...this.value].join('');
    // this.value = this.value.join('');
  }
  padBoth(str) {
    this.value = [...str, ...this.value, ...str].join('');
    // this.value = this.value.join('');
  }
}
// Change code above this line
const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
