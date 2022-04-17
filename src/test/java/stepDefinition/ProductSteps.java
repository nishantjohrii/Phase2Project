package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;

@SuppressWarnings("deprecation")
public class ProductSteps {
	
	WebDriver driver = BaseClass.driver;
	
	@Given("User has launched the swag application")
	public void user_has_launched_the_swag_application() throws InterruptedException {
	    driver.get("https://www.saucedemo.com/");
	    Thread.sleep(3000);
	}

	@When("Enter the username {string} and password {string}")
	public void enter_the_username_and_password(String string, String string2) {
	    WebElement username = driver.findElement(By.id("user-name"));
	    username.sendKeys("standard_user");
	    
	    WebElement password = driver.findElement(By.id("password"));
	    password.sendKeys("secret_sauce");
	}

	@When("Click on login button")
	public void click_on_login_button() {
	    driver.findElement(By.id("login-button")).click();
	}
	
	@When("User is logged in successfully and is on products page")
	public void user_is_logged_in_successfully_and_is_on_products_page() {
		System.out.println("User lands on home page");
	    
	}

	@Then("Validate the product and its price")
	public void validate_the_product_and_its_price(io.cucumber.datatable.DataTable dataTable) {
		int rows = dataTable.height();
		for (int i=0; i<rows; i++) {
			
			String Product = dataTable.cell(i, 0);
			String Price = dataTable.cell(i, 1);
			
		String productPrice = driver.findElement(By.xpath("//div[text()='"+Product+"']/following::div[@class='inventory_item_price'][1]")).getText();
			
			
			 Assert.assertEquals(Price, productPrice);
		}
	}

}
