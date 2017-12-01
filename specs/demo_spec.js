'use strict';

var demo = require('../main/demo.js');

describe('测试描述：选出一个数组中的奇数和偶数', function () {

    var collection_a = [1, 2, 3, 4, 5];
    var collection_b = [1, 3, 5];
    var collection_c = [2, 4];

    it('测试用例1：选出奇数', function() {

        var result = demo(collection_a);
        expect(result).toEqual(collection_b);
    });

    it('测试用例2:选出偶数', function() {

        var result = demo(collection_a);
        expect(result).toEqual(collection_c);
    });
});

