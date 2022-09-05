`use strict`;

(function () {
    const ladder = {
        step: 0,
        up () {
            this.step++;
            return this;
        },
        down () {
            this.step--;
            return this;
        },
        showStep () { // показывает текущую ступеньку
            console.log(this.step);
        }
    };
    ladder.up().up().down().showStep(); // 1
})()