import { expect, test, describe } from 'bun:test';
import { constructFromPrePost } from '../src/889-constructFromPrePost';

describe(constructFromPrePost.name, () => {
  test([1, 2, 3, 4, 5, 6, 7].toString(), () => {
    const preorder = [1, 2, 4, 5, 3, 6, 7];
    const postorder = [4, 5, 2, 6, 7, 3, 1];
    const expected = [1, 2, 3, 4, 5, 6, 7];
    const result = constructFromPrePost(preorder, postorder);
  });

  test([1].toString(), () => {
    const preorder = [1];
    const postorder = [1];
    const expected = [1];
    const result = constructFromPrePost(preorder, postorder);
  });
});
