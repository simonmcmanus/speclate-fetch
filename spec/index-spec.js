
var fetch = require('../index').readFile;
var sinon = require('sinon');

describe('fetch', function () {

   describe('give a good url', function () {
       var nextSpy;
        beforeEach(function (next) {
            nextSpy = sinon.spy(next);
            fetch('/', {}, nextSpy);
        })

        it('should not pass an error', function () {
            expect(nextSpy.args[0][0]).toEqual(null)
        })

        it('should return some html', function () {
            expect(nextSpy.args[0][1]).toContain('<html');
        })

        it('should only call the callback once', function() {
            expect(nextSpy.calledOnce);
        });
  })

  describe('give a bad url', function () {
      var nextSpy;
    beforeEach(function (next) {
        nextSpy = sinon.spy(next);
        fetch('/asd', {}, nextSpy);
    })

    it('give a not found error as the first param', function () {
        expect(nextSpy.args[0][0].message).toEqual('Not Found')
    });

    it('should only call the callback once', function() {
        expect(nextSpy.calledOnce);
    });
  })
})
