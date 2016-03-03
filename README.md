# Bloc and Angular JS Starter

### General Info

This app uses postgresql so you will need to have postgres installed and have the server running in the background in order to run this app.

Also need to have bower installed as bower is used to serve the frontend assets. This means you also have to have npm and node.js installed.  The .bowercc file states the default directory to install and serve assets:
```
{
  "directory":"vendor/assets/bower_components"
}
```

The starter comes with angular, angular-ui-route, and normalize.css pre-installed via bower. Simply run `$ bower uninstall [package-name] --save` to uninstall unwanted bower packages.

### Setup

You will need to make your own config/database.yml file locally once you clone the repository.  Use the config/database.yml.sample file as a guide.  Change all instances of "app-name" to the name of your app.  Then if you want to create a specific user for postgresql run:
```
$ createuser -P -s -e [user-name]
```
and you will be prompted to enter a password as well.  Then just add username: and password: options in the database.yml file under the development: option.

Then to finish setup run these commands:
```
$ bundle
$ rake db:create
```

### Launch

execute:
```
$ rails s
```
