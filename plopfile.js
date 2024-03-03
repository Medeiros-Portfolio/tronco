import { pascalCase } from 'pascal-case'
import chalk from 'chalk';
import directory from 'inquirer-directory';

export default function (plop) {
  plop.setWelcomeMessage(`🪵 ${chalk.greenBright(' [TRONCO]')} Welcome! What are we building today?\n`)

  plop.setPrompt('directory', directory);

  plop.setGenerator('state dependent class', {
    description: 'adds a state dependent class to the application',
    prompts: [
      {
        type: 'input',
        name: 'class_name',
        message: 'What is the name of the class?',
        validate: (value) => {
          const containsOnlyLetters = !/[^a-zA-Z]/.test(value);
          if(containsOnlyLetters) return true

          return `Class name should contain only letters. Received "${value}"`
        },
        filter: (value) => {
          return pascalCase(value)
        },        
      },
      {
        type: 'directory',
        name: 'directory',
        message: 'Where should the class be created?',
        basePath: './src'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/util/getContainerConfig.ts',
        templateFile: 'plop-templates/util/getContainerConfig.hbs',
        skipIfExists: true
      },
      {
        type: 'add',
        path: './start.ts',
        templateFile: 'plop-templates/start/start.hbs',
        skipIfExists: true
      },
      {
        type: 'add',
        path: 'src/types/{{directory}}/I{{class_name}}.ts',
        templateFile: 'plop-templates/types/StateDependentClass.hbs'
      },
      {
        type: 'add',
        path: 'src/types/{{directory}}/index.ts',
        templateFile: 'plop-templates/types/index.hbs'
      },
      {
        type: 'add',
        path: 'src/{{directory}}/{{class_name}}/{{class_name}}.ts',
        templateFile: 'plop-templates/StateDependentClass/StateDependentClass.hbs'
      },
      {
        type: 'add',
        path: 'src/{{directory}}/{{class_name}}/index.ts',
        templateFile: 'plop-templates/StateDependentClass/index.hbs'
      },
      {
        type: 'add',
        path: 'src/{{directory}}/{{class_name}}/state/{{class_name}}State.ts',
        templateFile: 'plop-templates/StateDependentClass/state/DefaultState.hbs'
      },
      {
        type: 'add',
        path: 'src/{{directory}}/{{class_name}}/state/index.ts',
        templateFile: 'plop-templates/StateDependentClass/state/index.hbs'
      },
    ]
  })
}