# JavaScript

## 1.本地对象、宿主对象、自定义对象

- 本地对象： ECMA-262 定义的类（引用类型）
  - Object、Function、Array、String、Boolean、Number、Date、RegExp、Error、EvalError、RangeError、ReferenceError、SyntaxError、TypeError、URIError
  - 内置对象：由 ECMAScript 实现提供的、独立于宿主环境的所有对象，在 ECMAScript 程序开始执行时出现
    - 不必明确实例化内置对象，它已被实例化了
    - 每个内置对象都是本地对象
    - Global、Math
- 宿主对象：由ECMAScript实现的宿主环境提供的对象
  - DOM、BOM
- 自定义对象：开发人员自己定义的对象
  - JS允许使用自定义对象，使JS应用及功能得到扩充



