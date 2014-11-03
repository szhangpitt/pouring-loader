pouring-loader
==============

A widget to display an icon font based loader with a pouring water effect

The angular directive is called "loadProgressIcon", see assets/scripts/app.js. 

Demo at http://szhangpitt.github.io/pouring-loader/

How to use
-----------
### Normal use: filling up, inertia enabled 
Use this when your preloading process is relatively fast and you don't need that much control. The filling up animation will take 0.8s. 

![alt tag](https://raw.githubusercontent.com/szhangpitt/pouring-loader/master/Picture1.jpg)
```html
<div load-progress-icon iconclass="glyphicon glyphicon-picture" progress="{{imageLoadPercentage}}"></div>
<input type="range" min="0" max="100" ng-model="imageLoadPercentage">
```

### Instant update: filling up, instantly updates according to loading progress. 

![alt tag](https://raw.githubusercontent.com/szhangpitt/pouring-loader/master/Picture2.jpg)
```html
<div load-progress-icon iconclass="glyphicon glyphicon-picture" progress="{{imageLoadPercentage}}" instant="true"></div>
<input type="range" min="0" max="100" ng-model="imageLoadPercentage">
```

### Pouring down. The active color will be filled from top to bottom. 

![alt tag](https://raw.githubusercontent.com/szhangpitt/pouring-loader/master/Picture3.jpg)
```html
<div load-progress-icon iconclass="glyphicon glyphicon-filter" progress="{{tagLoadPercentage}}" towards="down"></div>
<input type="range" min="0" max="100" ng-model="tagLoadPercentage">
```

### Customized color: any CSS style will do the job. 

![alt tag](https://raw.githubusercontent.com/szhangpitt/pouring-loader/master/Picture4.jpg)
```html
<div load-progress-icon iconclass="glyphicon glyphicon-globe" progress="{{advLoadPercentage}}" towards="right" activecolor="green"></div>
<input type="range" min="0" max="100" ng-model="advLoadPercentage">
```
