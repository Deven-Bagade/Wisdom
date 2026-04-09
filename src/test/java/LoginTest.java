import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;
import org.testng.Assert;
import org.testng.annotations.Test;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginTest {

    @Test
    public void testLogin() {

        WebDriverManager.chromedriver().setup();

        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless=new");
        options.addArguments("--no-sandbox");

        WebDriver driver = new ChromeDriver(options);

        driver.get("http://localhost:8083/login");

        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(20));

        // 🔥 DEBUG: see what page is actually loaded
        System.out.println("URL: " + driver.getCurrentUrl());

        // ✅ WAIT until page fully loads
        wait.until(webDriver ->
            ((org.openqa.selenium.JavascriptExecutor) webDriver)
                .executeScript("return document.readyState").equals("complete")
        );

        // ✅ WAIT for React to render login input
        wait.until(ExpectedConditions.presenceOfElementLocated(By.id("username")));

        driver.findElement(By.id("username")).sendKeys("student");
        driver.findElement(By.id("password")).sendKeys("Password123");
        driver.findElement(By.id("submit")).click();

        wait.until(ExpectedConditions.alertIsPresent());

        String alertText = driver.switchTo().alert().getText();
        Assert.assertTrue(alertText.contains("Login Successful"));

        driver.switchTo().alert().accept();

        driver.quit();
    }
}