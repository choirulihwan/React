# React and flux web app
Repository for React and flux web app:

# Dependencies:
- npm install -g browserify
- npm install --save babelify
- npm install --save watchify
- npm install --save babel-preset-react
- npm install --save react
- npm install --save react-dom
- npm install babel-core --save-dev

# Error: 
- ReferenceError: createReactClass is not defined
# Solusi:
- npm install --save create-react-class
- var createReactClass = require('create-react-class');
- var ListItem = createReactClass({
-	render:function(){
-    	return(
-        	<li><h4>{this.props.ingredient}</h4></li>
-        );
-    }
- });
