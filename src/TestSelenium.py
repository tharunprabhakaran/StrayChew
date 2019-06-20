from selenium import webdriver
from selenium.webdriver.common.keys import Keys

options = webdriver.ChromeOptions()
options.add_argument('--ignore-certificate-errors')
options.add_argument("--test-type")
driver = webdriver.Chrome(executable_path="./chromedriver",options=options)

driver.get("https://www.zomato.com/chennai/delivery")
elem = driver.find_element_by_id("orig-search-list")


RestaurentType = [x.text for x in elem.find_elements_by_xpath("""//div[@class='content']
                                                    //div[@class='js-search-result-li even  status 1']
                                                    //article[@class='search-result  ']
                                                    //div[@class='pos-relative clearfix    ']
                                                    //div[@class='row']//div[@class='col-s-16  col-m-12  pl0  ']
                                                    //div[@class='row']//div[@class='col-s-12']
                                                    //div[@class='res-snippet-small-establishment mt5']
                                                    //a""")]


RestaurentName = [x.text for x in elem.find_elements_by_xpath("""//div[@class='content']
                                                    //div[@class='js-search-result-li even  status 1']
                                                    //article[@class='search-result  ']
                                                    //div[@class='pos-relative clearfix    ']
                                                    //div[@class='row']//div[@class='col-s-16  col-m-12  pl0  ']
                                                    //div[@class='row']//div[@class='col-s-12']
                                                    //a[@class='result-title hover_feedback zred bold ln24   fontsize0 ']""")]


for i in RestaurentName:
    print("TEXT -- ", i)
driver.close()
