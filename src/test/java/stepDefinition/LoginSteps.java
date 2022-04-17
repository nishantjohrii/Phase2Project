package stepDefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginSteps {
	
	WebDriver driver = BaseClass.driver;
	
	@Given("Launch the SwagLab application")
	public void launch_the_SwagLab_application() throws InterruptedException {
	    driver.get("https://www.saucedemo.com/");
	    Thread.sleep(5000);
	    
	}

	@When("Enter valid username {string}")
	public void enter_valid_username(String UserNameVal) {
	    WebElement UserName = driver.findElement(By.id("user-name"));
	    UserName.sendKeys(UserNameVal);
	}

	@When("Enter valid password {string}")
	public void enter_valid_password(String PasswordVal) {
	    WebElement Password = driver.findElement(By.id("password"));
	    Password.sendKeys(PasswordVal);
	}

	@When("click on login button")
	public void click_on_login_button() {
	    // Write code here that turns the phrase above into concrete actions
	    WebElement LoginBtn = driver.findElement(By.id("login-button"));
	    LoginBtn.click();
	}

	@Then("user should land on the home page")
	public void user_should_land_on_the_home_page() {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("User lands on home page");
	}

	@When("Enter invalid password {string}")
	public void enter_invalid_password(String PassWordVal) {
	    // Write code here that turns the phrase above into concrete actions
		WebElement Password = driver.findElement(By.id("password"));
	    Password.sendKeys(PassWordVal);
	}

	@Then("error message appears {string}")
	public void error_message_appears(String ExpectedMsg) {
	    // Write code here that turns the phrase above into concrete actions
	    WebElement ErrorMsg = driver.findElement(By.xpath("//h3[@data-test='error']"));
	    
	    String ActualMsg = ErrorMsg.getText();
	    
	    Assert.assertEquals(ExpectedMsg, ActualMsg);
	}

}
