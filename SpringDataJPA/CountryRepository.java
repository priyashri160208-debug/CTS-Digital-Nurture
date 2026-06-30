import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CountryRepository extends JpaRepository<Country, String> {

    List<Country> findByName(String name);

    List<Country> findByNameContaining(String keyword);

    List<Country> findByNameStartingWith(String prefix);

    @Query("SELECT c FROM Country c WHERE c.name = ?1")
    List<Country> findCountryByNameHQL(String name);

    @Query(value = "SELECT * FROM country WHERE co_name = ?1", nativeQuery = true)
    List<Country> findCountryByNameNative(String name);
}
