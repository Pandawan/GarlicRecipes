# Garlic Recipes
Helper Website for Garlicoin  

If https://guide.garli.co.in does not work, check out https://pandawan.github.io/GarlicRecipes (Chrome gives a false-positive as a dangerous site, just ignore it).

## TODO
- Add CPU Miner files to zip
- New SGMiner download?
- Check that everything is good

## Contribute
If you want to contribute to this site, you can submit a Pull Request.  

### Setup
Make sure you `git pull` and `npm install` before building/developing.  
When developing, use `gulp watch` to watch for files and automatically build when a file has changed. Also, use `npm run dev` to start a basic express server so you can test your changes on `localhost:3000`.

### Tutorial
To create a new tutorial, just create an `md` file in the `src/content` folder and add its metadata inside the `src/content/content.json` file.

### Translation
To create a new translation, create a new folder in `src/content` with your country's language-code (Russian = `ru`, Russian would therefore be `src/content/ru`).  
Once that is done, copy all the `.md` files and the `content.json` files that are inside `src/content`, and put them into your new folder. You can now translate all of those files.  

### Build and Submit
Once you are done, you can submit your changes as a pull request

## Links for future ref
[bulma](https://bulma.io/)
