    'use strict';
    var vvod = [];
    var k;
    function input() {
      vvod.push(document.getElementById('el_in').value);
      document.getElementById('vvod').innerHTML = vvod;
    }
    function k_input() {
      k = document.getElementById('k_in').value;
      document.getElementById('k_out').innerHTML = k;
    }

    var combinations = (function () {
      var res = [];
      function combinations(arr, k, start, idx, current) {
        if (idx === k) {
          res.push(current.slice());
          return;
        }
        for (var i = start; i < arr.length; i += 1) {
          current[idx] = arr[i];
          combinations(arr, k, i + 1, idx + 1, current);
        }
      }
      return function (arr, k) {
        res = [];
        combinations(arr, k, 0, 0, []);
        var temp = res;
        // Free the extra memory
        res = null;
        return temp;
      };
    }());
    function task_1() {
      let time = performance.now();
      let r = combinations(vvod, Number(k));
      console.log(r);
      let arr = [];
      for (let i = 0; i < r.length; i++) {
        r[i].splice(0, 1, ' ' + r[i][0]);
        r[i].splice(r[i].length - 1, 1, r[i][r[i].length - 1] + ' |');
        arr.push(r[i]);
      }
      time = performance.now() - time;
      document.getElementById('time1').innerHTML = time;
      return arr;
    }

    var vvod2 = [];
    function input_2() {
      vvod2.push(document.getElementById('el_in_2').value);
      document.getElementById('vvod2').innerHTML = vvod2;
    }
    function k_input_2() {
      k = document.getElementById('k_in_2').value;
    }
    function perm(arr) {
      if (arr.length > 1) {
        var beg = arr[0];
        var arr1 = perm(arr.slice(1));
        var arr2 = [];
        var l = arr1[0].length;
        for (var i = 0; i < arr1.length; i++)
          for (var j = 0; j <= l; j++)
            arr2.push(arr1[i].slice(0, j).concat(beg, arr1[i].slice(j))); 
        return arr2;
      } else { 
        return [arr];
      }
    }
    function task_2() {
      let time = performance.now();
      let r = perm(vvod2);
      let arr = [];
      for (let i = 0; i < r.length; i++) {
        r[i].splice(0, 1, ' ' + r[i][0]);
        r[i].splice(r[i].length - 1, 1, r[i][r[i].length - 1] + ' |');
        arr.push(r[i]);
      }
      time = performance.now() - time;
      document.getElementById('time2').innerHTML = time;
      return arr;
    }