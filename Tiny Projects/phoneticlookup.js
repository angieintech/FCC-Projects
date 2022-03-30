function phoneticLookup(val) {
  let result = "";

  // Create a variable called lookup. Then replace the switch statement by making lookup into a JS object.
    var lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    };
  // Afterwards, use this to lookup val and finally give the associated string a variable such as result.
    result = lookup[val];
    return result;
}

phoneticLookup("charlie");
  
