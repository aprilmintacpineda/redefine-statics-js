/** @format */

import redefineStatics from './lib';

class ParentComponent {
  nonStaticMethodParent () {}
}

class ChildComponent {
  static staticMethod () {}
  nonStaticMethod () {}
}

console.log(redefineStatics(ParentComponent, ChildComponent));
