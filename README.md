# skeleton-woprdress

## Software and Versions

* WordPress 4.9.4
* Webpack (for Sass & ES6)

## System Dependencies

* PHP 7.1
* MySQL 5.6

## Environment Variables

None yet.

## Additional Services (Background Workers, APIs, etc)

None yet.

## Running This Project For the First Time

```bash
  $ git clone git@github.com:no-mayo/skeleton-wordpress.git
  $ cd skeleton-wordpress

  # Open a new Terminal tab for the following:
  $ cd wp-content/themes/no-mayo-custom
  $ npm install # to install JS dependencies from package.json
  $ npm run watch # so webpack will watch and compile the sass & js files

  # You'll need Apache and MySQL running on your machine to view this project -
  # see below for how to use MAMP, if you don't already have them set up
```

For WordPress, it can be handy to use the MAMP application to run Apache and MySQL on your machine.

It also comes with phpMyAdmin, for visual management of local databases.

Download the free version of MAMP [here](https://www.mamp.info/en/downloads/), install it, open it and click 'Start Servers' to start Apache and MySQL.

_Don't forget to update MAMP's server directory (Preferences > Document Root) to be the directory that contains your project folders._

You can then visit `localhost:8888` in your browser to see a list of your project folders. Select `skeleton-wordpress` to view this site.

If you're viewing the site for the first time, it will ask you to complete an install process for which you will need to create a local database (use http://localhost:8888/phpmyadmin). The default username and password for your new database will be 'root' + 'root', or 'root' + '' (empty string).

Complete the WordPress install process to get your local site connected to your local database.

Once you land at the WordPress Dashboard at the end, you can go to Appearance > Themes to activate the custom theme that is most likely where you'll be writing the php, html, css and js for this project.

Now when you visit http://localhost:8888/skeleton-wordpress, you'll see your custom theme.

## Running The Test Suite

None yet.

## Deployment: Staging

Coming soon.

## Deployment: Production

Coming soon.

Please note: Database migrations are not currently much of a 'thing' in the WordPress development workflow, so please discuss this with the team to make sure that everyone is on board with how to manually keep development and production databases in line. **Remember: always back up the production database before doing anything else!**

**Post-Deploy Checklist**

* Are the Updraft Plus (automated backups) and Wordfence (security) plugins activated and configured as required for this project?
* Does the production database contain the expected records? For example, did you create new pages or posts during development that now also need to be manually created on production? **Back up the production database first!**
