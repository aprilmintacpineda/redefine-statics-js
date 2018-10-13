/** @format */

import redefineStatics from './lib';

class ParentComponent {
  nonStaticMethodParent () {}
}

class ChildComponent {
  static staticMethod () {}
  nonStaticMethod () {}
}

redefineStatics(ParentComponent, ChildComponent);

// eslint-disable-next-line
console.log(ParentComponent);
