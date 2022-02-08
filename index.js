class Formatter {
  //add static methods here
  static capitalize(string){
    const firstString = string.charAt(0) //grabs first character in string, good
    const capFirstString = firstString.toUpperCase()
      return capFirstString + string.slice(1)
  }

  static sanitize(string){//removes all non-alphanumeric chars except dashes, single quotes and spaces.
      console.log(string, "sanitize STRING")

      return string.replace(/[^a-zA-Z0-9 '-]/g, "")
      
  }
}

