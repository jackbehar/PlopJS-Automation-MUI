const fs = require('fs');
const path = require('path');

module.exports = function (plop) {
  plop.setGenerator('generateComponents', {
    description: 'Generate components from JSON data',
    prompts: [],
    actions: () => {
      const jsonData = JSON.parse(
        fs.readFileSync(path.join(__dirname, 'componentData.json'), 'utf-8')
      );

      const actions = [];

      // Add the first add action (component wrapper generation)
      jsonData.forEach((data) => {
        actions.push({
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'plop-templates/ComponentTemplate.tsx.plop.hbs',
          data,
          skipIfExists: true,
        });
      });

      // Add another add action (component preset generation)
      jsonData.forEach((data) => {
        actions.push({
          type: 'add',
          path: 'src/components/{{pascalCase name}}/Presets/0-default.jsx', // Updated to .tsx
          templateFile: 'plop-templates/Preset.hbs',
          data,
          skipIfExists: true,
        });
      });

      // Add another add action (uxpin.config generation)
      jsonData.forEach((data) => {
        actions.push({
          type: 'append',
          path: 'src/components/uxpin.config.jsx',
          pattern: '/* PLOP_INJECT_IMPORT */',
          template:
          "           'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',",
          data,
        });
      });

      // Add another add action (index import generation)
      jsonData.forEach((data) => {
        actions.push({
          type: 'append',
        path: 'src/components/index.ts',
        pattern: '/* PLOP_INJECT_IMPORT */',
        template:
          "import {{pascalCase name}}{{camelCase type}} from './{{pascalCase name}}/{{pascalCase name}}.tsx';",
          skipIfExists: true,
          data,
        });
      });
      
      // Add another add action (index export generation)
      jsonData.forEach((data) => {
        actions.push({
          type: 'append',
          path: 'src/components/index.ts',
          pattern: '/* PLOP_INJECT_EXPORT */',
          template: '\t{{pascalCase name}}{{pascalCase type}},',
          data,
          skipIfExists: true,
        });
      });

      return actions;
    },
  });
};