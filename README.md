# Garlic Recipes
Helper Website for Garlicoin

## TODO
- Update the binaries in the zip files with the MainNet binaries.
- Add new link to Ske's Garlium (Main-Net version)
- Post message in #devupdates "I have just released the updated guide for MainNet on Garlic Recipes. **To all Pool Owners**, please PM me when you have updated your pool so I can verify it!"

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
Once you are done, don't forget to `gulp prod` (to clean the dist folder and build everything) and submit as a Pull Request.

## Links for future ref
[bulma](https://bulma.io/)