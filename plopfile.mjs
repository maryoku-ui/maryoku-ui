// frameworkMeta.ts
var FRAMEWORKCHOICES = [
  'react' /* REACT */,
  'vue' /* VUE */,
  'webcomponent' /* WEBCOMPONENT */,
  'svelte' /* SVELTE */,
  'angular' /* ANGULAR */,
  'solid' /* SOLID */,
  'preact' /* PREACT */,
  'qwik' /* QWIK */,
];
var VUEDEVDPS = {
  '@vitejs/plugin-vue': '^3.2.0',
  'vue-tsc': '^1.0.9',
};
var VUEDEPS = {
  vue: '^3.2.45',
};
var VUEPLUGINS = {
  vue: 'import vue from "@vitejs/plugin-vue"',
};
var REACTDEPS = {
  react: '^18.2.0',
  'react-dom': '^18.2.0',
};
var REACTDEVDPS = {
  '@types/react': '^18.0.25',
  '@types/react-dom': '^18.0.8',
  '@vitejs/plugin-react': '^2.2.0',
};
var REACTPLUGINS = {
  react: 'import react from "@vitejs/plugin-react"',
};
var PREACTDEPS = {
  preact: '^10.11.3',
};
var PREACTDEVDPS = {
  '@preact/preset-vite': '^2.4.0',
};
var PREACTPLUGINS = {
  preact: 'import preact from "@preact/preset-vite"',
};
var SVELTEDEPS = {};
var SVELTEDEVDEPS = {
  '@sveltejs/vite-plugin-svelte': '^1.1.1',
  '@tsconfig/svelte': '^3.0.0',
  svelte: '^3.53.1',
  'svelte-check': '^2.9.2',
  'svelte-preprocess': '^4.10.7',
  tslib: '^2.4.1',
};
var SVELTEPLUGINS = {
  svelte: 'import { svelte } from "@sveltejs/vite-plugin-svelte"',
};
var QWIKDEPS = {
  '@builder.io/qwik': 'latest',
};
var QWIKDEVDPS = {};
var QWIKPLUGINS = {
  qwikVite: 'import { qwikVite } from "@builder.io/qwik/optimizer"',
};
var ANGULARDEPS = {};
var ANGULARDEVDPS = {
  '@nxext/angular-vite': 'latest',
};
var ANGULARPLUGINS = {
  ViteAngularPlugin: 'import { ViteAngularPlugin } from "@nxext/angular-vite"',
};
var SOLIDDEPS = {
  solid: 'latest',
};
var SOLIDDEVDPS = {
  'vite-plugin-solid': 'latest',
  'babel-preset-solid': 'latest',
};
var SOLIDPLUGINS = {
  solidPlugin: 'import solidPlugin from "vite-plugin-solid"',
};
var ESCAPETSCFRAMEWORK = ['solid' /* SOLID */, 'svelte' /* SVELTE */];
var JSX = ['react' /* REACT */, 'preact' /* PREACT */, 'qwik' /* QWIK */, 'vue' /* VUE */];
var checkJSX = (framework) => {
  return JSX.includes(framework);
};
var generateBuildCommand = (framework) => {
  const baseCommand = 'vite build';
  const tsc = ESCAPETSCFRAMEWORK.includes(framework)
    ? ''
    : framework === 'vue' /* VUE */
    ? 'vue-tsc & '
    : 'tsc & ';
  return `${tsc}${baseCommand}`;
};
var generateGlobals = (deps) => {
  return Object.fromEntries(
    Object.keys(deps).map((key) => [
      key,
      key.replace(/(^[a-z]?)([a-z]*)(-[a-z]?)/, (_, initial, reset, hyphen) => {
        return [
          initial.toLocaleUpperCase(),
          reset,
          hyphen.replace('-', '').toLocaleUpperCase(),
        ].join('');
      }),
    ]),
  );
};
var generateFrameworkOptions = (framework) => {
  let options = {};
  switch (framework) {
    case 'angular' /* ANGULAR */:
      options = {
        plugins: ANGULARPLUGINS,
        peerDependencies: ANGULARDEPS,
        devDependencies: {
          ...ANGULARDEPS,
          ...ANGULARDEVDPS,
        },
        globals: generateGlobals(ANGULARDEPS),
      };
      break;
    case 'preact' /* PREACT */:
      options = {
        plugins: PREACTPLUGINS,
        peerDependencies: PREACTDEPS,
        devDependencies: {
          ...PREACTDEPS,
          ...PREACTDEVDPS,
        },
        globals: generateGlobals(PREACTDEPS),
      };
      break;
    case 'qwik' /* QWIK */:
      options = {
        plugins: QWIKPLUGINS,
        peerDependencies: QWIKDEPS,
        devDependencies: {
          ...QWIKDEPS,
          ...QWIKDEVDPS,
        },
        globals: {
          '@builder.io/qwik': 'Qwik',
        },
      };
      break;
    case 'react' /* REACT */:
      options = {
        plugins: REACTPLUGINS,
        peerDependencies: REACTDEPS,
        devDependencies: {
          ...REACTDEPS,
          ...REACTDEVDPS,
        },
        globals: generateGlobals(REACTDEPS),
      };
      break;
    case 'solid' /* SOLID */:
      options = {
        plugins: SOLIDPLUGINS,
        peerDependencies: SOLIDDEPS,
        devDependencies: {
          ...SOLIDDEPS,
          ...SOLIDDEVDPS,
        },
        globals: generateGlobals(SOLIDDEPS),
      };
      break;
    case 'svelte' /* SVELTE */:
      options = {
        plugins: SVELTEPLUGINS,
        peerDependencies: SVELTEDEPS,
        devDependencies: {
          ...SVELTEDEPS,
          ...SVELTEDEVDEPS,
        },
        globals: generateGlobals(SVELTEDEPS),
      };
      break;
    case 'vue' /* VUE */:
      options = {
        plugins: VUEPLUGINS,
        peerDependencies: VUEDEPS,
        devDependencies: {
          ...VUEDEPS,
          ...VUEDEVDPS,
        },
        globals: generateGlobals(VUEDEPS),
      };
      break;
    default:
      options = {
        plugins: {},
        peerDependencies: {},
        devDependencies: {},
        globals: {},
      };
  }
  return options;
};

