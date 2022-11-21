/**
 * @description framework meta info
 */

export enum FRAMEWORK {
  REACT = 'react',
  VUE = 'vue',
  WEBCOMPONENT = 'webcomponent',
  SVELTE = 'svelte',
  ANGULAR = 'angular',
  SOLID = 'solid',
  PREACT = 'preact',
  QWIK = 'qwik',
}

export const FRAMEWORKCHOICES: FRAMEWORK[] = [
  FRAMEWORK.REACT,
  FRAMEWORK.VUE,
  FRAMEWORK.WEBCOMPONENT,
  FRAMEWORK.SVELTE,
  FRAMEWORK.ANGULAR,
  FRAMEWORK.SOLID,
  FRAMEWORK.PREACT,
  FRAMEWORK.QWIK,
];

/** vue start */
export const VUEDEVDPS = {
  '@vitejs/plugin-vue': '^3.2.0',
  'vue-tsc': '^1.0.9',
};

export const VUEDEPS = {
  vue: '^3.2.45',
};

export const VUEPLUGINS = {
  vue: 'import vue from "@vitejs/plugin-vue"',
};
/** vue end */

/** react start */
export const REACTDEPS = {
  react: '^18.2.0',
  'react-dom': '^18.2.0',
};

export const REACTDEVDPS = {
  '@types/react': '^18.0.25',
  '@types/react-dom': '^18.0.8',
  '@vitejs/plugin-react': '^2.2.0',
};

export const REACTPLUGINS = {
  react: 'import react from "@vitejs/plugin-react"',
};
/** react end */

/** preact start */
export const PREACTDEPS = {
  preact: '^10.11.3',
};

export const PREACTDEVDPS = {
  '@preact/preset-vite': '^2.4.0',
};

export const PREACTPLUGINS = {
  preact: 'import preact from "@preact/preset-vite"',
};
/** preact end */

/** svelte start */
export const SVELTEDEPS = {};

export const SVELTEDEVDEPS = {
  '@sveltejs/vite-plugin-svelte': '^1.1.1',
  '@tsconfig/svelte': '^3.0.0',
  svelte: '^3.53.1',
  'svelte-check': '^2.9.2',
  'svelte-preprocess': '^4.10.7',
  tslib: '^2.4.1',
};

export const SVELTEPLUGINS = {
  svelte: 'import { svelte } from "@sveltejs/vite-plugin-svelte"',
};
/** svelte end */

/** qwik start */
export const QWIKDEPS = {
  '@builder.io/qwik': 'latest',
};

export const QWIKDEVDPS = {};

export const QWIKPLUGINS = {
  qwikVite: 'import { qwikVite } from "@builder.io/qwik/optimizer"',
};
/** qwik end */

/** angular start */
export const ANGULARDEPS = {};

export const ANGULARDEVDPS = {
  '@nxext/angular-vite': 'latest',
};

export const ANGULARPLUGINS = {
  ViteAngularPlugin: 'import { ViteAngularPlugin } from "@nxext/angular-vite"',
};
/** angular end */

/** solid start */
export const SOLIDDEPS = {
  solid: 'latest',
};

export const SOLIDDEVDPS = {
  'vite-plugin-solid': 'latest',
  'babel-preset-solid': 'latest',
};

export const SOLIDPLUGINS = {
  solidPlugin: 'import solidPlugin from "vite-plugin-solid"',
};
/** solid end */

// build without tsc command
export const ESCAPETSCFRAMEWORK = [FRAMEWORK.SOLID, FRAMEWORK.SVELTE];

// need jsx ts check
export const JSX = [FRAMEWORK.REACT, FRAMEWORK.PREACT, FRAMEWORK.QWIK, FRAMEWORK.VUE];

// check need jsx
export const checkJSX = (framework: FRAMEWORK): boolean => {
  return JSX.includes(framework);
};

// generate final build command
export const generateBuildCommand = (framework: FRAMEWORK): string => {
  const baseCommand = 'vite build';
  const tsc = ESCAPETSCFRAMEWORK.includes(framework)
    ? ''
    : framework === FRAMEWORK.VUE
    ? 'vue-tsc & '
    : 'tsc & ';
  return `${tsc}${baseCommand}`;
};

export const generateGlobals = (deps: Record<string, string>): Record<string, string> => {
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

export type Options = {
  plugins?: Record<string, string>;
  peerDependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  globals?: Record<string, string>;
};

export const generateFrameworkOptions = (framework: FRAMEWORK): Required<Options> => {
  let options: Options = {};
  switch (framework) {
    case FRAMEWORK.ANGULAR:
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
    case FRAMEWORK.PREACT:
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
    case FRAMEWORK.QWIK:
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
    case FRAMEWORK.REACT:
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
    case FRAMEWORK.SOLID:
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
    case FRAMEWORK.SVELTE:
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
    case FRAMEWORK.VUE:
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
  return options as Required<Options>;
};
