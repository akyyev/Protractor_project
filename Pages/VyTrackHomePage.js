var Elements = function(){
    this.Fleet =  element(By.xpath("(//span[contains(text(), 'Fleet')])[1]"));
    this.Vehicles = element(by.xpath("//span[contains(text(), 'Vehicles')]"));
};

module.exports = new Elements();