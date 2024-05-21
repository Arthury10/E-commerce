export default function (plop) {
	plop.setGenerator('component', {
		description: 'Gerador de componentes React',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Nome do componente:',
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/components/UI/{{name}}/index.tsx',
				templateFile: '.vscode/generate/Component.tsx.hbs',
			},
			{
				type: 'add',
				path: 'src/components/UI/{{name}}/{{name}}.stories.tsx',
				templateFile: '.vscode/generate/stories.tsx.hbs',
			},
			{
				type: 'add',
				path: 'src/components/UI/{{name}}/{{name}}.spec.tsx',
				templateFile: '.vscode/generate/spec.tsx.hbs',
			},
			{
				type: 'add',
				path: 'src/components/UI/{{name}}/types.ts',
				templateFile: '.vscode/generate/types.ts.hbs',
			},
		],
	});
}
