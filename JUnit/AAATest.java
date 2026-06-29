import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.After;
import org.junit.Test;

public class AAATest {

    private int number;

    @Before
    public void setUp() {
        number = 10;
        System.out.println("Setup completed");
    }

    @Test
    public void testAddition() {

        // Arrange
        int a = number;
        int b = 5;

        // Act
        int result = a + b;

        // Assert
        assertEquals(15, result);
    }

    @After
    public void tearDown() {
        System.out.println("Teardown completed");
    }
}