// package.json
var devDependencies = {
  '@babel/core': '^7.19.3',
  '@babel/preset-env': '^7.19.4',
  '@changesets/cli': '^2.25.0',
  '@commitlint/config-conventional': '^17.1.0',
  '@types/node': '^18.11.0',
  'babel-plugin-transform-async-to-promises': '^0.8.18',
  commitizen: '^4.2.5',
  'conventional-changelog-cli': '^2.2.2',
  'cross-env': '^7.0.3',
  'cz-conventional-changelog': '^3.3.0',
  del: '^7.0.0',
  'fs-extra': '^10.1.0',
  gulp: '^4.0.2',
  'gulp-babel': '^8.0.0',
  'gulp-less': '^5.0.0',
  'gulp-typescript': '^6.0.0-alpha.1',
  'lint-staged': '^13.0.3',
  'new-github-release-url': '^2.0.0',
  plop: '^3.1.1',
  prettier: '^2.7.1',
  'prettier-plugin-astro': '^0.5.5',
  'ts-node': '^10.9.1',
  tsup: '^6.4.0',
  typescript: '^4.8.4',
  vite: '^3.2.4',
  yorkie: '^2.0.0',
  zx: '^7.1.1',
};

// plop/plopfile.ts
var viteVersion = devDependencies.vite;
var tsVersion = devDependencies.typescript;
var plopfile_default = (plop) => {
  plop.setGenerator('pkg', {
    description: 'Generate a framework package',
    prompts: [
      {
        type: 'list',
        name: 'packageName',
        message: 'Which framework would u create:',
        choices: FRAMEWORKCHOICES,
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter u package description:',
      },
      {
        type: 'list',
        name: 'outDir',
        message: 'Choose package location: ',
        choices: ['packages', 'examples'],
      },
    ],
    actions(answers) {
      const excuteAnswers = answers;
      const { packageName, description } = excuteAnswers;
      const actions = [];
      if (Object.keys(excuteAnswers).filter(Boolean).length) {
        excuteAnswers[packageName] = true;
        excuteAnswers.jsx = checkJSX(packageName);
        excuteAnswers.buildCommand = generateBuildCommand(packageName);
        const {
          devDependencies: devDependencies2,
          peerDependencies,
          globals,
          plugins,
        } = generateFrameworkOptions(packageName);
        excuteAnswers.devDependencies = {
          typescript: tsVersion,
          vite: viteVersion,
          ...devDependencies2,
        };
        excuteAnswers.peerDependencies = peerDependencies;
        excuteAnswers.globals = globals;
        excuteAnswers.plugins = plugins;
        if (!description.length) {
          excuteAnswers.description = `maryoku-ui ${packageName} UI Library`;
        }
        actions.push({
          type: 'addMany',
          templateFiles: 'plop/package/**',
          destination: `./{{outDir}}/{{dashCase packageName}}`,
          base: 'plop/package',
          data: excuteAnswers,
          abortOnFail: true,
          ...(packageName !== 'svelte' /* SVELTE */
            ? { globOptions: { ignore: ['plop/package/svelte.config.js.hbs'] } }
            : {}),
        });
      }
      return actions;
    },
  });
};
export { plopfile_default as default };
