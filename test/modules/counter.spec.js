import expect from 'expect'
import jsdom from 'mocha-jsdom'
import TestUtils from 'react-addons-test-utils'
import { Counter } from '../../src/modules/counter'

describe('Test should run', ()=>{
  jsdom();

  it('should add 1 and 1', ()=>{
    expect(1+1).toBe(2);
  });
});