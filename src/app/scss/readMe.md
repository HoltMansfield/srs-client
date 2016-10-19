We have two totally separate webpack loaders.

They output to:

/css/global.[name].[hash].css
/css/scoped.[name].[hash].css

Global is mostly third party libraries that we don't want css-modules to prefix.
Scoped is what has been run through css-modules and has prefixed class names.

global.css
  -[bootstrap]
  -[font-awesome]
  -[fonts]
  global-styles.scss (this is actually our page layout etc)

scoped.css
    any file that matches *.module.scss
