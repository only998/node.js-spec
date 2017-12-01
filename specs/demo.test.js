'use strict';

var demo = require('../main/demo.js');
var expect = require('chai').expect;

describe('测试描述：选出一个数组中偶数', function () {

    var collection_a = [1, 2, 3, 4, 5];
    var collection_b = [2,4];

    it('测试用例：选出偶数', function() {

        var result = demo(collection_a);
        expect(result).to.be.eql(collection_b);
    });
});

