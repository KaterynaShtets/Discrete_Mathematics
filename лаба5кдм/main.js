var res = document.getElementById('out');
var res2 = document.getElementById('out2');
var res3 = document.getElementById('out3');
var res4 = document.getElementById('out4');
var res5 = document.getElementById('out5');
var res6 = document.getElementById('out6');

var num = 0;
var num;

function input() {
    num = document.getElementById('FibNum').value;
}
var count;

function inputHan() {
    count = document.getElementById('Hanoy').value;
}





function recfib(n) {
    if (n <= 2)
        return 1
    return recfib(n - 1) + recfib(n - 2)
}

function time1() {
    let t1 = (new Date()).getTime();
    res.innerHTML = recfib(num)
    t1 = (new Date()).getTime() - t1
    res.innerHTML = '  ' + ((t1 / 1000) + 'время выполнения расчетов рекурсивно') + ' ' + recfib(num) + ' = значение' + '  '
}

//=======================================================

var results = [0, 1];

function rectruefib(n) {

    if (n == 0) return results[0];

    if (n == 1) return results[1];

    if (!results[n]) {
        results[n] = rectruefib(n - 2) + rectruefib(n - 1);
    }
    return results[n];
}

function time6() {
    let t6 = (new Date()).getTime();
    res6.innerHTML = rectruefib(num)
    t6 = (new Date()).getTime() - t6
    res6.innerHTML = '  ' + ((t6 / 1000) + 'время выполнения расчетов рекурсивно(true)') + ' ' + rectruefib(num) + ' = значение' + '  '
}
//=========================================================================================================


function iterFib(n) {
    let f = []
    f[0] = 1, f[1] = 1;

    for (let i = 2; i <= n; i++) {
        f[i] = f[i - 1] + f[i - 2];
    }
    return f[n - 1]
}

function time2() {
    let t2 = (new Date()).getTime();
    res2.innerHTML = recfib(num)
    t2 = (new Date()).getTime() - t2
    res2.innerHTML = '  ' + ((t2 / 1000) + 'время выполнения расчетов итеративно') + ' ' + iterFib(num) + ' = значение' + '  '
}

//==========================================


function formFib(n) {

    let res = (1 / Math.sqrt(5)) * (Math.pow((1 + Math.sqrt(5)) / 2, n) - Math.pow((1 - Math.sqrt(5)) / 2, n))
    return Math.round(res)
}

function time3() {
    let t3 = (new Date()).getTime();
    res3.innerHTML = recfib(num)
    t3 = (new Date()).getTime() - t3
    res3.innerHTML = '  ' + ((t3 / 1000) + 'время выполнения расчетов формулой') + ' ' + formFib(num) + ' = значение' + '  '
}
//=============================================================================================

//===============================================================================================
var arr = []

function hanoy(n, s, d) {
    if (n) {
        let m = 6 - s - d; // номер промежуточного стержня
        hanoy(n - 1, s, m);
        arr.push([s + ' -> ' + d]);
        hanoy(n - 1, m, d);
    }
}

function time4() {
    let t4 = (new Date()).getTime();
    res3.innerHTML = hanoy(count, 2, 3)
    t4 = (new Date()).getTime() - t4
    res4.innerHTML = '  ' + ((t4 / 1000) + 'время выполнения расчетов рекурсивным алгоритмом')
    res5.innerHTML = arr
}