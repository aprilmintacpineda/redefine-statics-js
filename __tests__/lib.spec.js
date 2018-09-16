/** @format */

import redefineStatics from '../lib';

class ChildObj {
  static staticMethod () {}
  static staticMethodTwo () {}
  nonStaticMethod () {}
}

describe('redefine statics', () => {
  test('copies static from child to parent', () => {
    class ParentObj {}
    redefineStatics(ParentObj, ChildObj);

    expect(ParentObj.staticMethod).toEqual(ChildObj.staticMethod);
    expect(ParentObj.staticMethodTwo).toEqual(ChildObj.staticMethodTwo);
    expect(ParentObj.nonStaticMethod).toEqual(undefined);
  });

  test('does not copy static method on blocklist', () => {
    class ParentObj {}
    redefineStatics(ParentObj, ChildObj, ['staticMethodTwo']);

    expect(ParentObj.staticMethod).toEqual(ChildObj.staticMethod);
    expect(ParentObj.staticMethodTwo).toEqual(undefined);
    expect(ParentObj.nonStaticMethod).toEqual(undefined);
  });

  test('does not overwrite ParentObj\'s static method', () => {
    class ParentObj {
      static staticMethodTwo () {}
    }

    redefineStatics(ParentObj, ChildObj);

    expect(ParentObj.staticMethod).toEqual(ChildObj.staticMethod);
    expect(ParentObj.staticMethodTwo).toEqual(ParentObj.staticMethodTwo);
  });
});
