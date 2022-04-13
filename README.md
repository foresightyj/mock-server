# docs

[Controllers | NestJS - A progressive Node.js framework]( https://docs.nestjs.com/controllers )

[Overview - CLI | NestJS - A progressive Node.js framework]( https://docs.nestjs.com/cli/overview )

# faq

if you see something like this:

```
Error [ERR_MODULE_NOT_FOUND]: Cannot find module 'C:\Users\yuanjian\Desktop\mock-server\node_modules\lodash\random' imported from C:\Users\yuanjian\Desktop\mock-server\dist\utils.js
Did you mean to import lodash/random.js?
    at new NodeError (internal/errors.js:322:7)
    at finalizeResolution (internal/modules/esm/resolve.js:308:11)
    at moduleResolve (internal/modules/esm/resolve.js:731:10)
    at Loader.defaultResolve [as _resolve] (internal/modules/esm/resolve.js:842:11)
    at Loader.resolve (internal/modules/esm/loader.js:89:40)
    at Loader.getModuleJob (internal/modules/esm/loader.js:242:28)
    at ModuleWrap.<anonymous> (internal/modules/esm/module_job.js:76:40)
    at link (internal/modules/esm/module_job.js:75:36)

```

It is mostly likely you need to change relative import like `import ... from "src/utils"` or `import ... from "./utils"` to `import ... from "./utils.js"` to meet the **ESM** requirement as per: [Pure ESM package]( https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c )

