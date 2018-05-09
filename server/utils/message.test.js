const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct meesage object', () => {
    var from = 'DJ';
    var text = 'hello ya andrew';
    var message = generateMessage(from, text);
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  })
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'admin';
    var latitude = 123;
    var longitude = 111;
    var url = 'https://www.google.com/maps?q=123,111';
    var message = generateLocationMessage(from, latitude, longitude);
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, url});        
  });
});
