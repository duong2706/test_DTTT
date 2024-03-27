// test.js

// Đây là một ví dụ unit test cơ bản sử dụng thư viện Mocha và Chai
const assert = require('chai').assert;
const { add, subtract } = require('./your_code'); // Thay đổi 'your_code' thành tên thư mục hoặc đường dẫn tới mã của bạn

describe('Math operations', function() {
  it('Should add two numbers correctly', function() {
    assert.equal(add(2, 3), 5);
  });

  it('Should subtract two numbers correctly', function() {
    assert.equal(subtract(5, 3), 2);
  });
});
