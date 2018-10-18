import Database from "better-sqlite3";

//simple
function insertInto() {
	let db = new Database(dbFilePath);
	db.exec("INSERT INTO score(name, score) VALUES ('Name', 9000);");
	db.close(); 
}
/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO score (name, score) VALUES ('Antoine', 1000)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});*/

//multiple
function insertMultiple() {
	let db = new Database(dbFilePath);
	let values = [
		['John', 1000],
		['Antoine', 325],
		['Amy', 652],
		['Hannah', 2000],
		['Michael', 3000]
	];
	db.exec("INSERT INTO score (name, score) VALUES ?;");
	db.close(); 
}
/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO score (name, score) VALUES ?";
  var values = [
    ['John', 1000],
    ['Antoine', 325],
    ['Amy', 652],
    ['Hannah', 2000],
    ['Michael', 3000]
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});*/

export {insertInto as default, (insertMultiple)};