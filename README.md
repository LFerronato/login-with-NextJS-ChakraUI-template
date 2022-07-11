# .

## Passo a Passo
1. Install NextJS with typescript template ([doc](https://nextjs.org/docs/getting-started#automatic-setup))
```sh
npx create-next-app@latest --typescript
```
2. Reorganize Folders
```sh
mv /pages /src/pages
```

OBS: tanto `/pages`, quanto `/src/pages` são consideradas pelo NextJS como `file-system based router`

3. Tendo em vista o uso do chakra, não vamos usar a pasta `style`; assim como `/src/api/*`
```sh
rm -rf styles src/pages/api
```
4. Config `"baseUrl": "src"` in `tsconfig.json` para usar caminhos relativos ao fazer importações.

5. acessar: https://chakra-ui.com/getting-started

## Interface - Login page
> [Figma](https://www.figma.com/file/RiImeIZT32pLizDPLdLg8M/Login-with-NextJS-and-ChakraUI?node-id=0%3A1)

  // const data = await axios.get('https://jsonplaceholder.typicode.com/todos')
  // console.log('data => ', data)


tmp save
```
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:active,
input:-webkit-autofill:focus {
  background-color: #FFFFFF !important;
  color: #555 !important;
  -webkit-box-shadow: 0 0 0 1000px white inset !important;
  -webkit-text-fill-color: #555555 !important;
}
```
