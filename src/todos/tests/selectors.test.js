import 'node-fetch';
import fetchMock from 'fetch-mock';
import { expect } from 'chai';
import sinon from 'sinon';
import { getCompletedTodos } from '../selectors';

describe('Testing selectors', () => {
  it('should return completed todos', () => {
    const fakeTodos = [{ text: '1', isCompleted: false }, { text: '2', isCompleted: true }];
    const expectedTodos = [{ text: '2', isCompleted: true }];
    const actual = getCompletedTodos.resultFunc(fakeTodos);
    expect(actual).to.deep.equal(expectedTodos);
  });
});
