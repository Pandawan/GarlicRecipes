# Garlicoin Help
Helper Website for Garlicoin

## TODO
- Make navbar pull its data from content.json (probably a `navbar` object).
- Change logo from Bulma to real one
- Maybe change name to Garlic Recipes or Garlic Kitchen?

## Contribute
If you want to contribute a tutorial, you can submit a Pull Request.  

To create a new tutorial, just create an `md` file in the `src/content` folder and add its metadata inside the `src/content/content.json` file.
You might also need to create a new `card` on the home page (`src/index.ejs`) or add a link to your tutorial in the navbar (`src/navbar.ejs`).  

Once you are done, don't forget to `gulp prod` to clean the dist folder and build everything.

## Links for future ref
[bulma](https://bulma.io/)