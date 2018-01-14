# Garlic Recipes
Helper Website for Garlicoin

## Contribute
If you want to contribute a tutorial, you can submit a Pull Request.  

Make sure you `git pull` and `npm install` before building/developing.

When developing, use `gulp watch` to watch for files and automatically build when a file has changed. Also, use `npm run dev` to start a basic express server so you can test your changes on `localhost:3000`.

To create a new tutorial, just create an `md` file in the `src/content` folder and add its metadata inside the `src/content/content.json` file.

Once you are done, don't forget to `gulp prod` (to clean the dist folder and build everything).

## Links for future ref
[bulma](https://bulma.io/)