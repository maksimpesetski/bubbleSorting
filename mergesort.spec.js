
describe('Split Array function', function () {
  it('is able to split an array into two halves', function () {
    expect(split([1, 2])).toEqual([[1], [2]]);
  });

});

describe('Merge function', function () {
  it('is able to merge two sorted arrays into one sorted array', function () {
    expect(merge([1, 3, 4], [2, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});


describe('MergeSort', function () {


  it('handles an empty array', function () {
    expect(mergeSort([])).toEqual([]);
  });

  it('chaecks if the passed arr is sorted, if so just returns it', function () {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('sorts the passed arr from left to right', function () {
    expect(mergeSort([2, 5, 1, 3, 4])).toEqual([1, 2, 3, 4, 5]);
  });

  it('can handle strings', function () {
    expect(mergeSort(['bubble', 'apple', 'Dog', 'test'])).toEqual(['Dog', 'apple', 'bubble', 'test']);
  })

  it('harder sorts the passed arr from left to right', function () {
    expect(mergeSort([2, 78, 7, 5, 1, 3, 4])).toEqual([1, 2, 3, 4, 5, 7, 78]);
  });

  it('harder sorts the passed arr from left to right with duplicated nums', function () {
    expect(mergeSort([2, 78, 7, 2, 2, 2, 1, 5, 1, 3, 4])).toEqual([1, 1, 2, 2, 2, 2, 3, 4, 5, 7, 78]);
  });
});
