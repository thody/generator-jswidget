'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var ReactGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic React generator.'));

    var prompts = [{
      name: "name",
      message: "What do you want to call this app?"
    }];

    this.prompt(prompts, function (props) {
      this.slugname = this._.slugify(props.name);
      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('src');
    this.mkdir('src/styles');
    this.mkdir('src/styles/scss');
    this.mkdir('src/scripts');

    this.template('_package.json', 'package.json');
    this.template('_Gulpfile.js', 'Gulpfile.js');
    this.template('src/_index.html', 'src/index.html');
    this.copy('_.gitignore', '.gitignore');
    this.copy('src/scripts/app.js', 'src/scripts/app.js');
    this.copy('src/styles/scss/main.scss', 'src/styles/scss/main.scss');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = ReactGenerator;