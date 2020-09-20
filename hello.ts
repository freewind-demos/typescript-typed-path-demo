import get from 'lodash/fp/get';
import {typedPath, TypedPathNode} from 'typed-path';

type FormState = {
  aaa?: {
    bbb?: string
  }
  mmm?: {
    nnn?: {
      ooo?: string
      ppp?: number
    }[]
  }
}

const formState: FormState = {
  aaa: {
    bbb: 'aaabbb'
  },
  mmm: {
    nnn: [
      {},
      {ooo: 'o1'},
      {ppp: 1},
      {ooo: 'o2', ppp: 2},
    ]
  }
}

const path1 = typedPath<FormState>().aaa?.bbb; // typing check!
console.log("path1", {
  path: path1?.$path,
  value: get(path1?.$path!, formState)
})

const path2 = typedPath<FormState>().mmm?.nnn?.[3]?.ooo; // typing check!
console.log("path2", {
  path: path2?.$path,
  value: get(path2?.$path!, formState)
})

