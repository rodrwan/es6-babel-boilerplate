const chai = require('chai');
const dotenv = require('dotenv');
const fs = require('fs');

if (fs.existsSync('.env')) {
  dotenv.load();
}
chai.should();

describe('First test', () => {
  it('Should pass the test', () => {
    const helloWorld = 'Hello World';

    helloWorld.should.to.equal('Hello World');
  });
});
