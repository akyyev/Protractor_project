var Elements = function(){
    this.Fleet =  element(By.xpath("(//span[contains(text(), 'Fleet')])[1]"));
    this.Vehicles = element(by.xpath("//span[contains(text(), 'Vehicles')]"));
    this.dashboard = element(by.xpath("//a/span[contains(text(), '   Dashboards')]"));
};

module.exports = new Elements();