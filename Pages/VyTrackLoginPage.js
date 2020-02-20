var Elements = function(){
    this.UserName = element(by.id("prependedInput"));
    this.PassWord = element(by.id("prependedInput2"));
    this.LogInButton = element(by.xpath("//button[@type='submit']"));
};

module.exports = new Elements();