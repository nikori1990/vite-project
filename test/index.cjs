const path = require('path')

console.log('path :>> ', __dirname)

console.log('path.resolve(__dirname) :>> ', path.resolve(__dirname))

console.log('path.resolve("/foo/bar", "./baz") :>> ', path.resolve('/foo/bar', './baz'))

console.log('path.resolve("../foo/bar", "./baz") :>> ', path.resolve('../foo/bar', './baz'))

console.log('path.resolve("./foo/bar", "./baz", "1") :>> ', path.resolve('./foo/bar', './baz', '1'))

console.log('process.cwd :>> ', process.cwd()) //当前目录
