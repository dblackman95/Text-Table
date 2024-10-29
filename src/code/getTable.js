function getTable(table_def) {
  
  //Input should be a table definition similar to the one below.
  
  // var table_def = {
  //   header: ["ID", "NAME", "AGE", "ADDRESS", "SALARY"],
  //   records: [
  //     ["1", "Ramesh", "32", "Ahmedabad", "2000.00"],
  //     ["2", "Khilan", "25", "Delhi", "1500.00"],
  //     ["3", "Kaushik", "23", "Kota", "2000.00"],
  //     ["4", "Chaitali", "25", "Mumbai", "6500.00"],
  //     ["5", "Hardik", "27", "Bhopal", "8500.00"],
  //     ["6", "Komal", "22", "MP", "4500.00"]
  //   ]
  // };

  //1. Read in the header information => header_list = [ID, NAME, AGE, ADDRESS, SALARY].
  table_def = JSON.parse(table_def);

  var header = table_def.header;

  //2. Read in a list of records where each record is of length header_list => records = [[ID, NAME, AGE, ADDRESS, SALARY], [ID, NAME, AGE, ADDRESS, SALARY], [ID, NAME, AGE, ADDRESS, SALARY]]
  var records = table_def.records;

  //3. Write a method that returns a list with the length of maximum characters in each header => header_sizes = [1, 8, 2, 9, 7] (ID=1, Name=8, Age=2, Address=9, Salary=7)
  var header_sizes = [];
  for (var i = 0; i < header.length; i++) {
    header_sizes[i] = header[i].length;
  }

  records.forEach((record) => {
    record.forEach((item, i) => {
      if (item.length > header_sizes[i]) {
        header_sizes[i] = item.length;
      }
    })
  });

  //4. Write a method that builds the table around the data

  function padToLength(string, length) {
    let delta = length - string.length;
    let padded_string = string;
    for (let i = 0; i < delta; i++)
      padded_string += " ";
    return padded_string;
  }
  
  function getBorder() {
    let header_top = "+";
    header.forEach((item, i) => {
      let length = padToLength(item, header_sizes[i]).length;
      for (var j = 0; j < length; j++) {
        header_top += "−"; 
      }
      header_top += "+";
    });
    return header_top;
  }

  function getHeader() {
    let header_string = "";
    header_string += "|";
    header.forEach((item, i) => {
      header_string += padToLength(item, header_sizes[i]) + "|";
    });
    return header_string;
  }

  function getRecord(record) {
    let record_string = "";
    record_string += "|";
    record.forEach((item, i) => {
      record_string += padToLength(item, header_sizes[i]) + "|";
    });
    return record_string;
  }

  let border = getBorder();
  let header_string = getHeader();

  var table = "";
  table += border + "\n";
  table += header_string + "\n";
  table += border + "\n";
  for (let i = 0; i < records.length; i++) {
    table += getRecord(records[i]) + "\n";
  }
  table += border + "\n";

  return table;
}

export default getTable;
