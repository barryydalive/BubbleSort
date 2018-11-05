describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array with one element', function(){
    expect( bubbleSort([1])).toEqual([1]);
  });

  it('sorts correctly', function(){
    expect (bubbleSort([5,6,12,3,18,2,1])).toEqual([1,2,3,5,6,12,18]);
  });
});
