import {
  FRAMEWORKCHOICES,
  generateBuildCommand,
  checkJSX,
  generateFrameworkOptions,
} from '../frameworkMeta';
import { FRAMEWORK, Options } from '../frameworkMeta';
import type { NodePlopAPI, ActionType } from 'plop';
import { devDependencies } from '../package.json';

const viteVersion = devDependencies.vite;
const tsVersion = devDependencies.typescript;

export type Answers = {
  packageName: FRAMEWORK;
  description: string;
  outDir: 'packages' | 'examples';
};

export type PlopPackageData = Answers & {
  [key in FRAMEWORK]?: boolean;
} & {
  jsx?: boolean;
  buildCommand?: string;
} & Options;

export default (plop: NodePlopAPI) => {
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
      const excuteAnswers = answers as PlopPackageData;
      const { packageName, description } = excuteAnswers;
      const actions: ActionType[] = [];
      if (Object.keys(excuteAnswers).filter(Boolean).length) {
        // add frameworkInfo
        excuteAnswers[packageName] = true;
        // jsx
        excuteAnswers.jsx = checkJSX(packageName);
        // build
        excuteAnswers.buildCommand = generateBuildCommand(packageName);
        // deps
        const { devDependencies, peerDependencies, globals, plugins } =
          generateFrameworkOptions(packageName);
        excuteAnswers.devDependencies = {
          typescript: tsVersion,
          vite: viteVersion,
          ...devDependencies,
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
          ...(packageName !== FRAMEWORK.SVELTE
            ? { globOptions: { ignore: ['plop/package/svelte.config.js.hbs'] } }
            : {}),
        });
      }
      return actions;
    },
  });
};
