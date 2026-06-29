public class SearchTest {

    public static Product linearSearch(Product[] products, String productName) {
        for (Product product : products) {
            if (product.productName.equalsIgnoreCase(productName)) {
                return product;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, String productName) {

        int left = 0;
        int right = products.length - 1;

        while (left <= right) {

            int mid = (left + right) / 2;

            int result = products[mid].productName.compareToIgnoreCase(productName);

            if (result == 0)
                return products[mid];

            else if (result < 0)
                left = mid + 1;

            else
                right = mid - 1;
        }

        return null;
    }

    public static void main(String[] args) {

        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shoes", "Fashion"),
            new Product(103, "Mobile", "Electronics"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "Book", "Education")
        };

        Product result1 = linearSearch(products, "Mobile");

        if(result1 != null)
            result1.displayProduct();

        Product[] sortedProducts = {
            new Product(105, "Book", "Education"),
            new Product(101, "Laptop", "Electronics"),
            new Product(103, "Mobile", "Electronics"),
            new Product(102, "Shoes", "Fashion"),
            new Product(104, "Watch", "Accessories")
        };

        Product result2 = binarySearch(sortedProducts, "Mobile");

        if(result2 != null)
            result2.displayProduct();

        System.out.println("Linear Search Time Complexity : O(n)");
        System.out.println("Binary Search Time Complexity : O(log n)");
    }
}