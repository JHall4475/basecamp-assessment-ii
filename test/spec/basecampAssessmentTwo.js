describe('me object should exist and contain correct key/value pairs', function () {
	it('should exist and be an object', function () {
		expect(me).toEqual(jasmine.any(Object));
	});
	var actual = Object.keys(me).sort();
	var expected = [
		'firstname',
		'age',
		'state',
		'faveColor'
	].sort();
	it("should contain the keys with the appropriate values", function () {
		expect(actual).toEqual(expected);
	});
});

describe("message object contains text key/value pair", function () {
	var actual = Object.keys(message).sort();
	var expected = [
		'date',
		'userName',
		'text'
	].sort();
	it("should contain the text keys", function () {
		expect(actual).toEqual(expected);
	});
});

describe("adjustCount object contains upVote and downVote methods and exist", function () {
	var actual = Object.keys(adjustCount).sort();
	var expected = [
		'upVote',
		'downVote',
	].sort();
	it("should contain the correct methods", function () {
		expect(actual).toEqual(expected);
	});
	it('should exist and be an object', function () {
		expect(adjustCount).toEqual(jasmine.any(Object));
	});
	it("upVote should return the correct number", function () {
		expect(adjustCount.upVote(3)).toEqual(4);
	});
	it("upVote should return the correct number", function () {
		expect(adjustCount.downVote(3)).toEqual(2);
	});
});

describe("myFriends should exist and contain the correct amount of friends", function () {
	it("should exist and contain four names", function () {
		expect(myFriends).toEqual(jasmine.any(Array));
	});
	it("should contain 5 names", function () {
		expect(myFriends.length).toEqual(5);
	});
});

describe("myArrayCopy should exist and contain the correct values", function () {
	it("should exist and contain four names", function () {
		expect(myArrayCopy).toEqual(jasmine.any(Array));
	});
	it("should contain correct values", function () {
		expect(myArrayCopy).toEqual([1, 2, 3, 4]);
	});
});

describe("evensOnly should return the correct numbers", function () {
	it("should exist and be a function", function () {
		expect(evensOnly).toEqual(jasmine.any(Function));
	});
	it("should return correct values", function () {
		expect(evensOnly()).toEqual([4, 34, 88, 222]);
	});
});

describe("trueFriends should contain the correct people", function () {
	it("should return correct values", function () {
		expect(trueFriends).toEqual([{ name: 'Steve', friend: true }, { name: 'Bart', friend: true }, { name: 'Holly', friend: true },]);
	});
});

describe("indexFinder should return the indexes from the randomNumber array", function () {
	it("indexes should exist and contain the correct values", function () {
		expect(indexes).toBeDefined();
		expect(indexes).toEqual([0,1,2,3,4,5,6,7])
	});
});

var me = {firstname:"Jared", age:28, state:"Utah"};

me.faveColor = "Green"

var message = {
	date: new Date(),
	userName: me.firstname
  };
 
  message["text"] = "Don't drink the Coffee"

  var adjustCount = {
	upVote : function (num) {
	  return num + 1;
	},
	downVote : function (num) {
	  return num - 1;
	}
  };

  var myFriends = [
	"Ean",
	"Josh",
	"Kevin",
	"Kendall"
  ];
  myFriends[4]="Megan"
 
  var myArray = [1, 2, 3, 4];
  var myArrayCopy = myArray
  
  var myNumbers = [333, 1, 4, 5, 511, 34, 88, 77, 222];
  function evensOnly() {
	var evensArray=[];
	for (let i=0; i<myNumbers.length; i++) {
	  if ((myNumbers[i] % 2) == 0) {
		evensArray.push(myNumbers[i]);
	  }
	}
	return evensArray;
  }
	evensOnly();
	
	var peopleIknow = [
  { name: "Steve", friend: true },
  { name: "Dan", friend: false },
  { name: "Bart", friend: true },
  { name: "Sarah", friend: false },
  { name: "Michelle", friend: false },
	{ name: "Holly", friend: true }
	];
	
	var trueFriends = peopleIknow.filter (function (element) {
		return element.friend === true;
	});
	console.log(trueFriends);

	/*let randomNumbers = [1, 3453, 34, 456, 32, 3, 2, 0];
	var indexes = [];
	function indexFinder(array){
		array.map(function (element, index){
		 indexes.push(index)
    })
    return indexes
	};
	indexFinder(randomNumbers);
*/