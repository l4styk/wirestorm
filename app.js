var app = angular.module('thingStore', []);

app.controller('StoreController', function(){
    this.products = things;
  });

app.controller('TabController', function(){
    this.tab = 1;
    this.setTab = function(tab){
    	this.tab = tab;
    };
    this.isSet = function(tab){
    	return (this.tab === tab);
    }
  });

app.controller('CommentController', function(){
    this.comment = {};
    this.addComment = function(product){
    	product.comments.push(this.comment);
    	this.comment = {};
    };
    
  });

var things = [
    {
      name: 'thing1',
      description: " Chuck jerky shankle corned beef kielbasa brisket kevin tongue pig. Cupim meatloaf pork belly, porchetta cow pancetta ham jerky short loin shankle turducken frankfurter biltong meatball. Brisket ham hock biltong, spare ribs salami hamburger drumstick corned beef. Ball tip ribeye tongue alcatra kevin picanha prosciutto shank filet mignon.",
      price: 50,
      comments: [
      {
        body: "Chuck jerky shankle corned beef kielbasa brisket kevin tongue pig.",
      }, 
      {
        body: "Brisket ham hock biltong, spare ribs salami hamburger drumstick corned beef.",
      }]
    }, 
    {
      name: 'thing2',
      description: " Cupim meatloaf pork belly, porchetta cow pancetta ham jerky short loin shankle turducken frankfurter biltong meatball. Brisket ham hock biltong, spare ribs salami hamburger drumstick corned beef. Ball tip ribeye tongue alcatra kevin picanha prosciutto shank filet mignon.",
      price: 200,
      comments: [
      {
        body: "Chuck jerky shankle corned beef kielbasa brisket kevin tongue pig.",
      }, {
        body: "Brisket ham hock biltong, spare ribs salami hamburger drumstick corned beef.",
      }]
    }, 
    {
      name: 'thing3',
      description: " Brisket ham hock biltong, spare ribs salami hamburger drumstick corned beef. Ball tip ribeye tongue alcatra kevin picanha prosciutto shank filet mignon.",
      price: 100,
      comments: [
      {
        body: "Chuck jerky shankle corned beef kielbasa brisket kevin tongue pig.",
      }, {
        body: "Brisket ham hock biltong, spare ribs salami hamburger drumstick corned beef.",
      }]
    }
  ];

