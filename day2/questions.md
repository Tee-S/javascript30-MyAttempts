1. why does:
   this.testDate.setSeconds(this.testDate.getSeconds() + 10);
not work (undefined testDate) when:
  var testDate = new Date();
should be available in global scope?

2. why can't I put:
transition-timing-function: cubic-bezier(0.02, 2.59, 0.58, 1);
into multi-selector '#clockface> div'? I need to copy paste to each
clock hand.