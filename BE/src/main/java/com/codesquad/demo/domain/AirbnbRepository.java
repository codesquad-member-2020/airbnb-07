package com.codesquad.demo.domain;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AirbnbRepository extends CrudRepository<Airbnb, Long> {

}
